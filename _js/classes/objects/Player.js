export default class Player extends Phaser.Sprite{
	constructor(game, x, y){
		super(game, x, y, 'player');
		
		this.game.physics.arcade.enableBody(this);
		this.anchor.setTo(0.5, 0.5);
		
		this.body.gravity.y = 1000;
		
		this.animations.add('run');
		this.animations.play('run', 10, true);
	}
}