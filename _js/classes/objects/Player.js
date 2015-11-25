export default class Player extends Phaser.Sprite { 
    constructor(game, x, y) {
        super(game, x, y, 'player');

        this.anchor.setTo(0.5, 0.5); 

        this.game.physics.arcade.enableBody(this);
    }
}