seajs.config({
	plugins: ['shim'],
	alias: {
		'jquery': {
			src: 'lib/jquery-1.9.1.min.js',
			exports: 'jQuery'
		},

		'underscore': {
			src: 'lib/underscore.js',
			exports: '_'
		},

		'backbone': {
			src: 'lib/backbone.js',
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},

		'backbone.localStorage': {
			src: 'lib/backbone.localStorage.js',
			deps: ['backbone']
		}
	}
})