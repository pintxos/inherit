(function (window) {

	'use strict';

	// UMD
	if(typeof define !== 'function') {
		window.define = function( deps, definition ) {
			window.pintxos = window.pintxos || {};
			window.pintxos.inherit = definition();
			define = null;
		};
	}

	define([], function () {

		/**
		 * Simple javascript inheritance
		 *
		 * @param  {Function}
		 * @param  {Function}
		 * @return {void}
		 */
		return function(Child, Parent) {

			function Temp () {}
			Temp.prototype = Parent.prototype;

			Child.prototype = new Temp();
			Child.prototype._superClass = Parent.prototype;

		};

	});

})(this);
