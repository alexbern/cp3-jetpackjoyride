export default class Platform extends Phaser.Sprite{
	constructor(game, x, y){
		super(game, x, y, 'platform');
		
		this.game.physics.arcade.enableBody(this);
		
		this.body.immovable= true;

		this.checkWorldBounds = true; 
		this.outOfBoundsKill = true;
	}
}