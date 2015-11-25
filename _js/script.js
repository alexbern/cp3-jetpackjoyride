import Preload from './classes/states/Preload';
import Play from './classes/states/Play';

let game;

const init = () =>{
	game = new Phaser.Game(480, 320, Phaser.AUTO);

	game.state.add('Preload', Preload, true);
	game.state.add('Play', Play, false);
}

init();