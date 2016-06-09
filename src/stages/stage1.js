var game = require('../Game');

module.exports = {
	preload() {
		game.load.image('backdrop', 'assets/mountain.jpg');
	},
	create() {
		pic = game.add.sprite(0, 0, 'backdrop');
	},
	update() {

	}
};
