import { Component } from '../vendor/Component';

export class Index extends Component {
	constructor() {
		super();
		console.log('Main component');
	}

	active(element) {
		if (element.classList.contains('alert-danger')) {
			element.classList.remove('alert-danger')
			element.classList.add('alert-success');
		} else {
			element.classList.remove('alert-success')
			element.classList.add('alert-danger');
		}
	}
}