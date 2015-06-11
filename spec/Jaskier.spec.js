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

 	describe('extend method', function() {
 		var J, j; 

 		beforeEach(function(){
 			J = Jaskier.extend({b: 1}, { a: 5 }); 
 			j = new J();
 		});

		it('should allow to extend instance', function() {	
	 		assert.equal(j.a, 5);
		});

		it('should allow to extend prototype', function() {
	 		assert.equal(j.b, 1);
		});
	});
});

