module.exports = {
	name: "jarvis",
	state: "default",
	states: ["default"],

	compatiblePlugins:[
		"TimeAnnouncer"
	],

	persistent:{
		scripts:{
			installed:null,
			greetings:null
		}
	},

	scripts:{
		installed:{
			random: 0,
			list:[
				"Hello _user. I am _botName. Nice to meet you."
			]
		},
		greetings:{
			random: 0,
			max: 10,		// no need if not random
			list:[
				"Hello _user. _phrase[timePhrase]",
				"Oh... it's YOU. It's been a long time, how have you been?",
				"Are you still there?",
				"If life gives you lemon, make combustible lemon grenades!",
				"I'm different",
				"Prometheus was punished by the gods for giving the gift of knowledge to man. He was cast into the bowels of the Earth and pecked by birds.",
				// C&C
				"Establishing battlefield control, standby...",
				"Battle control online",
				"Our base is under attack",
				"I've got a present for ya",
				"Silos needed",
				"Tiberium exposure detected",

				// Starcraft
				"You want a piece of me boy?",
				"Nuclear launch detected.",
				"My life for hire!",
				"Spawn more overlordssss...",
				"You must construct additional pylons.",
				"Additional supply depots required.",
				"Power overwhelming!",
				"For the Hor... Wait... Go, go, go!",
				// League of Legends
				"Crisp to da maximum",
				// Toy Story
				"There's a snake in your boot!",
			]
		},

		timePhrase:{
			random: 0,
			list:[
				"The time is now _time."
			]
		},
		noPluginPhrase:{
			random: 0,
			list:[
				". Hold on, do I have this plugin \"_pluginName\"?"
			]
		},
		// plugin_timeAnnouncer:{
		// 	default:{
		// 		random: 0,
		// 		list:[
		// 			"Hello. _phrase[timePhrase]"
		// 		]
		// 	}
		// },
		default:{
			random: 0,
			list:[
				"Hello, World."
			]
		}
	}
	
};
