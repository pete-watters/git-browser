import Ember from 'ember';
import RSVP from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{

  rejectHandler: (errorResponse) => {

    return 'PromiseError: ' + errorResponse.status + ' ' +
                                  errorResponse.statusText +' error. ' +
                                   ' message - ' + errorResponse.responseJSON.message +
                                  ' documentation: ' + errorResponse.responseJSON.documentation_url;
  },
  model(params){

    let organisationURL = 'https://api.github.com/orgs/' + params.organisation_id;
    let repositoryURL = 'https://api.github.com/orgs/' + params.organisation_id +'/repos';

    // FIXME - I was loading properly via 'this.store' but was having serializer issues so opted for getJSON
    // // organisation: this.store.find('github-organization', params.organisation_id )

    return RSVP.hash({
      organisation: Ember.$.getJSON(organisationURL).error((error) => { this.transitionTo('/page-not-found?error=' + this.rejectHandler(error));}),
      repositories: Ember.$.getJSON(repositoryURL).error((error) => { this.transitionTo('/page-not-found?error='+ this.rejectHandler(error));})
    });

  }
});
