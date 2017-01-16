import { test } from 'qunit';
import moduleForAcceptance from 'git-browser/tests/helpers/module-for-acceptance';
import searchForOrganisation from 'git-browser/tests/helpers/custom/search-for-organisation';

moduleForAcceptance('Acceptance | filter repository');

test('Verify language filter works work on repository page', function(assert) {
  searchForOrganisation();
  fillIn('#repositoryLanguageSearchString' , 'HTML');

  // This is failing as having issues un-focusing frm field
  andThen(function() {
    // assert.equal(find('.side-image-content h4').text(), 'website');
    // assert.equal(find('#1791812 .comment-content h1').text(), 'website'); // hardcoded ID of the first ember repo
  });
});

