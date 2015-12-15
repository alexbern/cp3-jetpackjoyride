export default class Preload extends Phaser.State{
    preload(){

    //this.load.spritesheet('player', 'assets/sprites/spritesheet.png', 29, 34, 2);
    this.load.image('ground', 'assets/sprites/ground.png');
    this.load.image('platform', 'assets/sprites/platform.png');

    this.load.image('background', 'assets/sprites/bg.png');

    this.load.image('logo', 'assets/sprites/logo.png');
    this.load.image('highscore', 'assets/sprites/bhighscore.jpg');
    this.load.image('play', 'assets/sprites/bplay.jpg');
    this.load.image('playyellow', 'assets/sprites/playYellow.png');
    this.load.image('backyellow', 'assets/sprites/backYellow.png');
    this.load.image('playagain', 'assets/sprites/bplayagain.png');
    this.load.image('back', 'assets/sprites/bback.jpg');
    this.load.image('welldone', 'assets/sprites/welldone.png');
    this.load.image('goodjob', 'assets/sprites/goodjob.png');
    this.load.image('nice', 'assets/sprites/nice.png');

    this.load.image('gameover', 'assets/sprites/gameover.png');
    this.load.image('howto', 'assets/sprites/howtoscreen.png');
    this.load.image('highscores', 'assets/sprites/highscoresscreen.png');

    this.load.atlasJSONArray('spritesheet', 'assets/sprites/spritesheet.png', 'assets/sprites/spritesheet.json');
    this.load.atlasJSONArray('spritesheetCoins', 'assets/sprites/coinSpritesheet.png', 'assets/sprites/coinSpritesheet.json');
    this.load.atlasJSONArray('spritesheetMissile', 'assets/sprites/missileSpritesheet.png', 'assets/sprites/missileSpritesheet.json'); 

    this.load.audio('musicsound', 'assets/sound/music.ogg');  
    this.load.audio('missilesound', 'assets/sound/fire.wav');  
    this.load.audio('buttonsound', 'assets/sound/knop.wav'); 
    this.load.audio('coinsound', 'assets/sound/coin.wav');  
    this.load.audio('jetpacksound', 'assets/sound/jetpack.wav'); 

    //this.game.load.bitmapFont('font', 'assets/font.png', 'assets/font.font');        
    
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    }  
    onLoadComplete(){
        this.introSound = this.game.add.audio('musicsound');
        this.introSound.play('', 0, 1, true);
        this.game.state.start('Menu');
    }
}