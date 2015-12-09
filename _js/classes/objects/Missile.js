export default class Missile extends Phaser.Sprite{
	constructor(game, x, y){
		super(game, x, y, 'spritesheetMissile');
		this.game.physics.arcade.enableBody(this);
		this.animations.add('warning', [2]);
		this.animations.add('startpoint', [1]);
		this.animations.add('raket', [0]);

		this.trap = this.animations.play('startpoint', 1, false);

		this.game.add.tween(this.trap).to({y:50}, 500, Phaser.Easing.Linear.NONE, true, 0, 1000, true); 
		this.startTime = this.game.time.events.add(Phaser.Timer.SECOND * 2, this.timesUp, this);
	}
	timesUp(){
		this.animations.play('warning', 1, false);
		this.timeup = this.game.time.events.add(Phaser.Timer.SECOND * 1, this.launchMissle, this);
	}
	launchMissle(){
		// this.game.add.tween(this.trap).to({this.y}, 500, Phaser.Easing.Linear.NONE, true, 0, 1000, true); 
		this.animations.play('raket', 1, false);
		this.body.velocity.x -= 500;
	}
}