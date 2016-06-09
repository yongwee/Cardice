var game = require('./Game');

module.exports = {
	create: function() {
		var label = game.add.text(80, 80, 'Hello world', {
			font: '80px Arial',
			fill: '#ffffff'
		});

		game.input.onTap.add(this.start, this);
	},
	start: function() {
		game.state.start('stage1');
	}
};
