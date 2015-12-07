import Ground from '../objects/Ground';
import Player from '../objects/Player';
import Platform from '../objects/Platform';
import Coins from '../objects/Coins';

export default class Play extends Phaser.State{
	preload(){

	}
	create(){
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		//SCORE
		this.score = 0;
		this.scoreRange = 500;
		//COINS
		this.cointimer = 0;
		this.coinTimeRange = 500;
		this.bonusTeller = 0;
		//DIFICULTY
		this.deadStatus = 0;
		this.speed = 140;
		//BACKGROUND
		this.background = this.game.add.tileSprite(0, 0, 480, 320, 'background');
		this.background.autoScroll(-this.speed, 0);
		this.text = this.game.add.text(350, 20, 'score: 0', { font: "15px Arial", fill: "#ffffff", align: "center" });
		//PLATFORMS
		this.platforms = this.game.add.group();
		this.intervalTime = 1400;
		this.timer = this.game.time.create(false);
		this.timer.loop(this.intervalTime, this.initPlatform, this);
		this.timer.start();
		this.timer = 500;
		// this.platformGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * this.intervalTime, this.initPlatform, this); 
  		//this.platformGenerator.timer.start();
  		//STARTUP
		this.initGround();
		this.initPlayer();
		this.initPlatform();
	}
	update(){
		//FYSICS
		this.game.physics.arcade.collide(this.player, this.ground);
		this.game.physics.arcade.collide(this.player, this.platforms);
		//COLLISSION
		this.game.physics.arcade.collide(this.coins, this.platforms);

		//SCORE OMHOOG
		if (this.deadStatus == 0){
			this.score++;
		}
		//SCORE TEV SNELHEID
		this.scoreView = this.text.setText('score: ' + this.score);
		if ((this.score/this.scoreRange) == 1) {
			this.scoreRange += 500;
			this.speed += 20;
			this.intervalTime -= 20;
		}
		//COINS
		this.cointimer ++;
		if (this.cointimer/this.coinTimeRange == 1){
			this.coinTimeRange += this.game.rnd.integerInRange(100, 500);
			this.initCoins();
		}

		// this.timer++;
		// this.timer = this.timer % this.intervalTime;

		// if (this.timer == 0){
		// 	this.initPlatform();
		// };

		// this.speed = this.speed + this.score/2000;

		//BONUSSES
		if (this.game.physics.arcade.collide(this.player, this.coins)) {
			this.coins.kill(); 
			this.randomTime = Phaser.Timer.SECOND * this.game.rnd.integerInRange(1,5);
			this.bonusTeller = this.game.time.events.add(this.randomTime, this.bonusPoint, this);
		}

		//PLAYER GAMEPLAY
		if (this.player.body.wasTouching.down){
			this.player.body.velocity.x = this.speed;
		}else{
			this.player.body.velocity.x = 0;
		}
		if (this.player.y > 320){
			this.deadStatus = 1;
			this.gameOver();
		}
		if (this.deadStatus == 0){
			this.platform.body.velocity.x = -this.speed;
		}else{
			// this.platform.body.velocity.x = 0;
			this.background.autoScroll(0, 0);
		}

	}
	render() {
    	this.game.debug.text(this.game.time.events.duration, 32, 32);
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
		this.coins = new Coins(this.game, 500, 100);
		this.add.existing(this.coins);
	}
	powerupHandler(){
		this.coins.kill(); 
		this.bonusPoint();
	}
	bonusPoint(){
		this.score += this.randomTime;
		//TO DO: bonustekst sprite 
		//this.bonusText = this.game.add.text(180, 150, 'GOOD JOB!', { font: "15px Arial", fill: "#ffffff", align: "center" });
		//this.game.time.events.add(Phaser.Timer.SECOND * 2, this.deathBonus, this);
	}
	deathBonus(){
		this.bonusText.kill();
		this.randomTime = 0;
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