import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  publicRepos: DS.attr('number'),
  repositories: hasMany()
});
