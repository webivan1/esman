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
import { Default } from './components/Default';
import { Index } from './components/Index';
import { Contacts } from './components/Contacts';
import { About } from './components/About';
import { Login } from './components/Login';

App.Rules = [
	{ url: /^(\/site\/index|\/)$/, name: 'PageIndex', component: [Index] },
	{ url: /^\/site\/contact$/, name: 'PageContacts', component: [Contacts] },
	{ url: /^\/site\/about$/, name: 'PageAbout', component: [Default, About] },
	{ url: /^\/site\/login$/, name: 'PageLogin', component: [Login] }
];

App.RulesDefault = [Default];

document.addEventListener('DOMContentLoaded', function main() {
	new Router(App.Rules);
});