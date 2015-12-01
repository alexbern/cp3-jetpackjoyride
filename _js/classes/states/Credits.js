export default class Credits extends Phaser.State{
    create(){
        console.log("Credits")
        this.game.stage.backgroundColor = '272822';

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