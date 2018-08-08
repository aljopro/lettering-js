(function ($) {
    $.fn.lettering = function (method) {
        if (method === void 0) { method = 'letters'; }
        if (['letters', 'lines', 'words'].indexOf(method) === -1) {
            $.error('Method ' + method + ' does not exist on jQuery.lettering');
        }
        else {
            this.each(function () {
                lettering($(this)[0], method);
            });
        }
        return this;
    };
})(jQuery);
