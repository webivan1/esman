export class Http {
	constructor() {}

	fetch(link, method, data = {}, action, json = false) {
		$.ajax({
			type: json,
			dataType: json,
			url: link,
			datas: data,
			success: function(response) {
				typeof action === 'function' ? action(response) : null;
				route.eventLink();
				return false;
			},
			error: function(err, stat) {
				typeof action === 'function' ? action(response, stat) : null;
				route.eventLink();
				return false;
			}
		})
	}

	get(url, fn) {
		this.fetch(url, 'GET', {}, fn);
	}

	post(url, data, fn) {
		this.fetch(url, 'POST', data, fn);
	}

	getJSON(url, fn) {
		this.fetch(url, 'GET', {}, fn, 'JSON');
	}

	postJSON(url, data, fn) {
		this.fetch(url, 'POST', data, fn, 'JSON');
	}
}