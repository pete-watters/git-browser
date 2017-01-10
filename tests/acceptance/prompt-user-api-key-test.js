import { test } from 'qunit';
import moduleForAcceptance from 'git-browser/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | enter git api key');

test('Ensure user is prompted to enter Git token if not found locally', function(assert) {
  visit('/');
  // remove key from localStorage if exists
  window.localStorage.removeItem('gitHubAccessToken');

   andThen(function() {
    // make sure submit is there and disabled
    assert.equal(find('.form__input--container button').text(), 'Submit');
    assert.equal(find('.form__input--container button').prop('disabled'), true);
  });
});
