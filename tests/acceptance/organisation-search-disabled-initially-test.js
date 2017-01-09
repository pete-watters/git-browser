import { test } from 'qunit';
import moduleForAcceptance from 'git-browser/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | organisation search disabled until term entered');

test('Organisation search is disabled until term entered', function(assert) {
  andThen(function() {
    // populate gitHubAccessToken with fake key
    window.localStorage.setItem('gitHubAccessToken', '9s0s0s0s0s0s0s0s0s0s0s0s0s0s0s0s0s0s0s0s');
  });
  visit('/');

  andThen(function() {
    assert.equal(find('.form__input--container button').text(), 'Search');
    assert.equal(find('.form__input--container button').prop('disabled'), true);

  });
});
