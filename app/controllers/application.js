import Ember from 'ember';

export default Ember.Controller.extend({
    organisationSearchString: null,
    validGitHubToken: false,
    actions: {
        authenticateGitHubAccessToken() {
            this.set('validGitHubToken', true);
            window.localStorage.setItem('gitHubAccessToken', this.get('gitHubAccessToken'));
         }
    }
});
