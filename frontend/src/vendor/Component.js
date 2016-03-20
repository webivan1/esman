export class Component {
	constructor() {}

	fetch(link, method, data = {}, action) {
		$.ajax({
			type: method,
			url: link,
			datas: data,
			success: function(response) {
				typeof action === 'function' ? action(response) : null;
				return false;
			},
			error: function(err) {
				typeof action === 'function' ? action(response) : null;
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
}