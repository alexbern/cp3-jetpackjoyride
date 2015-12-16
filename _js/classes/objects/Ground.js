export default class Ground extends Phaser.Sprite{
	constructor(game, x, y){
	  super(game, x, y, 'ground');
	  this.game.physics.arcade.enableBody(this);
	  this.body.immovable = true;
	  this.checkWorldBounds = true; 
	  this.outOfBoundsKill = true;
	}
}