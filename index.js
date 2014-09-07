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

	/**
	 * Simple javascript inheritance
	 *
	 * @param  {Function}
	 * @param  {Function}
	 * @return {void}
	 */
	return function(child, parent) {

		function temp () {}
		temp.prototype = parent.prototype;

		child.prototype._superClass = parent.prototype;
		child.prototype = new temp();

	};

});
