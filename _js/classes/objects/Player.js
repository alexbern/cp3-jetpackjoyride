export default class Player extends Phaser.Sprite{
	constructor(game, x, y){
		super(game, x, y, 'player');

		this.cursors = this.game.input.keyboard.createCursorKeys();
		
		this.game.physics.arcade.enableBody(this);
		this.anchor.setTo(0.5, 0.5);
		
		this.body.gravity.y = 1000;
		
		this.animations.add('run');
		this.animations.play('run', 10, true);

		this.jumpCount = 0;
		this.jumpkey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		this.jumpkey.onDown.add(this.jumpCheck, this);

	}
	update(){
		if (this.body.wasTouching.down){
			this.jumpCount = 0;
		};
	}
	jumpCheck(){
		if (this.jumpCount < 1){
			this.body.velocity.y = -350;
			this.jumpCount++;
		};
	}

	

}