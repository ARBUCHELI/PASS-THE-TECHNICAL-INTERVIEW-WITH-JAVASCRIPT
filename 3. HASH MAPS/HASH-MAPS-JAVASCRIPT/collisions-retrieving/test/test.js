console.log = function() {};
const fs = require('fs');
const { assert, expect } = require('chai');

describe('', function() {
  it('', function() {
    const HashMap = require('../HashMap');
    const hm = new HashMap(3);
    const testValue = 'test';
    expect(hm.retrieve(testValue), `Does \`.retrieve()\` return \`null\` if the value wasn't found?`).to.equal(null);
  });
});
