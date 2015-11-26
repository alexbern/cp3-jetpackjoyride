export default class Player extends Phaser.Sprite{
	constructor(game, x, y){
		super(game, x, y, 'player');
		
		this.game.physics.arcade.enableBody(this);
		this.anchor.setTo(0.5, 0.5);
		
		this.body.gravity.y = 500;
	
		this.checkWorldBounds = true; 
		this.outOfBoundsKill = true;
	}
}