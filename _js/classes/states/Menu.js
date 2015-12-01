export default class Menu extends Phaser.State{
    create(){
        console.log("menu create")
        this.game.stage.backgroundColor = '272822';

        let start = this.game.add.text(100, 100, "start", {
            font: "20px Arial",
            fill: "#fff",
            align: "center"
        });

        let credits = this.game.add.text(200, 100, "credits", {
            font: "20px Arial",
            fill: "#fff",
            align: "center"
        });

        start.inputEnabled = true;
        start.events.onInputDown.add(this.startClick, this);

        credits.inputEnabled = true;
        credits.events.onInputDown.add(this.creditsClick, this);

        //this.input.onDown.add(this.startClick, text);
    
    }

    startClick() { 
        this.game.state.start('Play');
    }

    creditsClick() { 
        this.game.state.start('Credits');
    }


}