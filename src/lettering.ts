function lettering(query: string | Element, method: 'letters' | 'lines' | 'words' = 'letters') {
	function injector(element: HTMLElement, splitter: string, className: string, after: string) {
		const text = element.innerText;
		const array = text.split(splitter);
		//let result = '';

		const inject = array.map((item, index) => {
			return `<span class="${className + (index + 1)}" aria-hidden="true">${item}</span>`;
		}).join(after);

		element.innerHTML = inject;
		element.setAttribute('role', 'text');
		element.setAttribute('aria-label', text);
	}

	const injectorArgs = {
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

	const nodeList = typeof query === 'string' ? document.querySelectorAll(query) : [query];
	Array.prototype.forEach.call(nodeList, function(element: HTMLElement) {
		const args = injectorArgs[method];

		if (method === 'lines') {
			Array.prototype.forEach.call(element.getElementsByTagName('br'), function(brElement: HTMLBRElement) {
				brElement.parentNode.replaceChild(document.createTextNode(args.splitter), brElement);
			});
		}

		injector(element, args.splitter, args.className, args.after);
	});

}
