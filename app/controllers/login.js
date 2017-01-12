import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate() {
      const { githubToken } = this.getProperties('githubToken');
      console.log("*****" + this.getProperties('githubToken'));
      return this.get('session').authenticate('authenticator:oauth2', githubToken);
    }
  }
});
