import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate(token) {
      return this.get('session').authenticate('authenticator:oauth2', token);
    }
  }
});
