window.Pipe = (function() {
	'use strict';

	var Controls = window.Controls;

    var Pipe = function(el, game) {
		this.el = el;
		this.game = game;
		this.pos = { x: 0, y: 0 };
	};

	Pipe.prototype.reset = function() {
		this.pos.x = 100;
		this.pos.y = 25;
	};

	Pipe.prototype.onFrame = function(delta) {

		this.pos.x -= delta * 30;
		// Update UI
		this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
	};

	return Pipe;

})();
