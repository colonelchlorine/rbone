require.config({
	paths: {
		underscore: '../lib/underscore',
		backbone: '../lib/backbone',
		jquery: '../lib/jquery-1.7.2'
	}
});

require(['router', 'jquery'], function(router, $) {
	router.init('ui/login', $('#app'));
});