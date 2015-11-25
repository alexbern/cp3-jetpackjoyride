export default class Enemy extends Phaser.Sprite { 
    constructor(game, x, y) {
        super(game, x, y, 'enemy');

        this.anchor.setTo(0.5, 0.5); 

        this.game.physics.arcade.enableBody(this);
    }
}