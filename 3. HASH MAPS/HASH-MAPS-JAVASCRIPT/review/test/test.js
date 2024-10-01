let userLog = '';
console.log = function(userPrint) {
  userLog += userPrint;
};
const { expect } = require('chai');
const sinon = require('sinon');

describe('', function () {
  it('', function() {
    const HashMap = require('../HashMap');
    const retrieveSpy = sinon.spy(HashMap.prototype, 'retrieve');
    
    const birdCensus = require('../census');
    const msgs = [
      'Retrieving Central Park Pond from index 5',
      'Central Park Pond',
      'Retrieving Brooklyn College from index 10',
      'Brooklyn College',
      'Retrieving Pelham Bay Park from index 6',
      'Pelham Bay Park'
    ];
    
    expect(retrieveSpy.called, 'Make sure to call the `.retrieve()` method on your `HashMap` instance.').to.equal(true);
    
    // check all values logged
    for (let i = 0; i < msgs.length; i++) {
			let pattern = new RegExp(msgs[i], 'gi'); 
      expect(pattern.test(userLog), `Did you log all the retrieved values? We did not see \`${msgs[i]}\` logged.`).to.equal(true);
    }
  });
});