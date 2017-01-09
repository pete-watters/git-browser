import Ember from 'ember';
export default Ember.Component.extend({
    beenFocused: false,
    valid: null,
    hasError: Ember.computed('valid', 'beenFocused', function() {
        if (this.get('beenFocused')) {
            return !this.get('valid');
        }
    }),
    validateStandardTextField: (value) =>{
        var regExPattern = new RegExp("^([a-z0-9]{3,50})$"); // verify alphanumeric and between 5 and 20 charachters

        if(regExPattern.test(value)){
            return true;
        }else{
            return false;
        }
    },
    validateApiToken: (value) => {
        var regExPattern = new RegExp("^([a-z0-9]{40})$"); // verify alphanumeric and at least 40 long
        if (regExPattern.test(value)) {
            return true;
        } else {
            return false;
        }
    },
    isValid: function (input) {
        var isValid;
        if(this.get('validationType') === 'token'){
            isValid =  this.validateApiToken(input.value);
        }else{
            isValid =  this.validateStandardTextField(input.value);
        }
        this.set('valid', isValid);

    }.observes('value'),
    actions:{
        authenticateGitHubAccessToken: function () {
            this.sendAction('authenticateGitHubAccessToken');
        },
        searchForOrganisation: function () {
            this.sendAction('searchForOrganisation');
        }
}
});

