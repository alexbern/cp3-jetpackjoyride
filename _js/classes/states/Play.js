import Ground from '../objects/Ground';
import Player from '../objects/Player';
import Platform from '../objects/Platform';

export default class Play extends Phaser.State{
	preload(){
		console.log('play preload');
	}create(){
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.stage.backgroundColor = '#67A5D7';

		this.ground = new Ground(this.game, 0, 200, 'ground');
		this.add.existing(this.ground);

		this.player = new Player(this.game, 40, 100, 'player');
		this.add.existing(this.player);

		this.timer = this.game.time.create(false);
		this.timer.loop(1500, this.createPlatform, this);
		this.timer.start();

	}
	update(){
		let collision = this.game.physics.arcade.collide(this.player, this.ground);
		if (collision) {console.log('collide')};

	}
	createPlatform(){
		console.log('create platform');
		let platformY;

		platformY = this.game.rnd.integerInRange(200, 80);

		this.platform = new Platform(this.game, 480, platformY, 'platform');
		this.add.existing(this.platform);

	}
}