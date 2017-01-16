import { test } from 'qunit';
import moduleForAcceptance from 'git-browser/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | invalid URL');

test('Verify entering an incorrect URL warns the user', function(assert) {
  visit('/fakeURL');

  andThen(function() {
    assert.equal(find('.comment-content h1'), 'Error!');
  });
});

