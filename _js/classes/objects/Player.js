export default class Player extends Phaser.Sprite{
	constructor(game, x, y){
		super(game, x, y, 'player');

		this.cursors = this.game.input.keyboard.createCursorKeys();
		
		this.game.physics.arcade.enableBody(this);
		this.anchor.setTo(0.5, 0.5);
		
		this.body.gravity.y = 1000;
		
		this.animations.add('run');
		this.animations.play('run', 10, true);

		this.doubleJump = 0;


	}
	update(){
		
		// KEYBOARD CONTROLS
		if (this.cursors.up.isDown && this.body.wasTouching.down) {
			this.body.velocity.y = -330;
			console.log('down');
		}

		if (this.body.wasTouching.down){
			this.doubleJump = 0;
		};

		console.log(this.doubleJump);
	}
}