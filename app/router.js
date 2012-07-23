define(['backbone', 'jquery'], function(Backbone, $) {
	var path = '',
		appContainer,
		init = function(defaultPath, container) {
			appContainer = container;

			var appRouter = Backbone.Router.extend({
				routes: {
	            	"*path": "requireIt",
		        },
		        requireIt: function(p) {
		            path = (p == "") ? defaultPath : p;
	            	require([path], render);
		        }
			}, this);

			var router = new appRouter;
			Backbone.history.start();
			return router;
		},
		render = function(page) {
			require(['layout/'+page.layout.name], function(layout) {
				var layoutView = new layout({el: appContainer, page: page});
				
				appContainer.empty().hide();
				layoutView.render();
				appContainer.show();
			});
		};

	return {
		init: init
	};
});