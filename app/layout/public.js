define(['text!layout/public.html', 'backbone', 'jquery'], function(html, Backbone, $) {
	var view = Backbone.View.extend({
			events: {},

			render: function() {
				console.log("Rendering layout");

				var page,
					compiledTemplate = _.template(html);

				$('head title').html(this.options.page.layout.title);

				this.$el.html(compiledTemplate(this.options.page.layout));
				page = new this.options.page.view({ el: $('#content', this.$el)});
				page.render();
			}
		});
	return view;
});