window.Ground = (function() {
	'use strict';

	var Controls = window.Controls;

    var Ground = function(el, game) {
		this.el = el;
		this.game = game;
		this.pos = { x: 0, y: 0 };
	};

	Ground.prototype.reset = function() {
		this.pos.x = 0;
		this.pos.y = 0;
	};

	Ground.prototype.onFrame = function(delta) {

		this.pos.x -= delta * this.game.acceleration;
		// Update UI
		this.el.css('background-position', this.pos.x + 'em 0');
	};

	return Ground;

})();
