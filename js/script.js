/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Preload = __webpack_require__(1);
	
	var _Preload2 = _interopRequireDefault(_Preload);
	
	var _Play = __webpack_require__(2);
	
	var _Play2 = _interopRequireDefault(_Play);
	
	var _Menu = __webpack_require__(7);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _Credits = __webpack_require__(8);
	
	var _Credits2 = _interopRequireDefault(_Credits);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var game = undefined;
	
	var init = function init() {
		game = new Phaser.Game(480, 320, Phaser.AUTO);
	
		game.state.add('Preload', _Preload2.default, true);
		game.state.add('Menu', _Menu2.default, false);
		game.state.add('Credits', _Credits2.default, false);
		game.state.add('Play', _Play2.default, false);
	};
	
	init();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Preload = (function (_Phaser$State) {
		_inherits(Preload, _Phaser$State);
	
		function Preload() {
			_classCallCheck(this, Preload);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Preload).apply(this, arguments));
		}
	
		_createClass(Preload, [{
			key: 'preload',
			value: function preload() {
	
				//this.load.spritesheet('player', 'assets/sprites/spritesheet.png', 29, 34, 2);
				this.load.image('ground', 'assets/sprites/ground.png');
				this.load.image('platform', 'assets/sprites/platform.png');
	
				this.load.image('background', 'assets/sprites/bg.png');
	
				this.load.image('logo', 'assets/sprites/logo.png');
				this.load.image('highscore', 'assets/sprites/bhighscore.jpg');
				this.load.image('play', 'assets/sprites/bplay.jpg');
				this.load.image('playagain', 'assets/sprites/bplayagain.png');
				this.load.image('back', 'assets/sprites/bback.jpg');
	
				this.load.image('gameover', 'assets/sprites/gameover.png');
				this.load.image('howto', 'assets/sprites/howtoscreen.png');
	
				this.load.atlasJSONArray('spritesheet', 'assets/sprites/spritesheet.png', 'assets/sprites/spritesheet.json');
				this.load.atlasJSONArray('spritesheetCoins', 'assets/sprites/coinSpritesheet.png', 'assets/sprites/coinSpritesheet.json');
	
				this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
			}
		}, {
			key: 'onLoadComplete',
			value: function onLoadComplete() {
				this.game.state.start('Menu');
			}
		}]);
	
		return Preload;
	})(Phaser.State);
	
	exports.default = Preload;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Ground = __webpack_require__(3);
	
	var _Ground2 = _interopRequireDefault(_Ground);
	
	var _Player = __webpack_require__(4);
	
	var _Player2 = _interopRequireDefault(_Player);
	
	var _Platform = __webpack_require__(5);
	
	var _Platform2 = _interopRequireDefault(_Platform);
	
	var _Coins = __webpack_require__(6);
	
	var _Coins2 = _interopRequireDefault(_Coins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Play = (function (_Phaser$State) {
		_inherits(Play, _Phaser$State);
	
		function Play() {
			_classCallCheck(this, Play);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Play).apply(this, arguments));
		}
	
		_createClass(Play, [{
			key: 'create',
			value: function create() {
				this.game.physics.startSystem(Phaser.Physics.ARCADE);
				//SCORE
				this.score = 0;
				this.scoreRange = 500;
				//COINS
				this.cointimer = 0;
				this.coinTimeRange = 500;
				this.bonusTeller = 0;
				this.textBonus = this.game.add.text(100, 20, 'bonus: 0', { font: "15px Arial", fill: "#ffffff", align: "center" });
				this.bonusView = this.textBonus.setText('bonus: 0');
				this.bonusState = 0;
				//DIFICULTY
				this.deadStatus = 0;
				this.speed = 140;
				//BACKGROUND
				this.background = this.game.add.tileSprite(0, 0, 480, 320, 'background');
				this.background.autoScroll(-this.speed, 0);
				this.textScore = this.game.add.text(350, 20, 'score: 0', { font: "15px Arial", fill: "#ffffff", align: "center" });
				//PLATFORMS
				this.platforms = this.game.add.group();
				this.intervalTime = 1400;
				this.timer = this.game.time.create(false);
				this.timer.loop(this.intervalTime, this.initPlatform, this);
				this.timer.start();
				this.timer = 500;
				// this.platformGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * this.intervalTime, this.initPlatform, this);
				//this.platformGenerator.timer.start();
				//STARTUP
				this.initGround();
				this.initPlayer();
				this.initPlatform();
			}
		}, {
			key: 'update',
			value: function update() {
				//FYSICS
				this.game.physics.arcade.collide(this.player, this.ground);
				this.game.physics.arcade.collide(this.player, this.platforms);
				//COLLISSION
				this.game.physics.arcade.collide(this.coins, this.platforms);
				//SCORE OMHOOG
				if (this.deadStatus == 0) {
					this.score++;
				}
				//SCORE TEV SNELHEID
				this.scoreView = this.textScore.setText('score: ' + this.score);
				if (this.score / this.scoreRange == 1) {
					this.scoreRange += 500;
					this.speed += 20;
					this.intervalTime -= 20;
				}
				//COINS
				this.cointimer++;
				if (this.cointimer / this.coinTimeRange == 1 && this.bonusState == 0) {
					this.coinTimeRange += this.game.rnd.integerInRange(100, 500);
					this.initCoins();
				}
				//BONUSSES
				if (this.game.physics.arcade.collide(this.player, this.coins)) {
					this.coins.kill();
					this.bonusState = 1;
					this.randomTime = Phaser.Timer.SECOND * this.game.rnd.integerInRange(1, 5);
					this.bonusTeller = this.game.time.events.add(this.randomTime, this.bonusPoint, this);
				}
				//PLAYER GAMEPLAY
				if (this.player.body.wasTouching.down) {
					this.player.body.velocity.x = this.speed;
				} else {
					this.player.body.velocity.x = 0;
				}
				if (this.player.y > 320) {
					this.deadStatus = 1;
					this.gameOver();
				}
				if (this.deadStatus == 0) {
					this.platform.body.velocity.x = -this.speed;
				} else {
					// this.platform.body.velocity.x = 0;
					this.background.autoScroll(0, 0);
				}
			}
		}, {
			key: 'initPlatform',
			value: function initPlatform() {
				var platformY = undefined;
				platformY = this.game.rnd.integerInRange(200, 80);
				this.platform = new _Platform2.default(this.game, 480, platformY, 'platform');
				this.platforms.add(this.platform);
			}
		}, {
			key: 'initGround',
			value: function initGround() {
				this.ground = new _Ground2.default(this.game, 0, 200, 'ground');
				this.ground.body.velocity.x = -this.speed;
				this.add.existing(this.ground);
			}
		}, {
			key: 'initPlayer',
			value: function initPlayer() {
				this.player = new _Player2.default(this.game, 100, 185);
				this.add.existing(this.player);
			}
		}, {
			key: 'initCoins',
			value: function initCoins() {
				var coinGroup = undefined;
				this.coins = new _Coins2.default(this.game, 500, 100);
				this.add.existing(this.coins);
			}
		}, {
			key: 'powerupHandler',
			value: function powerupHandler() {
				this.coins.kill();
				this.bonusPoint();
			}
		}, {
			key: 'bonusPoint',
			value: function bonusPoint() {
				this.score += this.randomTime;
				this.bonusText = this.game.add.text(180, 150, 'GOOD JOB!', { font: "15px Arial", fill: "#ffffff", align: "center" });
				this.game.time.events.add(Phaser.Timer.SECOND * 2, this.deathBonus, this);
			}
		}, {
			key: 'deathBonus',
			value: function deathBonus() {
				this.bonusState = 0;
				this.bonusText.kill();
			}
		}, {
			key: 'gameOver',
			value: function gameOver() {
				this.gameoverscreen = this.game.add.sprite(60, 40, 'gameover');
				this.finalscore = this.game.add.text(170, 140, 'your score: ' + this.score, { font: "20px Arial", fill: "#fff", align: "center" });
				this.playagainButton = this.game.add.button(130, 190, 'playagain', this.startagainClick, this);
				this.scoreView.kill();
			}
		}, {
			key: 'startagainClick',
			value: function startagainClick() {
				this.game.state.start('Play');
			}
		}]);
	
		return Play;
	})(Phaser.State);
	
	exports.default = Play;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Ground = (function (_Phaser$Sprite) {
		_inherits(Ground, _Phaser$Sprite);
	
		function Ground(game, x, y) {
			_classCallCheck(this, Ground);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Ground).call(this, game, x, y, 'ground'));
	
			_this.game.physics.arcade.enableBody(_this);
			_this.body.immovable = true;
	
			_this.checkWorldBounds = true;
			_this.outOfBoundsKill = true;
			return _this;
		}
	
		return Ground;
	})(Phaser.Sprite);
	
	exports.default = Ground;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Player = (function (_Phaser$Sprite) {
		_inherits(Player, _Phaser$Sprite);
	
		function Player(game, x, y) {
			_classCallCheck(this, Player);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this, game, x, y, 'spritesheet'));
	
			_this.cursors = _this.game.input.keyboard.createCursorKeys();
	
			_this.game.physics.arcade.enableBody(_this);
			_this.anchor.setTo(0.5, 0.5);
	
			_this.body.gravity.y = 1000;
	
			_this.jumpCount = 0;
			_this.jumpkey = _this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
			_this.jumpkey.onDown.add(_this.jumpCheck, _this);
	
			_this.animations.add('run', [0, 1]);
			_this.animations.add('jump', [3]);
			_this.animations.add('jetpack', [2]);
	
			return _this;
		}
	
		_createClass(Player, [{
			key: 'update',
			value: function update() {
				if (this.body.wasTouching.down) {
					this.jumpCount = 0;
					this.animations.play('run', 10, true);
				}
			}
		}, {
			key: 'jumpCheck',
			value: function jumpCheck() {
				if (this.jumpCount < 1) {
					this.body.velocity.y = -350;
					this.jumpCount++;
					this.animations.play('jetpack', 1, true);
				}
			}
		}]);
	
		return Player;
	})(Phaser.Sprite);
	
	exports.default = Player;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Platform = (function (_Phaser$Sprite) {
		_inherits(Platform, _Phaser$Sprite);
	
		function Platform(game, x, y) {
			_classCallCheck(this, Platform);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Platform).call(this, game, x, y, 'platform'));
	
			_this.game.physics.arcade.enableBody(_this);
			_this.body.immovable = true;
			_this.checkWorldBounds = true;
			_this.outOfBoundsKill = true;
			return _this;
		}
	
		return Platform;
	})(Phaser.Sprite);
	
	exports.default = Platform;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Coins = (function (_Phaser$Sprite) {
		_inherits(Coins, _Phaser$Sprite);
	
		function Coins(game, x, y) {
			_classCallCheck(this, Coins);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Coins).call(this, game, x, y, 'spritesheetCoins'));
	
			_this.game.physics.arcade.enableBody(_this);
			_this.anchor.setTo(0.5, 0.5);
			_this.body.gravity.y = 1000;
			_this.animations.add('turn', [0, 1, 2, 3]);
			return _this;
		}
	
		_createClass(Coins, [{
			key: 'update',
			value: function update() {
				this.animations.play('turn', 10, true);
			}
		}]);
	
		return Coins;
	})(Phaser.Sprite);
	
	exports.default = Coins;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Menu = (function (_Phaser$State) {
	    _inherits(Menu, _Phaser$State);
	
	    function Menu() {
	        _classCallCheck(this, Menu);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).apply(this, arguments));
	    }
	
	    _createClass(Menu, [{
	        key: 'create',
	        value: function create() {
	            this.background = this.game.add.tileSprite(0, 0, 480, 320, 'background');
	            this.background.autoScroll(-15, 0);
	            //TITLE
	            this.title = this.game.add.sprite(70, 40, 'logo');
	            this.game.add.tween(this.title).to({ y: 50 }, 500, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
	            //START KNOP
	            this.startButton = this.game.add.button(100, 240, 'play', this.startClick, this);
	            this.highscoreButton = this.game.add.button(260, 240, 'highscore', this.creditsClick, this);
	        }
	    }, {
	        key: 'startClick',
	        value: function startClick() {
	            this.title.kill();
	            this.startButton.kill();
	            this.highscoreButton.kill();
	            this.howtoscreen = this.game.add.sprite(60, 40, 'howto');
	            this.startText = this.game.add.text(240, 200, 'jump once to start', { font: "15px Arial", fill: "#ffffff", align: "center" });
	            this.startText.anchor.setTo(0.5, 0.5);
	            this.game.add.tween(this.startText.scale).to({ x: 1.2, y: 1.2 }, 2000, Phaser.Easing.Linear.NONE, true, 0, 500, true);
	            //FLY START
	            this.cursors = this.game.input.keyboard.createCursorKeys();
	            this.flykey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
	            this.flykey.onDown.add(this.startGame, this);
	        }
	    }, {
	        key: 'startGame',
	        value: function startGame() {
	            this.game.state.start('Play');
	        }
	    }, {
	        key: 'creditsClick',
	        value: function creditsClick() {
	            this.game.state.start('Credits');
	        }
	    }]);
	
	    return Menu;
	})(Phaser.State);
	
	exports.default = Menu;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Credits = (function (_Phaser$State) {
	    _inherits(Credits, _Phaser$State);
	
	    function Credits() {
	        _classCallCheck(this, Credits);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Credits).apply(this, arguments));
	    }
	
	    _createClass(Credits, [{
	        key: "create",
	        value: function create() {
	            this.background = this.game.add.tileSprite(0, 0, 480, 320, 'background');
	            this.background.autoScroll(-15, 0);
	
	            var credits = this.game.add.text(100, 100, "here are the credits ....", {
	                font: "20px Arial",
	                fill: "#fff",
	                align: "center"
	            });
	
	            //START KNOP
	            this.startButton = this.game.add.button(100, 240, 'play', this.startClick, this);
	            this.backButton = this.game.add.button(260, 240, 'back', this.backClick, this);
	        }
	    }, {
	        key: "startClick",
	        value: function startClick() {
	            this.game.state.start('Play');
	        }
	    }, {
	        key: "backClick",
	        value: function backClick() {
	            this.game.state.start('Menu');
	        }
	    }]);
	
	    return Credits;
	})(Phaser.State);
	
	exports.default = Credits;

/***/ }
/******/ ]);
//# sourceMappingURL=script.js.map