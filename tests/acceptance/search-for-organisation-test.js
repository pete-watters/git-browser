import { test } from 'qunit';
import moduleForAcceptance from 'git-browser/tests/helpers/module-for-acceptance';
import apiKey from 'git-browser/tests/helpers/api-key';

moduleForAcceptance('Acceptance | search for organisation');

test('visiting /search-for-organisation', function(assert) {
  visit('/');
  fillIn('.form__input--container input', apiKey);
  click('.form__input--container button');
  fillIn('.form--organisationSearch .form__input--container input', 'emberjs');
  click('.form--organisationSearch .form__input--container button');


  andThen(function() {
    assert.equal(find('fieldset strong').text(), 'Ember.js');
    assert.equal(find('fieldset img').attr('src'), 'https://avatars.githubusercontent.com/u/1253363?v=3');
    assert.equal(find('fieldset table tr').length, 31);
  });
});
