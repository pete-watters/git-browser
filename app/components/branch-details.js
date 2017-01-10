import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',
    classNames: ['tr--branch-detail-results'],
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
            error: (error) => {
                console.log(error);
            }
        });
        return result;


    }.property('branchDetails')
});
