import Ground from '../objects/Ground';
import Player from '../objects/Player';
import Platform from '../objects/Platform';
import Coins from '../objects/Coins';
import Missile from '../objects/Missile';

export default class Play extends Phaser.State{
    create(){
        let $scoreSection = document.querySelector('.highscore-section');
        $scoreSection.style.display = 'none';
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        //SCORE
        this.score = 0;
        this.scoreRange = 500;
        //COINS
        this.cointimer = 0;
        this.coinTimeRange = 500;
        this.bonusTeller = 0;
        this.textBonus = this.game.add.text(100, 20, 'bonus: 0', { font: 'Arial', fill: '#ffffff', align: 'center' });
        this.bonusView = this.textBonus.setText( 'bonus: 0');
        //DIFICULTY
        this.deadStatus = 0;
        this.misslestatus = 1;
        this.speed = 140;
        //BACKGROUND
        this.background = this.game.add.tileSprite(0, 0, 480, 320, 'background');
        this.background.autoScroll(-this.speed, 0);
        this.textScore = this.game.add.text(350, 20, '0', { font: 'Arial', fill: '#ffffff', align: 'center', fontSize: 22}); 
        //PLATFORMS
        if (this.deadStatus == 0) {
            this.platforms = this.game.add.group();
            this.intervalTime = 1400;
            this.timer = this.game.time.create(false);
            this.timer.loop(this.intervalTime, this.initPlatform, this);
            this.timer.start();
            this.timer = 500;
        }
        //STARTUP
        this.initGround();
        this.initPlayer();
        this.initPlatform();
        //MISSLES
        this.missiles = this.game.add.group();
        this.intervalTimeMissle = 3000;
        this.timerMissle = this.time.events.loop(this.intervalTimeMissle, this.initMissile, this);       
        //SOUNDS
        this.coinSound = this.game.add.audio('coinsound');
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
        this.scoreView = this.textScore.setText(this.score);
        if ((this.score/this.scoreRange) == 1) {
          this.scoreRange += 500;
          this.speed += 20;
          this.intervalTime -= 20;
        }
        //COINS
        this.cointimer ++;
        if (this.cointimer/this.coinTimeRange == 1){
          this.coinTimeRange += this.game.rnd.integerInRange(100, 500);
          if (this.deadStatus == 0) {
            this.initCoins();
          }
        }
        //BONUSSES
        if (this.game.physics.arcade.collide(this.player, this.coins)) {
          this.coinSound.play();
          this.coins.kill();
          let textArray = ['goodjob','nice','welldone']; 
          let selectText = this.game.rnd.integerInRange(0, 2);
          this.bonusText = this.game.add.sprite(150,110,textArray[selectText]);
          this.game.add.tween(this.bonusText).to({y:90}, 500, Phaser.Easing.Linear.NONE, true, 0, 1000, true); 
          this.game.time.events.add(Phaser.Timer.SECOND * 2, this.deathBonus, this);
          this.randomTime = Phaser.Timer.SECOND * this.game.rnd.integerInRange(1,3);
          this.score += this.randomTime;     
        }
        //PLAYER GAMEPLAY
        if (this.player.body.wasTouching.down){
          this.player.body.velocity.x = this.speed;
        }else{
          this.player.body.velocity.x = 0;
        }
        if (this.player.y > 320){
          this.gameOver();
        }
        if (this.deadStatus == 0){
          this.platform.body.velocity.x = -this.speed;
        }else{
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
    }
    deathBonus(){
      this.bonusText.kill();
    }
    gameOver(){
      this.deadStatus = 1;
      this.misslestatus = 0;
      this.player.kill();
      this.missile.kill();
      this.platform.kill();
      this.scoreView.kill();
      this.time.events.remove(this.timerMissle);
      let $formSection = document.querySelector('.form-section');
      let $form = document.querySelector('#itemAddForm');
      $form.style.display = 'inline';
      $formSection.style.display = 'flex';
      let $scoretext = document.createElement('input');
      $scoretext.type = 'number';
      $scoretext.classList.add('scoreinput');
      $scoretext.name = 'score';
      $scoretext.value = this.score;
      $scoretext.style.display = 'none';
      $form.appendChild($scoretext);
      let $scoremsg = document.querySelector('.score-message');
      $scoremsg.innerHTML = 'Your score is: ' + this.score;
    }
    startagainClick() { 
      this.game.state.start('Play');
    }
}