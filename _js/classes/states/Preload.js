export default class Preload extends Phaser.State{
	preload(){
<<<<<<< HEAD
		// this.load.spritesheet('player', 'assets/sprites/spritesheet.png', 29, 34, 2);
		this.load.image('ground', 'assets/sprites/ground.jpg');
=======
		this.load.spritesheet('player', 'assets/sprites/player.png', 29, 34, 2);
		this.load.image('ground', 'assets/sprites/ground.png');
>>>>>>> 578dd924264266b9099c32e47a77442b7057f6d8
		this.load.image('platform', 'assets/sprites/platform.png');

		this.load.image('background', 'assets/sprites/bg.png');

		this.load.image('logo', 'assets/sprites/logo.png');
		this.load.image('highscore', 'assets/sprites/bhighscore.jpg');
		this.load.image('play', 'assets/sprites/bplay.jpg');
		this.load.image('playagain', 'assets/sprites/bplayagain.png');
		this.load.image('back', 'assets/sprites/bback.jpg');

		this.load.image('gameover', 'assets/sprites/gameover.png');

		this.load.atlasJSONArray('spritesheet', 'assets/sprites/spritesheet.png', 'assets/sprites/spritesheet.json');
		

		this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
	}
	onLoadComplete(){
		this.game.state.start('Menu');
	}
}