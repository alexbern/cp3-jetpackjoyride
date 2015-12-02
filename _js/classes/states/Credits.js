export default class Credits extends Phaser.State{
    create(){
        this.background = this.game.add.tileSprite(0, 0, 480, 320, 'background');
        this.background.autoScroll(-15, 0);

        let credits = this.game.add.text(100, 100, "here are the credits ....", {
            font: "20px Arial",
            fill: "#fff",
            align: "center"
        });

        let start = this.game.add.text(100, 200, "start the game", {
            font: "20px Arial",
            fill: "#fff",
            align: "center"
        });


        start.inputEnabled = true;
        start.events.onInputDown.add(this.startClick, this);
    }

    startClick() { 
        this.game.state.start('Play');
    }

}