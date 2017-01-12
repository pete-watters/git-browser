import Ember from 'ember';
import RSVP from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{

  model(params){

    let repositoryURL = 'https://api.github.com/orgs/' + params.organisation_id +'/repos';

    return RSVP.hash({
      organisation: this.store.find('github-organization', params.organisation_id ),
      repositories: Ember.$.getJSON(repositoryURL)
    });

  }
});
