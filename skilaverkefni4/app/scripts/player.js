window.Player = (function() {
	'use strict';

	var Controls = window.Controls;

	// All these constants are in em's, multiply by 10 pixels
	// for 1024x576px canvas.
	var SPEED = 20; // * 10 pixels per second
	var JUMP = 50;
	var WIDTH = 5;
	var HEIGHT = 5;
	var INITIAL_POSITION_X = 30;
	var INITIAL_POSITION_Y = 25;

	var Player = function(el, wing, game) {
		this.el = el;
		this.wing = wing;
		this.game = game;
		this.pos = { x: 0, y: 0 };
		this.audio = document.getElementById("meow-cat");
		this.down = 0;
	};

	/**
	 * Resets the state of the player for a new game.
	 */
	Player.prototype.reset = function() {
		this.pos.x = INITIAL_POSITION_X;
		this.pos.y = INITIAL_POSITION_Y;
		this.down=this.down = 0;
		this.wing.css('transform', ' matrix(1, 0, 0, 1, 0, 0)');
	};

	Player.prototype.onFrame = function(delta) {
		if(Controls.keys.space) {
			this.game.started = true;
		}
		if(this.game.started == true) {
			if (Controls.keys.space) {
				this.pos.y -= delta * JUMP;
				this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em) rotate(-30deg) ');
				this.wing.css('transform', 'scale(-1, -1)');

				this.audio.play();
				this.down = 0;
			}
			else {
				this.pos.y += delta *  SPEED;
				this.down=this.down+0.3;
				this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em) rotate(' + this.down + 'deg)');
				this.wing.css('transform', ' matrix(1, 0, 0, 1, 0, 0)');
			}
		}
		else {
			this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
		}

		this.checkCollisionWithBounds();


	};

	Player.prototype.checkCollisionWithBounds = function() {
		if (this.pos.x < 0 ||
			this.pos.x + WIDTH > this.game.WORLD_WIDTH ||
			this.pos.y < 0 ||
			this.pos.y + HEIGHT > this.game.WORLD_HEIGHT - 9.5) {
			return this.game.gameover();
		}
	};

	return Player;

})();
