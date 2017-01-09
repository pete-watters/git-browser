import Ember from 'ember';
import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
    host: 'https://api.github.com',
    headers: Ember.computed(() => {
        return {
            Authorization: "token " + window.localStorage.getItem('gitHubAccessToken') + " "
        };
    }).volatile() // volatile to prevent caching
});