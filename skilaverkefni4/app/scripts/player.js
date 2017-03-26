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

	var Player = function(el, game) {
		this.el = el;
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
	};

	Player.prototype.onFrame = function(delta) {
		// if (Controls.keys.right) {
		// 	this.pos.x += delta * SPEED;
		// }
		// if (Controls.keys.left) {
		// 	this.pos.x -= delta * SPEED;
		// }
		// if (Controls.keys.down) {
		// 	this.pos.y += delta * SPEED;
		// }
		// if (Controls.keys.up) {
		// 	this.pos.y -= delta * SPEED;
		// }

		if (Controls.keys.space) {
			this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em) rotate(-30deg) ');
			this.pos.y -= delta * JUMP;

			this.audio.play();
			this.down = 0;
		}
		else {
			this.pos.y += delta *  SPEED;
			this.down=this.down+0.3;
			this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em) rotate(' + this.down + 'deg)');
		}

		this.checkCollisionWithBounds();

		// Update UI


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
