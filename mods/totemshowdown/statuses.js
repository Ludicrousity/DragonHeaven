'use strict';

exports.BattleStatuses = {
	totem: {
		noCopy: true,
		onStart: function (pokemon) {
			this.add('-message', `Totem ${pokemon.species}'s aura flared to life! Its stats rose!`);
			for (let i in pokemon.boosts) {
				pokemon.boosts[i] = 1;
				this.add('-boost', pokemon, i, 1, '[silent]');
			}
		},
		onModifyMove: function (pokemon) {
			delete move.selfSwitch;
		},
		onTrapPokemon: function (pokemon) {
			pokemon.tryTrap();
		},
		onDragOut: function (pokemon) {
			return null;
		},
	}
};