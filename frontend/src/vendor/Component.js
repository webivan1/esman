import { Http } from './Http';

export class Component {
	constructor() {
		this.Router = App.Router;
		this.http = new Http();
	}
}