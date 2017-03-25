window.Pipe = (function() {
	'use strict';

    var Pipe = function(el, game, player) {
		this.el = el;
		this.game = game;
		this.player = player;
		this.pos = { x: 0, y: 0 };
	};

	Pipe.prototype.reset = function() {
		this.pos.x = 100;
		this.pos.y = 20 ;
	};

	Pipe.prototype.onFrame = function(delta) {

		this.pos.x -= delta * 20;
		this.checkCollisionWithBounds();

		// Update UI
		this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
	};

	Pipe.prototype.checkCollisionWithBounds = function() {
		if (this.pos.x < 0) {
			this.game.pipe.reset();
		}
		if (this.pos.x >= this.player.pos.x - 5 && this.pos.x <= this.player.pos.x + 5
		 	&& this.pos.y >= this.player.pos.y - 10 && this.pos.y <= this.player.pos.y + 10) {
			return this.game.gameover();
		}
	};

	return Pipe;

})();
