import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('organisation-details', { path: '/organisation-details/:organisation_name' });
  // this.route('page-not-found', { path: '/*wildcard' });
  // this.route('organisations');
  // this.route('repositorys');
  // this.route('branches');

  this.route('login');
  this.route('organisation', { path: 'organisation/:organisation_id' }, function() {});
  this.route('repository', { path: '/repository/:id' });

});

export default Router;
