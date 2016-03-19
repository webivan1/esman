window.App = {
	Components: {},
	Rules: {},
	Classes: []
};

/**
 * @Library
 */
import $ from './shims/jquery';

/**
 * @Vendors
 */
import { Component } from './vendor/Component';
import { Router } from './vendor/Router';

/**
 * @Components
 */
import { Index } from './components/Index';
import { Default } from './components/Default';
import { Contacts } from './components/Contacts';

App.Rules = [
	{ url: /^\/templates\/main\.html$/, name: 'PageIndex', component: [Index] },
	{ url: /^\/site\/contact$/, name: 'PageContacts', component: [Contacts] }
];

App.RulesDefault = [Default];

document.addEventListener('DOMContentLoaded', function main() {
	new Router(App.Rules);
});