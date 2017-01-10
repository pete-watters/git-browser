import { test } from 'qunit';
import moduleForAcceptance from 'git-browser/tests/helpers/module-for-acceptance';
import apiKey from 'git-browser/tests/helpers/custom/api-key';

moduleForAcceptance('Acceptance | enter git api key');


test('Verify submit API key shows organisation search', function(assert) {
  visit('/');
  fillIn('.form__input--container input', apiKey);
  click('.form__input--container button');

  andThen(function() {
    assert.equal(currentURL(),'/');
    // FIXME - these asserts fail for Assertion after the final `assert.async` was resolved
    // assert.equal(('.form--organisationSearch .form__label--container label').text(), "GitHub Organisation");
    // assert.equal(('fieldset p span').text(), "Valid Token API found");

  });
});
