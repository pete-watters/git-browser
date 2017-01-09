import Ember from 'ember';
export default Ember.Route.extend( {
    model(){
        const store = this.store;
        const organisation = this.get('organisationSearchString');

        if(!organisation){
            return false;
        }else if(organisation){
            return store.find('orgs', { name: organisation });
        }
    }
});
