// UMD
if(typeof define !== 'function') {
	define = function( deps, definition ) {
		window.pintxos = window.pintxos || {};
		window.pintxos.inherit = definition();
		define = null;
	};
}

define([], function () {

	'use strict';

	/* Constructor
	----------------------------------------------- */
	var inherit = function () {

	};


	/* Methods
	----------------------------------------------- */

	/**
	 * All bootstrap logic should go here
	 * @return {void}
	 */
	inherit.prototype.init = function () {

	};

	/**
	 * All teardown logic should go here
	 * @return {void}
	 */
	inherit.prototype.destroy = function () {

	};


	/* Event handlers
	----------------------------------------------- */


	/* Export
	----------------------------------------------- */
	return inherit;

});
