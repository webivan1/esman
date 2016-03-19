import { Component } from '../vendor/Component';

export class Contacts extends Component {
	constructor() {
		super();
		console.log('Contacts component');

		$('button').removeClass('btn-primary');
	}
}