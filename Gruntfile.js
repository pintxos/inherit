module.exports = function (grunt) {

	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		karma: {
			options: {
				basePath: '',
				files: [
					'index.js',
					'test/*.js'
				],
				frameworks: [
					'jasmine'
				]
			},
			dev: {
				browsers: ['Chrome']
			},
			ci: {
				browsers: ['PhantomJS'],
				singleRun: true
			}
		},

		jshint: {
			files: ['*.js'],
			options: {
				strict: true,
				es3: true,
				globals: {
					window: true,
					define: true
				}
			}
		}
	});

	grunt.registerTask('default', []);
	grunt.registerTask('test', ['jshint', 'karma:dev']);
	grunt.registerTask('testCI', ['jshint', 'karma:ci']);

};
