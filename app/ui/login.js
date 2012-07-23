define(['text!ui/login.html', 'backbone'], function(html, Backbone) {
	var layout = {
			name: 'public',
			title: 'Login'
		},
		view = Backbone.View.extend({
			events: {
				"click #login": "login"
			},
			render: function() {
				console.log("Rendering view");
				var compiledTemplate = _.template(html);
				this.$el.html(compiledTemplate({username: 'bob'}));
			},
			login: function() {
				alert("Clicked login");
			}
		});

	return {
		layout: layout,
		view: view
	};
});