export default class Credits extends Phaser.State{
    create(){
        this.background = this.game.add.tileSprite(0, 0, 480, 320, 'background');
        this.background.autoScroll(-15, 0);
        this.highscorescreen = this.game.add.sprite(60,40,'highscores');
         //START KNOP
        this.startButton = this.game.add.button(100, 190, 'playyellow', this.startClick, this); 
        this.backButton = this.game.add.button(260, 190, 'backyellow', this.backClick, this); 

        let $scoreSection = document.querySelector('.highscore-section');
        $scoreSection.style.display = 'flex';

        this.buttonSound = this.game.add.audio('buttonsound');
    }
    startClick() { 
        this.buttonSound.play();
        this.game.state.start('Play');
    }
    backClick() { 
        this.buttonSound.play();
        this.game.state.start('Menu');
    }

}