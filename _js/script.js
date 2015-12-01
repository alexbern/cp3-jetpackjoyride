import Preload from './classes/states/Preload';
import Play from './classes/states/Play';
import Menu from './classes/states/Menu';
import Credits from './classes/states/Credits';

let game;

const init = () =>{
	game = new Phaser.Game(480, 320, Phaser.AUTO);

	game.state.add('Preload', Preload, true);
	game.state.add('Menu', Menu, false);
	game.state.add('Credits', Credits, false);
	game.state.add('Play', Play, false);
}

init();