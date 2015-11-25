import Preload from './classes/states/Preload';


let game;

const init = () =>{
	console.log('init');
	game = new Phaser.Game(480, 320, Phaser.AUTO);

	game.state.add('Preload', Preload, true);
}

init();