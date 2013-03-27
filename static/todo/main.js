define(function(require){
	var app = require('./views/app'),
		Workspace = require('./routers/router');

	new Workspace();
	Backbone.history.start();

	new app();
});