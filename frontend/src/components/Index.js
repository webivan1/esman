import { Component } from '../vendor/Component';

export class Index extends Component {
	constructor() {
		super();
		console.log('Main component');

		this.sibscribe();
	}

	sibscribe() {
		$('button').on('click', function() {
			alert('Click Btn!');
		})
	}
}