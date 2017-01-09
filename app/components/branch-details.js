import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',
    repositoryFullName: null,
    branchDetails: function() {

        let result;
        const branchesURL = 'https://api.github.com/repos/' + this.get('repositoryFullName') +'/branches';

        Ember.$.ajax({
            url: branchesURL,
            headers: { Authorization: "token " + window.localStorage.getItem('gitHubAccessToken') + " " },
            async: false,
            type: 'GET',
            success: function(data) {
                result = data;
            },
            error: (reason) => {
                reject(reason);
            }
        });
        return result;


    }.property('branchDetails')
});
