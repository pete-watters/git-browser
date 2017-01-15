import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  events:{
    error: function(error) {
      this.transitionTo('page-not-found', error);
    }
  },
  actions: {
    authenticate(token) {
      return this.get('session').authenticate('authenticator:oauth2', token);
    }
  }
});
