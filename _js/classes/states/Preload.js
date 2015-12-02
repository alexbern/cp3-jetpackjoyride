export default class Preload extends Phaser.State{
	preload(){
		this.load.spritesheet('player', 'assets/sprites/player.png', 29, 34, 2);
		this.load.image('ground', 'assets/sprites/ground.png');
		this.load.image('platform', 'assets/sprites/platform.png');

		this.load.image('background', 'assets/sprites/bg.png');

		this.load.image('logo', 'assets/sprites/logo.png');
		this.load.image('highscore', 'assets/sprites/bhighscore.jpg');
		this.load.image('play', 'assets/sprites/bplay.jpg');
		this.load.image('playagain', 'assets/sprites/bplayagain.png');
		this.load.image('back', 'assets/sprites/bback.jpg');

		this.load.image('gameover', 'assets/sprites/gameover.png');

		this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
	}
	onLoadComplete(){
		this.game.state.start('Menu');
	}
}