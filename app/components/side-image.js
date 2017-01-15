import Ember from 'ember';

export default Ember.Component.extend({
  didRender: function() {
    Ember.$('.images-wrapper').css('background-image', 'url(' + this.get('imageURL') + ')').css('background-position' , 'inherit');
  }
});
