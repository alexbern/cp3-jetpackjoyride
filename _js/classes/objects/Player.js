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
			
			//this.player.image('jump', [2]);
			//this.player.image('jump', 10, true);
			//this.game.add.sprite(0,0,'spritesheet',[2]);
		};
	}

	

}