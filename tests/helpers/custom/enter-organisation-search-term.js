import apiKey from 'git-browser/tests/helpers/custom/api-key';

export default function enterOrganisationSearchTerm(searchTerm) {
  visit('/');
  fillIn('.form__input--container input', apiKey);
  click('.form__input--container button');
  fillIn('.form--organisationSearch .form__input--container input', searchTerm);
}

