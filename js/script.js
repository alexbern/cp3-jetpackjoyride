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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var game = undefined;
	
	var init = function init() {
		game = new Phaser.Game(480, 320, Phaser.AUTO);
	
		game.state.add('Preload', _Preload2.default, true);
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
				this.load.image('player', 'assets/sprites/player.jpg');
				this.load.image('ground', 'assets/sprites/ground.jpg');
				this.load.image('platform', 'assets/sprites/platform.jpg');
	
				this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
			}
		}, {
			key: 'onLoadComplete',
			value: function onLoadComplete() {
				this.game.state.start('Play');
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
			key: 'preload',
			value: function preload() {
				console.log('play preload');
			}
		}, {
			key: 'create',
			value: function create() {
				this.game.physics.startSystem(Phaser.Physics.ARCADE);
				this.game.stage.backgroundColor = '#67A5D7';
	
				this.ground = new _Ground2.default(this.game, 0, 200, 'ground');
				this.add.existing(this.ground);
	
				this.player = new _Player2.default(this.game, 40, 100, 'player');
				this.add.existing(this.player);
	
				this.timer = this.game.time.create(false);
				this.timer.loop(1500, this.createPlatform, this);
				this.timer.start();
			}
		}, {
			key: 'update',
			value: function update() {
				var collision = this.game.physics.arcade.collide(this.player, this.ground);
				if (collision) {
					console.log('collide');
				};
			}
		}, {
			key: 'createPlatform',
			value: function createPlatform() {
				console.log('create platform');
				var platformY = undefined;
	
				platformY = this.game.rnd.integerInRange(200, 80);
	
				this.platform = new _Platform2.default(this.game, 480, platformY, 'platform');
				this.add.existing(this.platform);
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
	
			_this.body.velocity.x = -140;
			return _this;
		}
	
		return Ground;
	})(Phaser.Sprite);
	
	exports.default = Ground;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
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
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this, game, x, y, 'player'));
	
			_this.game.physics.arcade.enableBody(_this);
			_this.anchor.setTo(0.5, 0.5);
	
			_this.body.immovable = true;
	
			_this.checkWorldBounds = true;
			_this.outOfBoundsKill = true;
			return _this;
		}
	
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
			// this.body.gravity.y = 1000;
	
			_this.body.velocity.x = -140;
	
			_this.body.immovable = true;
	
			_this.checkWorldBounds = true;
			_this.outOfBoundsKill = true;
			return _this;
		}
	
		return Platform;
	})(Phaser.Sprite);
	
	exports.default = Platform;

/***/ }
/******/ ]);
//# sourceMappingURL=script.js.map