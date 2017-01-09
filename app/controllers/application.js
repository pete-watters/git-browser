import Ember from 'ember';

export default Ember.Controller.extend({
    organisationSearchString: null,
    validGitHubToken: () => {
        if(window.localStorage.getItem('gitHubAccessToken')){
            return true;
        }else{
            return false;
        }

    },
    gitHubApiToken: window.localStorage.getItem('gitHubAccessToken'),
    actions: {
        authenticateGitHubAccessToken() {
            window.localStorage.setItem('gitHubAccessToken', this.get('gitHubAccessToken'));
         }
    }
});
