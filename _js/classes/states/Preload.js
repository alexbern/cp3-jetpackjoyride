export default class Preload extends Phaser.State{
	preload(){

		//this.load.spritesheet('player', 'assets/sprites/spritesheet.png', 29, 34, 2);
		this.load.image('ground', 'assets/sprites/ground.png');
		this.load.image('platform', 'assets/sprites/platform.png');

		this.load.image('background', 'assets/sprites/bg.png');

		this.load.image('logo', 'assets/sprites/logo.png');
		this.load.image('highscore', 'assets/sprites/bhighscore.jpg');
		this.load.image('play', 'assets/sprites/bplay.jpg');
		this.load.image('playagain', 'assets/sprites/bplayagain.png');
		this.load.image('back', 'assets/sprites/bback.jpg');

		this.load.image('gameover', 'assets/sprites/gameover.png');
		this.load.image('howto', 'assets/sprites/howtoscreen.png');

		this.load.atlasJSONArray('spritesheet', 'assets/sprites/spritesheet.png', 'assets/sprites/spritesheet.json');
		this.load.atlasJSONArray('spritesheetCoins', 'assets/sprites/coinSpritesheet.png', 'assets/sprites/coinSpritesheet.json');
		
		this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
	}
	onLoadComplete(){
		this.game.state.start('Menu');
	}
}