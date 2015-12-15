export default class Menu extends Phaser.State{
    create(){
        this.background = this.game.add.tileSprite(0, 0, 480, 320, 'background');
        this.background.autoScroll(-15, 0);
        //TITLE
        this.title = this.game.add.sprite(70,40,'logo');
        this.game.add.tween(this.title).to({y:50}, 500, Phaser.Easing.Linear.NONE, true, 0, 1000, true); 
        //START KNOP
        this.startButton = this.game.add.button(100, 240, 'play', this.startClick, this); 
        this.highscoreButton = this.game.add.button(260, 240, 'highscore', this.creditsClick, this);

        this.buttonSound = this.game.add.audio('buttonsound');
    }
    startClick() { 
        this.buttonSound.play();
        this.title.kill();
        this.startButton.kill();
        this.highscoreButton.kill();
        this.howtoscreen = this.game.add.sprite(60,40,'howto');
        this.startText = this.game.add.text(240, 200, 'jump once to start', { font: '15px Arial', fill: '#ffffff', align: 'center' });
        this.startText.anchor.setTo(0.5, 0.5);
        this.game.add.tween(this.startText.scale).to( { x: 1.2, y: 1.2 }, 2000, Phaser.Easing.Linear.NONE, true, 0, 500, true);
        //FLY START
        this.cursors = this.game.input.keyboard.createCursorKeys(); 
        this.flykey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
        this.flykey.onDown.add(this.startGame, this);
    }
    startGame(){
        this.buttonSound.play();
        this.game.state.start('Play');
    }
    creditsClick() { 
        this.buttonSound.play();
        this.game.state.start('Credits');
    }
}