export default class Missile extends Phaser.Sprite{
	constructor(game, x, y){
		super(game, x, y, 'spritesheetMissile');
		this.animations.add('warning', [2]);
		this.animations.add('startpoint', [1]);
		this.animations.add('raket', [0]);
		this.trap = this.animations.play('warning', 10, true);
	}
	update(){
		this.game.add.tween(this.trap).to({y:50}, 500, Phaser.Easing.Linear.NONE, true, 0, 1000, true); 
	}
}