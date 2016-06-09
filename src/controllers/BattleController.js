var
	ACTIONS = {
		NONE : 0,
		ATTACK : 1,
		HEAL: 2,
		ENERGY: 3
	},

	ACTIONS_ARR = Object.keys(ACTIONS),

	NUM_DICE = 4;

function diceRoll() {
	var roll_value = Math.floor(Math.random() * ACTIONS_ARR.length);

	return ACTIONS_ARR[roll_value];
}

function multiDiceRoll(dice_arr) {
	if (!dice_arr) dice_arr = [];

	for (var i = NUM_DICE; i-- > 0;) {
		if (!old_dice_arr[i]) old_dice_arr[i] = diceRoll();
	}

	return dice_arr;
}
