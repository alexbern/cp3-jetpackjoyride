import Ground from '../objects/Ground';
import Player from '../objects/Player';
import Platform from '../objects/Platform';

export default class Play extends Phaser.State{
	preload(){
		console.log('play preload');
	}create(){
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.cursors = this.game.input.keyboard.createCursorKeys();

		this.timer = this.game.time.create(false);
		this.timer.loop(1500, this.initPlatform, this);
		this.timer.start();

		this.background = this.game.add.tileSprite(0, 0, 480, 320, 'background');
		this.background.autoScroll(-140, 0);

		this.platforms = this.game.add.group();

		this.initGround();
		this.initPlayer();
		this.initPlatform();


	}
	update(){
		this.game.physics.arcade.collide(this.player, this.ground);
		this.game.physics.arcade.collide(this.player, this.platform);

		if (this.player.body.wasTouching.down){
			console.log('touching');
			this.player.body.velocity.x = 140;
		}else{
			this.player.body.velocity.x = 0;
		}




		// KEYBOARD CONTROLS
		if (this.cursors.up.isDown && this.player.body.wasTouching.down) {
			this.player.body.velocity.y = -450;
		};

	}
	initPlatform(){
		let platformY;

		platformY = this.game.rnd.integerInRange(200, 80);

		this.platform = new Platform(this.game, 480, platformY, 'platform');
		this.add.existing(this.platform);

		


	}
	initGround(){
		this.ground = new Ground(this.game, 0, 200, 'ground');
		this.add.existing(this.ground);
	}
	initPlayer(){
		this.player = new Player(this.game, 40, 100, 'player');
		this.add.existing(this.player);
	}
}