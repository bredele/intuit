
/**
 * Test dependencies.
 */

var intuit = require('..');
var assert = require('assert');

describe("basic setter/getter", function() {
	
	it('returns the most defined value', function() {
		intuit('glasses', 'view');
		intuit('glasses', 'sun');
		intuit('glasses', 'sun');

		assert.equal(intuit('glasses'), 'sun');
	});


});
