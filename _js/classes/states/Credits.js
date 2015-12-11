export default class Credits extends Phaser.State{
    create(){
        this.background = this.game.add.tileSprite(0, 0, 480, 320, 'background');
        this.background.autoScroll(-15, 0);

         //START KNOP
        this.startButton = this.game.add.button(100, 240, 'play', this.startClick, this); 
        this.backButton = this.game.add.button(260, 240, 'back', this.backClick, this); 

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