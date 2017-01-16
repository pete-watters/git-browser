import Ember from 'ember';

export default Ember.Component.extend({
    filteredRepositoryList: function() {
      var filteredModel;
      if(this.get('repositoryLanguageSearchString') && this.get('repositoryPrivateFlag')){

        filteredModel = this.get('inputModel').filterBy('language', this.get('repositoryLanguageSearchString'));
        filteredModel = filteredModel.filterBy('private', this.get('repositoryPrivateFlag'));
      }else if (this.get('repositoryLanguageSearchString')){
         filteredModel = this.get('inputModel').filterBy('language', this.get('repositoryLanguageSearchString'));
      }else if(this.get('repositoryPrivateFlag')){
        filteredModel = this.get('inputModel').filterBy('private', this.get('repositoryPrivateFlag'));
      } else{
        filteredModel = this.get('inputModel');
      }
      return filteredModel;
    }.property('repositoryLanguageSearchString', 'repositoryPrivateFlag'),

    didInsertElement: function() {
    Ember.$('#repository-list-0').addClass('is-active');
  },
  didRender: function (){
    Ember.$(".js-vertical-tab-content").hide();
    Ember.$(".js-vertical-tab-content:first").show();

    Ember.$(".js-vertical-tab").click(function(event) {
      event.preventDefault();

      Ember.$(".js-vertical-tab-content").hide();
      var activeTab = Ember.$(this).attr("rel");
      Ember.$("#"+activeTab).show();

      Ember.$(".js-vertical-tab").removeClass("is-active");
      Ember.$(this).addClass("is-active");

      Ember.$(".js-vertical-tab-accordion-heading").removeClass("is-active");
      Ember.$(".js-vertical-tab-accordion-heading[rel^='"+activeTab+"']").addClass("is-active");
    });
  },

});
