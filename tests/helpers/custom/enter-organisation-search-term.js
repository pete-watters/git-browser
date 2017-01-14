import loginApp from 'git-browser/tests/helpers/custom/login';

export default function enterOrganisationSearchTerm(searchTerm) {
  loginApp();
  fillIn('.form--organisationSearch .form__input--container input', searchTerm);
}

