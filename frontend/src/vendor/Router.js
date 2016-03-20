import RouteLocation from '../services/Location';
import { Browser } from '../services/helpers/Browser';

export class Router {
	constructor(rules) {
		this.location = RouteLocation;
		this.content = $('.app');
		this.browser = new Browser();
		
		this.eventLink();
		this.backUrl();

		this.component = false;
		this.active = false;
		this.rules = rules;

		this.rule();

		// Старт
		this.run();
	}

	/**
	 * Узнаем какой компонент должен 
	 * отработать на этой странице
	 */
	rule() {
		let rule = false;
		let url = this.getLocation();
		
		this.rules.forEach(value => {
			if (url.match(value.url)) {
				rule = true;
				this.component = value.component;
				this.active = value.name;
			}
		});

		if (this.component === false || rule === false)
			this.component = App.RulesDefault;
	}

	getLocation() {
		return this.location.split('?')[0];
	}

	run() {
		this.component.forEach((value, key) => {
			App.Classes[key] = new value()
		});
	}

	/**
	 * Вещаем событие на ссылки
	 */
	eventLink() {
		const self = this;

		$('a[href]').off().on('click', function(e) {
			var link = $(this);
			if (self.valid(link.attr('href'), link)) {
				e.preventDefault();
				// Текущий урл
				self.location = link.attr('href');
				// Меняем урл
				self.replaceUrl(self.location);
				// Рендер шаблона
				self.render();
				return false;
			}
		});
	}

	activeRoute() {
		if (this.active === false)
			return false;

		const self = this;

		$('[data-router]').removeClass('active').each(function() {
			if ($(this).attr('data-router') == self.active)
				$(this).addClass('active');
		});
	}

	valid(href, link) {
		if (
			! href.match(/^(http|https)/) &&
			! href.match(/^\/\//) &&
			link.attr('target') != '_blank' &&
			! link.attr('data-target')
		) return true;
		return false;
	}

	render() {
		var self = this;
		this.fetch(function(data, method) {
			switch (method) {
				case 'success':
					self.content.html(data);
				break;

				case 'error' :
					self.content.html(data.responseText);
				break;

				default: 
					alert('Error #24456');
			}

			self.eventLink();
			self.rule();
			self.activeRoute();
			self.run();
		});
	}

	fetch(fn) {
		const self = this;

		$.ajax({
			type: 'GET',
			url: self.location,
			data: {'var': 'ajax'},
			async: false,
			complete: function() {},
			success: function(response) {
				typeof fn === 'function' ? fn(response, 'success') : null;
			},
			error: function(err, stat) {
				typeof fn === 'function' ? fn(response, 'error') : null;
			}
		});
	}

	replaceUrl(url) {
		if( this.browser.name() == "gecko" ){
      window.history.pushState("", "", url);
    	window.history.replaceState("", "", url);
    } else
      window.location.hash = '!' + url;
	}

	backUrl() {
		var self = this;

		if( this.browser.name() == "gecko" ) {
			window.addEventListener('popstate', function(e) {
				self.location = window.location.pathname;
				self.render(); 
			}, false);
		} else {
			$(window).hashchange(function(e) {
				self.location = window.location.hash.replace("#!", "");
				self.render();
			});
		}
	}

	toUrl(url) {
		this.location = url;
		this.replaceUrl(this.location);
		this.render();
		return false;
	}
}