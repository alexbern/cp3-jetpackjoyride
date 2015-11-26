export default class Preload extends Phaser.State{
	preload(){
		this.load.image('player', 'assets/sprites/player.jpg');
		this.load.image('ground', 'assets/sprites/ground.jpg');
		this.load.image('platform', 'assets/sprites/platform.jpg');

		this.load.image('background', 'assets/sprites/bg.png');

		this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
	}
	onLoadComplete(){
		this.game.state.start('Play');
	}
}