import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  fullName: attr(),
  name: attr(),
  language: attr(),
  htmlURL: attr(),
  private: attr(),
  branches: hasMany('branch'),
  showBranchDetail: attr('boolean', {defaultValue: false})
});
