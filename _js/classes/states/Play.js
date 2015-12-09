import Ground from '../objects/Ground';
import Player from '../objects/Player';
import Platform from '../objects/Platform';
import Coins from '../objects/Coins';
import Missile from '../objects/Missile';

export default class Play extends Phaser.State{
    create(){
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        //SCORE
        this.score = 0;
        this.scoreRange = 500;
        //COINS
        this.cointimer = 0;
        this.coinTimeRange = 500;
        this.bonusTeller = 0;
        this.textBonus = this.game.add.text(100, 20, 'bonus: 0', { font: "15px Arial", fill: "#ffffff", align: "center" });
        this.bonusView = this.textBonus.setText( 'bonus: 0');
        this.bonusState = 0;
        //DIFICULTY
        this.deadStatus = 0;
        this.speed = 140;
        //BACKGROUND
        this.background = this.game.add.tileSprite(0, 0, 480, 320, 'background');
        this.background.autoScroll(-this.speed, 0);
        this.textScore = this.game.add.text(350, 20, 'score: 0', { font: "15px Arial", fill: "#ffffff", align: "center" }); 
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
        //MISSLES
        this.missiles = this.game.add.group();
        this.intervalTimeMissle = 3000;
        this.timerMissle = this.game.time.create(false);
        this.timerMissle.loop(this.intervalTimeMissle, this.initMissile, this);
        this.timerMissle.start();
        this.timerMissle = 2000;
    }
    update(){
        //FYSICS
        this.game.physics.arcade.collide(this.player, this.ground);
        this.game.physics.arcade.collide(this.player, this.platforms);
        //COLLISSION
        this.game.physics.arcade.collide(this.coins, this.platforms);
        if(this.missiles){
            let collideMissile = this.game.physics.arcade.collide(this.player, this.missiles);
            if (collideMissile){
                this.gameOver();
            }
        }
        //SCORE OMHOOG
        if (this.deadStatus == 0){
            this.score++;
        }
        //SCORE TEV SNELHEID
        this.scoreView = this.textScore.setText('score: ' + this.score);
        if ((this.score/this.scoreRange) == 1) {
            this.scoreRange += 500;
            this.speed += 20;
            this.intervalTime -= 20;
        }
        //COINS
        this.cointimer ++;
        if (this.cointimer/this.coinTimeRange == 1 && this.bonusState == 0){
            this.coinTimeRange += this.game.rnd.integerInRange(100, 500);
            this.initCoins();
        }
        //BONUSSES
        if (this.game.physics.arcade.collide(this.player, this.coins)) {
            this.coins.kill(); 
            this.bonusText = this.game.add.text(180, 150, 'GOOD JOB!', { font: "15px Arial", fill: "#ffffff", align: "center" });
            this.game.time.events.add(Phaser.Timer.SECOND * 2, this.deathBonus, this);
            this.bonusState = 1;        
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
    initMissile(){
        let randomPos = this.game.rnd.integerInRange(200, 80);
        this.position = randomPos;
        this.missile = new Missile(this.game, 420, randomPos);
        this.add.existing(this.missile);
        this.game.add.tween(this.missile).to({y:this.position-20}, 500, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
        this.missiles.add(this.missile);
    }
    powerupHandler(){
        this.coins.kill(); 
        this.bonusPoint();
    }
    bonusPoint(){
        this.score += this.randomTime;
    }
    deathBonus(){
        this.bonusState = 0;
        this.bonusText.kill();
    }
    gameOver(){
        this.gameoverscreen = this.game.add.sprite(60,40,'gameover');
        this.finalscore = this.game.add.text(170, 140, 'your score: ' + this.score, { font: "20px Arial", fill: "#fff", align: "center" });
        this.playagainButton = this.game.add.button(130, 190, 'playagain', this.startagainClick, this); 
        this.missile.kill();
        this.scoreView.kill();
    }
    startagainClick() { 
        this.game.state.start('Play');
    }
}