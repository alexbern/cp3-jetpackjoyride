import Ground from '../objects/Ground';
import Player from '../objects/Player';
import Platform from '../objects/Platform';
import Coins from '../objects/Coins';

export default class Play extends Phaser.State{
	preload(){

	}
	create(){
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		this.score = 0;
		this.deadStatus = 0;
		this.speed = 140;

		this.background = this.game.add.tileSprite(0, 0, 480, 320, 'background');
		this.background.autoScroll(-this.speed, 0);

		this.text = this.game.add.text(350, 20, 'score: 0', { font: "15px Arial", fill: "#ffffff", align: "center" });

		this.platforms = this.game.add.group();

		this.timer = this.game.time.create(false);
		this.timer.loop(1500, this.initPlatform, this);
		this.timer.start();

		this.initGround();
		this.initPlayer();
		this.initPlatform();
		this.initCoins();
	}
	update(){
		this.game.physics.arcade.collide(this.player, this.ground);
		this.game.physics.arcade.collide(this.player, this.platforms);

		this.game.physics.arcade.collide(this.coins, this.platforms);
		this.game.physics.arcade.collide(this.player, this.coins, this.powerupHandler, null, this);

		
		if (this.deadStatus == 0){
			this.score++;
		};

		this.scoreView = this.text.setText('score: ' + this.score);

		//console.log(this.score);
		//console.log(this.speed);

		if (this.score == 500) {
			//console.log("sneller");
			this.speed += 100;
		};

		// this.speed = this.speed + this.score/2000;

		if (this.player.body.wasTouching.down){
			this.player.body.velocity.x = this.speed;
		}else{
			this.player.body.velocity.x = 0;
		}

		if (this.player.y > 320){
			this.deadStatus = 1;
			this.gameOver();
		};

		if (this.deadStatus == 0){
			this.platform.body.velocity.x = -this.speed;
		}else{
			// this.platform.body.velocity.x = 0;
			this.background.autoScroll(0, 0);
		}

	}
	initPlatform(){
		let platformY;

		platformY = this.game.rnd.integerInRange(200, 80);
		this.platform = new Platform(this.game, 480, platformY, 'platform');
		this.platforms.add(this.platform);
	}
	initGround(){
		this.ground = new Ground(this.game, 0, 200, 'ground');
		this.ground.body.velocity.x = -this.speed;
		this.add.existing(this.ground);
	}
	initPlayer(){
		this.player = new Player(this.game, 100, 185);
		this.add.existing(this.player);
	}
	initCoins(){
		let coinGroup;

		//coinGroup = this.game.rnd.integerInRange(200, 80);
		//this.coins = new Coins(this.game, coinGroup,0, 'coins');
		//console.log(coinGroup);
		//this.coinGroup.add(this.coins);

		this.coins = new Coins(this.game, 500, 100);
		this.add.existing(this.coins);

		this.coins.animations.add('turn', [0, 1, 2, 3]);
		this.coins.animations.play('turn', 10, true);

	}
	powerupHandler(){
		this.coins.kill(); 

		//TO DO: meer punten als gepakt
	}
	gameOver(){
		this.gameoverscreen = this.game.add.sprite(60,40,'gameover');
		this.finalscore = this.game.add.text(170, 140, 'your score: ' + this.score, { font: "20px Arial", fill: "#fff", align: "center" });
		this.playagainButton = this.game.add.button(130, 190, 'playagain', this.startagainClick, this); 
		this.scoreView.kill();
	}

	startagainClick() { 
        this.game.state.start('Play');
    }

}