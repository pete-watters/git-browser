import Ember from 'ember';

export function equal(val, val2, block) {
  if(val === val2){
    return block(this);
  }
}

export default Ember.Helper.helper(equal);
