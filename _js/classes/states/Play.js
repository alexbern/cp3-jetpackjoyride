export default class Play extends Phaser.State{
	preload(){
		console.log('play preload');
	}create(){
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.stage.backgroundColor = '#67A5D7';
	}
}