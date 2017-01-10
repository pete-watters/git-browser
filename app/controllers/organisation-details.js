import Ember from 'ember';

export default Ember.Controller.extend({
    repositoryPrivateFlag: false,
    showBranchDetail: false,
    actions: {
        // getBranchInformation(repositoryFullName) {
        //
        //     let store = this.store;
        //     this.set('showBranchDetail', true);
        //
        //     let branchesURL = 'https://api.github.com/repos/' + repositoryFullName +'/branches';
        //
        //     let branchesLookupPromise = function() {
        //         return Ember.$.ajax(branchesURL, {
        //             success: (branches) => {
        //                 return branches.map((branch, index) => {
        //                     return store.createRecord('branch', {
        //                         id: index,
        //                         name: branch.name,
        //                         lastCommit: branch.commit.url,
        //                         repository: repositoryFullName
        //                     });
        //                 });
        //             },
        //             error: (reason) => {
        //                 reject(reason);
        //             }});
        //
        //     };
        //
        //     let branchDetails = branchesLookupPromise();
        //
        //     return Ember.RSVP.hash({
        //         branches: branchDetails
        //     });
        // }
    }
});
