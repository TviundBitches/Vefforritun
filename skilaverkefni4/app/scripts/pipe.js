window.Pipe = (function() {
	'use strict';

    var Pipe = function(el, top, bottom, game, player) {
		this.el = el;
		this.top = top;
		this.bottom = bottom;
		this.game = game;
		this.player = player;
		this.x = 0;
		this.ybottomPos = 0
		this.ytopPos = 0;
	};

	Pipe.prototype.reset = function() {
		this.x = 103;
		this.ybottomPos = Math.random() * (40 - 20) + 20;; // 20
		this.ytopPos = this.ybottomPos-45 ; //-20
		this.game.numberOfPipes++;
		console.log(this.game.numberOfPipes);
	};

	Pipe.prototype.onFrame = function(delta) {
		if(this.game.started == true) {
			this.x -= delta * this.game.acceleration;
			this.checkCollisionWithBounds();
		}
		// Update UI
		this.top.css('transform', 'translate(' + this.x + 'em, ' + this.ytopPos + 'em)');
		this.bottom.css('transform', 'translate(' + this.x + 'em, ' + this.ybottomPos + 'em)');
	};

	Pipe.prototype.checkCollisionWithBounds = function() {
		if (this.x < 0) {
			this.game.pipe1.reset();
		}
		// if (this.x > 50) {
		// 	this.game.pipe2.reset();
		// }
		if (this.player.pos.x >= this.x - 8 && this.player.pos.x <= this.x + 8 &&
			this.player.pos.y >= this.ybottomPos - 5 && this.player.pos.y <= this.ybottomPos + 100) {
			return this.game.gameover();
		}
		if (this.player.pos.x >= this.x - 8 && this.player.pos.x <= this.x + 8 &&
			this.player.pos.y >= this.ytopPos - 100 && this.player.pos.y <= this.ytopPos + 30) {
			return this.game.gameover();
		}

	};

	return Pipe;

})();
