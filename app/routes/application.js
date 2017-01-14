import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  },
  events:{
    error: function(error){
      if (error.status === 0) {
        this.transitionTo('page-not-found', {queryParams: {error: 'Cannot connect to server. This problem is usually the result of a broken Internet connection. You can try refreshing this page.'}});
      } else if (error.status === 403) {
        this.transitionTo('page-not-found', {queryParams: {error: error.status + ' error: Forbidden. Likely you have reached the API limit. Try "curl -i https://api.github.com/orgs/emberjs" for more information' }});
        //go to some default route
      } else if (error.status === 401) {
        this.transitionTo('page-not-found', {queryParams: {error: error.status + ' error: Unauthorized'}});
        //handle 401
      } else if (error.status === 404) {
        this.transitionTo('page-not-found', {queryParams: {error: error.status + ' error: This page cannot be found'}});
      } else {
        this.transitionTo('page-not-found', {queryParams: {error: 'Unknown error'}});
      }
    }
  }
});
