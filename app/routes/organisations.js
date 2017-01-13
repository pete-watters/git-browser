import Ember from 'ember';
import RSVP from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{

  model(params){

    let repositoryURL = 'https://api.github.com/orgs/' + params.organisation_id +'/repos';
    let organisationURL = 'https://api.github.com/orgs/' + params.organisation_id;

    // FIXME - I was loading properly via 'this.store' but was having serializer issues so opted for getJSON
    // // organisation: this.store.find('github-organization', params.organisation_id )

    return RSVP.hash({
      organisation: Ember.$.getJSON(organisationURL),
      repositories: Ember.$.getJSON(repositoryURL)
    });

  }
});
