export { default } from 'ember-data-github/services/github-session';

import Ember from 'ember';

const { Service } = Ember;

export default Service.extend({
  githubAccessToken: ''
});
