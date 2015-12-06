export default class Player extends Phaser.Sprite{
	constructor(game, x, y){
		super(game, x, y, 'spritesheet');

		this.cursors = this.game.input.keyboard.createCursorKeys();
		
		this.game.physics.arcade.enableBody(this);
		this.anchor.setTo(0.5, 0.5);
		
		this.body.gravity.y = 1000;

		this.jumpCount = 0;
		this.jumpkey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		this.jumpkey.onDown.add(this.jumpCheck, this);

		this.animations.add('run', [0, 1]);
		this.animations.add('jump', [2, 3]);

	}
	update(){
		if (this.body.wasTouching.down){
			this.jumpCount = 0;
		};

		if (!this.body.wasTouching.down){
			this.animations.play('jump', 5, true);
		}else{
			this.animations.play('run', 10, true);
		}
	}
	jumpCheck(){
		if (this.jumpCount < 1){
			this.body.velocity.y = -350;
			this.jumpCount++;
		};
	}

	

}