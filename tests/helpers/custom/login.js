import apiKey from 'git-browser/tests/helpers/custom/api-key';

export default function loginGitBrowser() {
  visit('/');
  click('#container--login a');
  fillIn('.form__input--container input', apiKey);
  click('.container');
  click('.form__input--container button');
}

