/** @license Apache-2.0 */

'use strict';

/**
* Return the index of the last element in a one-dimensional ndarray which passes a test implemented by a predicate function within a specified range.
*
* @module @stdlib/blas-ext-base-ndarray-gfind-last-index-between
*
* @example
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var vector = require( '@stdlib/ndarray-vector-ctor' );
* var gfindLastIndexBetween = require( '@stdlib/blas-ext-base-ndarray-gfind-last-index-between' );
*
* function clbk( v ) {
*     return v % 2.0 === 0.0;
* }
*
* var x = vector( [ 2.0, 1.0, 3.0, 4.0, 5.0 ], 'generic' );
*
* var fromIndex = scalar2ndarray( 4, {
*     'dtype': 'generic'
* });
*
* var toIndex = scalar2ndarray( 1, {
*     'dtype': 'generic'
* });
*
* var v = gfindLastIndexBetween( [ x, fromIndex, toIndex ], clbk );
* // returns 3
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
