function lettering(query, method) {
    if (method === void 0) { method = 'letters'; }
    function injector(element, splitter, className, after) {
        var text = element.innerText;
        var array = text.split(splitter);
        //let result = '';
        var inject = array.map(function (item, index) {
            return "<span class=\"" + (className + (index + 1)) + "\" aria-hidden=\"true\">" + item + "</span>";
        }).join(after);
        element.innerHTML = inject;
        element.setAttribute('role', 'text');
        element.setAttribute('aria-label', text);
    }
    var injectorArgs = {
        letters: {
            splitter: '',
            className: 'char',
            after: ''
        },
        words: {
            splitter: ' ',
            className: 'word',
            after: ' '
        },
        lines: {
            splitter: 'eefec303079ad17405c889e092e105b0',
            className: 'line',
            after: ''
        }
    };
    var nodeList = typeof query === 'string' ? document.querySelectorAll(query) : [query];
    Array.prototype.forEach.call(nodeList, function (element) {
        var args = injectorArgs[method];
        if (method === 'lines') {
            Array.prototype.forEach.call(element.getElementsByTagName('br'), function (brElement) {
                brElement.parentNode.replaceChild(document.createTextNode(args.splitter), brElement);
            });
        }
        injector(element, args.splitter, args.className, args.after);
    });
}
