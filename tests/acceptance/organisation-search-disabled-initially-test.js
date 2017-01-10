import { test } from 'qunit';
import moduleForAcceptance from 'git-browser/tests/helpers/module-for-acceptance';
import apiKey from 'git-browser/tests/helpers/custom/api-key';

moduleForAcceptance('Acceptance | organisation search disabled until term entered');

test('Organisation search is disabled until term entered', function(assert) {

  visit('/');
  fillIn('.form__input--container input', apiKey);
  click('.form__input--container button');
  fillIn('.form--organisationSearch .form__input--container input', 'emberjs');


  andThen(function() {
    assert.equal(find('.form--organisationSearch .form__input--container button').prop('disabled'), false);
    assert.equal(find('.form--organisationSearch .form__input--container button').text(), 'Search');
  });
});
