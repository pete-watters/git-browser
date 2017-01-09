// import {expect} from 'chai';
// import {it, describe} from 'mocha';
import { describe} from 'mocha';
import {setupTest} from 'ember-mocha';

describe('Unit | Serializer | application', function() {
  setupTest('applications', {
    needs: ['serializer:application']
  });

  // it('serializes records', function() {
  //   let record = this.subject();
  //
  //   let serializedRecord = record.serialize();
  //
  //   expect(serializedRecord).to.be.ok;
  // });
});

