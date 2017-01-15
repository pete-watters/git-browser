import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {

    Ember.$('#repository-list-0').addClass('is-active');
    Ember.run.scheduleOnce('afterRender', this, function() {

      Ember.$(".js-vertical-tab-content").hide();
      Ember.$(".js-vertical-tab-content:first").show();

      /* if in tab mode */
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
    });
  }

});
