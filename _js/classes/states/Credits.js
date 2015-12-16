export default class Credits extends Phaser.State{
    create(){
        this.background = this.game.add.tileSprite(0, 0, 480, 320, 'background');
        this.background.autoScroll(-15, 0);
        this.highscorescreen = this.game.add.sprite(60,40,'highscores');
         //START KNOP
        this.startButton = this.game.add.button(100, 190, 'playyellow', this.startClick, this); 
        this.backButton = this.game.add.button(260, 190, 'backyellow', this.backClick, this); 

        let $scoreSection = document.querySelector('.highscore-section');
        $scoreSection.style.display = 'flex';

        this.buttonSound = this.game.add.audio('buttonsound');
        this.loadItems();
    }
    startClick() { 
        this.buttonSound.play();
        this.game.state.start('Play');
    }
    backClick() { 
        this.buttonSound.play();
        this.game.state.start('Menu');
    }
    loadItems(){
        let req = new XMLHttpRequest();
        req.responseType = 'json';
        req.onload = () => {
          let itemsResultEl = document.querySelector('.highscore-section');
          if(!req.response || req.response.length === 0) {
            itemsResultEl.innerHTML = '<p>No Items In Database</p>';
            return;
          }
          let resultHTML = '<ol>';
          req.response.forEach(item => {
            resultHTML += `<li>${item.name} - ${item.score}</li>`;
          });
          resultHTML += '</ol>';
          itemsResultEl.innerHTML = resultHTML;
        };
        let url = `index.php?t=${Date.now()}`;
        req.open('get', url, true);
        req.setRequestHeader('X_REQUESTED_WITH', 'xmlhttprequest');
        req.send();
    }
}