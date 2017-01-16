import enterOrganisationSearchTerm from 'git-browser/tests/helpers/custom/enter-organisation-search-term';

export default function searchForOrganisation() {
  enterOrganisationSearchTerm('emberjs');
  // click hidden button for tst purposes - was getting messy with un-focusing
  click('#qunit-dummy-search');
}

