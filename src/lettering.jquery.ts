declare interface JQuery {
	lettering(method: 'letters' | 'lines' | 'words'): JQuery
}

(function($) {
	$.fn.lettering = function(method: 'letters' | 'lines' | 'words' = 'letters') {


		if (['letters', 'lines', 'words'].indexOf(method) === -1) {
			$.error('Method ' + method + ' does not exist on jQuery.lettering');
		} else {
			this.each(function() {
				lettering($(this)[0], method);
			});
		}

		return this;
	};

})(jQuery);
