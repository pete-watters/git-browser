import DS from 'ember-data';

export default DS.Model.extend({
  fullName: DS.attr(),
  language: DS.attr(),
  stargazersCount: DS.attr('number')
});
