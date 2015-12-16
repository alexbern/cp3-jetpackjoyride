export default class Missile extends Phaser.Sprite{
	constructor(game, x, y){
	  super(game, x, y, 'spritesheetMissile');
	  this.game.physics.arcade.enableBody(this);
	  this.animations.add('warning', [2]);
	  this.animations.add('startpoint', [1]);
	  this.animations.add('raket', [0]);
	  this.trap = this.animations.play('startpoint', 1, false);
	  this.startTime = this.game.time.events.add(Phaser.Timer.SECOND * 2, this.timesUp, this);
	  this.missileSound = this.game.add.audio('missilesound');
	  this.checkWorldBounds = true; 
	  this.outOfBoundsKill = true;
	}
	timesUp(){
	  this.animations.play('warning', 1, false);
	  this.timeup = this.game.time.events.add(Phaser.Timer.SECOND * 0.5, this.launchMissle, this);
	  this.missileSound.play();
	}
	launchMissle(){
	  this.animations.play('raket', 1, false);
	  this.body.velocity.x -= 500;
	}
}