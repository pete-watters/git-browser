import { test } from 'qunit';
import moduleForAcceptance from 'git-browser/tests/helpers/module-for-acceptance';
import apiKey from 'git-browser/tests/helpers/custom/api-key';

moduleForAcceptance('Acceptance | add git hub token');

test('Verify entering API key allows user to submit and shows organisation search', function(assert) {
  visit('/');
   fillIn('.form__input--container input', apiKey);

  andThen(function() {
    assert.equal(find('.form__input--container button').prop('disabled'), false);
  });
});

