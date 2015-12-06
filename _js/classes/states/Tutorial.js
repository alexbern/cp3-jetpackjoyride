export default class Menu extends Phaser.State{
    create(){
        this.background = this.game.add.tileSprite(0, 0, 480, 320, 'background');
        this.background.autoScroll(-15, 0);

        this.title = this.game.add.sprite(70,40,'logo');

        this.game.add.tween(this.title).to({y:50}, 500, Phaser.Easing.Linear.NONE, true, 0, 1000, true); 
        
        //START KNOP
        this.startButton = this.game.add.button(100, 240, 'play', this.startClick, this); 
        this.highscoreButton = this.game.add.button(260, 240, 'highscore', this.creditsClick, this);
    }

}