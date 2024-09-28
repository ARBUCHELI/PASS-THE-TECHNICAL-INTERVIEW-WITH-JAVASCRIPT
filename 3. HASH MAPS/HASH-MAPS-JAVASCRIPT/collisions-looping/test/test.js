console.log = function() {};
const fs = require('fs');
const { assert, expect } = require('chai');
const Structured = require('structured');

// This filepath does not need to go up a directory level
const code = fs.readFileSync('./HashMap.js', 'utf-8');

describe('', function() {
  it('', function() {
    // check for new next node
    let structureOne = function () {
      class HashMap {
        assign($key, $value) {
          while (_) {
            if (_) {
            }
            current = current.getNextNode();
					}
        }
      }
    };

    let isMatchOne = Structured.match(code, structureOne);

    assert.isOk(isMatchOne,  `Did you use a \`Node\` getter method to assign the next node to \`current\`?`);
  });
});