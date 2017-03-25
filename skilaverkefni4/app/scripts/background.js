window.Background = (function() {
	'use strict';

	var Background = window.Controls;

    var Background = function(el, game) {
		this.el = el;
		this.game = game;
		this.pos = { x: 0, y: 0 };
	};

	Background.prototype.reset = function() {
		this.pos.x = 0;
		this.pos.y = 0;
	};

	Background.prototype.onFrame = function(delta) {

		this.pos.x -= delta * 10;
		// Update UI
		this.el.css('background-position', this.pos.x + 'em 0');
	};

	return Background;

})();
