export default class Coins extends Phaser.Sprite{
	constructor(game,x,y){
		super(game, x, y, 'spritesheetCoins');
		this.game.physics.arcade.enableBody(this);
		this.anchor.setTo(0.5, 0.5);
		this.body.gravity.y = 1000;
		this.animations.add('turn', [0, 1, 2, 3]);
	}
	update(){
		this.animations.play('turn', 10, true);
	}
}