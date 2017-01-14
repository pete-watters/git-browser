import { test } from 'qunit';
import moduleForAcceptance from 'git-browser/tests/helpers/module-for-acceptance';
import loginApp from 'git-browser/tests/helpers/custom/login';

moduleForAcceptance('Acceptance | add git hub token');

test('Verify entering API key allows user to submit and shows organisation search', function(assert) {
  loginApp();

  andThen(function() {
    assert.equal(find('.form--organisationSearch input').length, 1);
  });
});

