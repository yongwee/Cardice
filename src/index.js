var
	game     = require('./Game'),
	mainmenu = require('./MainMenu'),
	stage1   = require('./stages/Stage1');

game.state.add('stage1', stage1);
game.state.add('mainmenu', mainmenu);

game.state.start('mainmenu');
