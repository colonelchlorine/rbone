define(['text!ui/forgot.html', 'backbone', 'jquery'], function(html, Backbone, $) {
	var layout = {
			name: 'public',
			title: 'Forgot your password?'
		},
		view = Backbone.View.extend({
			events: {
				"click #send": "send"
			},
			render: function() {
				console.log("Rendering view");
				this.$el.html(html);
			},
			send: function() {
				alert("Clicked send");
			}
		});
	return {
		layout: layout,
		view: view
	};
});