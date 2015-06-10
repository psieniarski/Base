/* globals describe, chai, Jaskier, it */

'use strict';

var assert = chai.assert;

describe('Jaskier', function() {
	describe('constructor', function() {
		it('should be a function', function() {
	  		assert.isFunction(Jaskier);
	 	});

	 	it('should have extend method', function() {
	  		assert.isFunction(Jaskier.extend);
	 	});
 	});

 	describe('New object created by extend method', function() {
		it('should have extended instance', function() {
	 		var J = Jaskier.extend({}, { a: 5 }); 

	 		var j = new J();
	 		
	 		assert.equal(j.a, 5);
		});

		it('should have extended prototype', function() {
	 		var J = Jaskier.extend({ b: 5 }, { a: 5 }); 

	 		var j = new J();
	 		
	 		assert.equal(j.b, 5);
		});
	});
});

