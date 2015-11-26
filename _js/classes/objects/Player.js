export default class Player extends Phaser.Sprite{
	constructor(game, x, y){
		super(game, x, y, 'player');
		
		this.game.physics.arcade.enableBody(this);
		this.anchor.setTo(0.5, 0.5);
		
		this.body.immovable= true;

		this.checkWorldBounds = true; 
		this.outOfBoundsKill = true;
	}
}