import { test } from 'qunit';
import moduleForAcceptance from 'git-browser/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | enter git api key');

test('Verify entering API key allows user to submit', function(assert) {
  visit('/');
  // remove key from localStorage if exists
  window.localStorage.removeItem('gitHubAccessToken');
  fillIn('.form__input--container input', '9s0s0s0s0s0s0s0s0s0s0s0s0s0s0s0s0s0s0s0s');

  andThen(function() {
      assert.equal(find('.form__input--container button').prop('disabled'), false);
  });
});
