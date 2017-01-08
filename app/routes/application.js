import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.store.findRecord('user', 'peter-watters');
    },
    actions: {
        star(repo) {
            repo.save();
        }
    }
});
