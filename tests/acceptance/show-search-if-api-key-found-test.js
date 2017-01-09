import { test } from 'qunit';
import moduleForAcceptance from 'git-browser/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | show search if api key found');

test('Verify entering API key allows user to submit', function(assert) {
  visit('/');
  // populate gitHubAccessToken with fake key
  window.localStorage.setItem('gitHubAccessToken', '9s0s0s0s0s0s0s0s0s0s0s0s0s0s0s0s0s0s0s0s');

  andThen(function() {
    assert.equal(find('fieldset p span').text(), 'Valid Token found :');
    assert.equal(find('.form__label--container label').text(), 'GitHub Organisation');
  });
});
