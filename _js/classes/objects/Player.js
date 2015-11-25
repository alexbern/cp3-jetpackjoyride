export default class Player extends Phaser.Sprite{
	constructor(game, x, y){
		super(game, x, y, 'player');
		
		this.game.physics.arcade.enableBody(this);

		// this.body.gravity.y = 1000;

		this.body.immovable= true;

		this.checkWorldBounds = true; 
		this.outOfBoundsKill = true;
	}
}