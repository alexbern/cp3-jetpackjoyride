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
		this.animations.add('jump', [3]);
		this.animations.add('jetpack', [2]);

		this.stepSound = this.game.add.audio('stapsound');
        this.jetpackSound = this.game.add.audio('jetpacksound');

	}
	update(){
		if (this.body.wasTouching.down){
			this.jumpCount = 0;
			this.stepSound.play();
			this.animations.play('run', 10, true);
		}
	}
	jumpCheck(){
		if (this.jumpCount < 1){
			this.body.velocity.y = -350;
			this.jumpCount++;
			this.animations.play('jetpack', 1, true);
			this.jetpackSound.play();
		}
	}
}