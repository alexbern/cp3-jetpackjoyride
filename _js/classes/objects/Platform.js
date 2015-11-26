export default class Platform extends Phaser.Sprite{
	constructor(game, x, y){
		super(game, x, y, 'platform');
		
		this.game.physics.arcade.enableBody(this);
		// this.body.gravity.y = 1000;

		this.body.velocity.x = -140;

		this.body.immovable= true;

		this.checkWorldBounds = true; 
		this.outOfBoundsKill = true;
	}
}