'use strict';

exports.BattleFormats = {
	alolapokedex: {
		effectType: 'ValidatorRule',
		name: 'Alola Pokedex',
		desc: ["Only allows Pok&eacute;mon native to the Alola region (SUMO)"],
		onValidateSet: function (set, format) {
			let alolaDex = {
				"Rowlet":1, "Dartrix":1, "Decidueye":1, "Litten":1, "Torracat":1, "Incineroar":1, "Popplio":1, "Brionne":1, "Primarina":1, "Pikipek":1, "Trumbeak":1, "Toucannon":1, "Yungoos":1, "Gumshoos":1, "Rattata-Alola":1, "Raticate-Alola":1, "Caterpie":1, "Metapod":1, "Butterfree":1, "Ledyba":1, "Ledian":1, "Spinarak":1, "Ariados":1, "Pichu":1, "Pikachu":1, "Raichu-Alola":1, "Grubbin":1, "Charjabug":1, "Vikavolt":1, "Bonsly":1, "Sudowoodo":1, "Happiny":1, "Chansey":1, "Blissey":1, "Munchlax":1, "Snorlax":1, "Slowpoke":1, "Slowbro":1, "Slowking":1, "Wingull":1, "Pelipper":1, "Abra":1, "Kadabra":1, "Alakazam":1, "Meowth-Alola":1, "Persian-Alola":1, "Magnemite":1, "Magneton":1, "Magnezone":1, "Grimer-Alola":1, "Muk-Alola":1, "Growlithe":1, "Arcanine":1, "Drowzee":1, "Hypno":1, "Makuhita":1, "Hariyama":1, "Smeargle":1, "Crabrawler":1, "Crabominable":1, "Gastly":1, "Haunter":1, "Gengar":1, "Drifloon":1, "Drifblim":1, "Misdreavus":1, "Mismagius":1, "Zubat":1, "Golbat":1, "Crobat":1, "Diglett-Alola":1, "Dugtrio-Alola":1, "Spearow":1, "Fearow":1, "Rufflet":1, "Braviary":1, "Vullaby":1, "Mandibuzz":1, "Mankey":1, "Primeape":1, "Delibird":1, "Oricorio":1, "Cutiefly":1, "Ribombee":1, "Petilil":1, "Lilligant":1, "Cottonee":1, "Whimsicott":1, "Psyduck":1, "Golduck":1, "Magikarp":1, "Gyarados":1, "Barboach":1, "Whiscash":1, "Machop":1, "Machoke":1, "Machamp":1, "Roggenrola":1, "Boldore":1, "Gigalith":1, "Carbink":1, "Sableye":1, "Rockruff":1, "Lycanroc":1, "Spinda":1, "Tentacool":1, "Tentacruel":1, "Finneon":1, "Lumineon":1, "Wishiwashi":1, "Luvdisc":1, "Corsola":1, "Mareanie":1, "Toxapex":1, "Shellder":1, "Cloyster":1, "Bagon":1, "Shelgon":1, "Salamence":1, "Lillipup":1, "Herdier":1, "Stoutland":1, "Eevee":1, "Vaporeon":1, "Jolteon":1, "Flareon":1, "Espeon":1, "Umbreon":1, "Leafeon":1, "Glaceon":1, "Sylveon":1, "Mudbray":1, "Mudsdale":1, "Igglybuff":1, "Jigglypuff":1, "Wigglytuff":1, "Tauros":1, "Miltank":1, "Surskit":1, "Masquerain":1, "Dewpider":1, "Araquanid":1, "Fomantis":1, "Lurantis":1, "Morelull":1, "Shiinotic":1, "Paras":1, "Parasect":1, "Poliwag":1, "Poliwhirl":1, "Poliwrath":1, "Politoed":1, "Goldeen":1, "Seaking":1, "Feebas":1, "Milotic":1, "Alomomola":1, "Fletchling":1, "Fletchinder":1, "Talonflame":1, "Salandit":1, "Salazzle":1, "Cubone":1, "Marowak-Alola":1, "Kangaskhan":1, "Magby":1, "Magmar":1, "Magmortar":1, "Stufful":1, "Bewear":1, "Bounsweet":1, "Steenee":1, "Tsareena":1, "Comfey":1, "Pinsir":1, "Oranguru":1, "Passimian":1, "Goomy":1, "Sliggoo":1, "Goodra":1, "Castform":1, "Wimpod":1, "Golisopod":1, "Staryu":1, "Starmie":1, "Sandygast":1, "Palossand":1, "Cranidos":1, "Rampardos":1, "Shieldon":1, "Bastiodon":1, "Archen":1, "Archeops":1, "Tirtouga":1, "Carracosta":1, "Phantump":1, "Trevenant":1, "Nosepass":1, "Probopass":1, "Pyukumuku":1, "Chinchou":1, "Lanturn":1, "Type: Null":1, "Silvally":1, "Zygarde":1, "Trubbish":1, "Garbodor":1, "Skarmory":1, "Ditto":1, "Cleffa":1, "Clefairy":1, "Clefable":1, "Minior":1, "Beldum":1, "Metang":1, "Metagross":1, "Porygon":1, "Porygon2":1, "Porygon-Z":1, "Pancham":1, "Pangoro":1, "Komala":1, "Torkoal":1, "Turtonator":1, "Togedemaru":1, "Elekid":1, "Electabuzz":1, "Electivire":1, "Geodude-Alola":1, "Graveler-Alola":1, "Golem-Alola":1, "Sandile":1, "Krokorok":1, "Krookodile":1, "Trapinch":1, "Vibrava":1, "Flygon":1, "Gible":1, "Gabite":1, "Garchomp":1, "Klefki":1, "Mimikyu":1, "Bruxish":1, "Drampa":1, "Absol":1, "Snorunt":1, "Glalie":1, "Froslass":1, "Sneasel":1, "Weavile":1, "Sandshrew-Alola":1, "Sandslash-Alola":1, "Vulpix-Alola":1, "Ninetales-Alola":1, "Vanillite":1, "Vanillish":1, "Vanilluxe":1, "Snubbull":1, "Granbull":1, "Shellos":1, "Gastrodon":1, "Relicanth":1, "Dhelmise":1, "Carvanha":1, "Sharpedo":1, "Wailmer":1, "Wailord":1, "Lapras":1, "Exeggcute":1, "Exeggutor-Alola":1, "Jangmo-o":1, "Hakamo-o":1, "Kommo-o":1, "Emolga":1, "Scyther":1, "Scizor":1, "Murkrow":1, "Honchkrow":1, "Riolu":1, "Lucario":1, "Dratini":1, "Dragonair":1, "Dragonite":1, "Aerodactyl":1, "Tapu Koko":1, "Tapu Lele":1, "Tapu Bulu":1, "Tapu Fini":1, "Cosmog":1, "Cosmoem":1, "Solgaleo":1, "Lunala":1, "Nihilego":1, "Buzzwole":1, "Pheromosa":1, "Xurkitree":1, "Celesteela":1, "Kartana":1, "Guzzlord":1, "Necrozma":1, "Magearna":1, "Marshadow":1,
			};
			let template = this.getTemplate(set.species || set.name);
			if (!(template.baseSpecies in alolaDex) && !(template.species in alolaDex) && !this.getRuleTable(format).has('+' + template.speciesid)) {
				return [template.baseSpecies + " is not in the Alola Pokédex."];
			}
		},
	},
};
