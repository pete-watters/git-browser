import enterOrganisationSearchTerm from 'git-browser/tests/helpers/custom/enter-organisation-search-term';

export default function searchForOrganisation() {
  enterOrganisationSearchTerm('emberjs');
  click('.form--organisationSearch .form__input--container button');
}

