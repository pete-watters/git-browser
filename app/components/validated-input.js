import Ember from 'ember';
export default Ember.Component.extend({
    beenFocused: false,
    valid: null,
    hasError: Ember.computed('valid', 'beenFocused', function() {
        if (this.get('beenFocused')) {
            return !this.get('valid');
        }
    }),
    isValid: function (ev) {

        if(ev.value.length === 40){

            this.set('valid', true);
        }else{
            this.set('valid', false);
        }
    }.observes('value'),
    focusOut: function() {
        this.set('beenFocused', true);
    }
});

