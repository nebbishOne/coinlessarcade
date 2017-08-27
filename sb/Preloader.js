SeaBombs.Preloader = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};

SeaBombs.Preloader.prototype = {
	
	preload: function () {
		this.load.bitmapFont('eightbitwonder', 'fonts/eightbitwonder.png', 'fonts/eightbitwonder.fnt');
		this.load.image('titlescreen', 'images/title.png');
		this.load.image('header', 'images/header.png');
		this.load.image('ship', 'images/ship.png');
		this.load.image('enemy1', 'images/enemy1.png');
		this.load.image('enemy2', 'images/enemy2.png');
		this.load.image('enemy3', 'images/enemy3.png');
		this.load.image('target', 'images/target.png');
		this.load.image('waterline', 'images/waterline.png');
		this.load.image('shot', 'images/shot.png');
		this.load.image('explosion', 'images/explosion.png');
		this.load.image('enemyexplosion', 'images/enemyexplosion.png');
		
		this.load.audio('boom1', 'audio/boom1.mp3');
		this.load.audio('boom2', 'audio/boom2.mp3');
		this.load.audio('ping',  'audio/ping.mp3');
		this.load.audio('poosh',  'audio/poosh.mp3');
		this.load.audio('deedeedee', 'audio/deedeedee.mp3');
	},

	create: function () {
		//...
	},

	update: function () {
	   	this.ready = true;
	   	this.state.start('StartMenu');
	}
};