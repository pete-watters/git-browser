import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('organisations', { path: 'organisations/:organisation_id' }, function() {});
  this.route('repository', { path: '/repository/:id' });
  this.route('page-not-found', { path: '/*wildcard' });
});

export default Router;
