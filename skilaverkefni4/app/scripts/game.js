
window.Game = (function() {
	'use strict';

	var Controls = window.Controls;
	/**
	 * Main game class.
	 * @param {Element} el jQuery element containing the game.
	 * @constructor
	 */
	var Game = function(el) {
		this.el = el;
		this.player = new window.Player(this.el.find('.Player'), this.el.find('.Wing'), this);
		this.pipe1 = new window.Pipe(this.el.find('.Pipe'), this.el.find('.PipeTop'), this.el.find('.PipeBottom'), this, this. player);
		this.pipe2 = new window.Pipe(this.el.find('.Pipe'), this.el.find('.PipeTop'), this.el.find('.PipeBottom'), this, this. player);
		this.ground = new window.Ground(this.el.find('.Ground'), this);
		this.background = new window.Background(this.el.find('.Background'), this);
		this.score = document.getElementById('Score');
		this.isPlaying = false;
		this.numberOfPipes = 0;

		// Audio
		this.backgroundaudio = document.getElementById("elevator");
		this.audio = document.getElementById("angry-cat");

		// Cache a bound onFrame since we need it each frame.
		this.onFrame = this.onFrame.bind(this);
	};

	/**
	 * Runs every frame. Calculates a delta and allows each game
	 * entity to update itself.
	 */
	Game.prototype.onFrame = function() {
		// Check if the game loop should stop.
		if (!this.isPlaying) {
			return;
		}

		// Calculate how long since last frame in seconds.
		var now = +new Date() / 1000,
				delta = now - this.lastFrame;
		this.lastFrame = now;

		// Update game entities.
		this.player.onFrame(delta);
		this.pipe1.onFrame(delta);
		this.ground.onFrame(delta);
		this.background.onFrame(delta);
		if(this.player.pos.x >= this.pipe1.x) {
			this.score.innerHTML = this.numberOfPipes;
		}

		// Request next frame.
		window.requestAnimationFrame(this.onFrame);
	};

	/**
	 * Starts a new game.
	 */
	Game.prototype.start = function() {
		this.reset();
		this.backgroundaudio.play();

		// Restart the onFrame loop
	//	if(Controls.keys.space) {
		this.lastFrame = +new Date() / 1000;
		window.requestAnimationFrame(this.onFrame);
		this.isPlaying = true;
	//	}
	};

	/**
	 * Resets the state of the game so a new game can be started.
	 */
	Game.prototype.reset = function() {
		this.player.reset();
		this.pipe1.reset();
		this.ground.reset();
		this.background.reset();
	};

	/**
	 * Signals that the game is over.
	 */
	Game.prototype.gameover = function() {
		this.isPlaying = false;

		this.audio.play();
		this.backgroundaudio.pause();
		this.backgroundaudio.currentTime = 0;

		var lastScore = this.numberOfPipes;
		document.getElementById('message').innerHTML = 'You scored: ' + lastScore;
		this.numberOfPipes = 0;
		// Should be refactored into a Scoreboard class.
		var that = this;
		var scoreboardEl = this.el.find('.Scoreboard');
		scoreboardEl
			.addClass('is-visible')
			.find('.Scoreboard-restart')
				.one('click', function() {
					scoreboardEl.removeClass('is-visible');
					that.start();
				});
	};

	/**
	 * Some shared constants.
	 */
	Game.prototype.WORLD_WIDTH = 102.4;
	Game.prototype.WORLD_HEIGHT = 57.6;

	return Game;
})();
