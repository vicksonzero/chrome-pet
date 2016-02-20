//http://ihgs.blog.163.com/blog/static/194117102201103010618477/

module.exports = {
	name: "jarvis",
	state: "default",
	states: ["default"],
	dat:{
		minTimeTillBored:10, // 10 seconds
		dateBirthday: 0,
		dateLastWakeup: 0,
		timeSlept: 0,
		lastSpoken: 0
	},

	onOpenSettings: function(game){

	},
	onMessage:function(game) {

	},


	compatiblePlugins:[
		"TimeAnnouncer"
	],

	persistent:{
		scripts:{
			installed: null,
			greetings: null,
			plugin_timeAnnouncer_default: null
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
			nonoverlap: 10,		// no need if not random
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
				"Spawn more overlords...",
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
		bored:{
			random: 1,
			nonoverlap: 10,		// no need if not random
			list:[
				"Hey, let's have a chat"
			]
		},

		timePhrase:{
			random: 0,
			list:[
				"The time is now _time.",
				"It is now _time."
			]
		},
		noPluginPhrase:{
			random: 0,
			list:[
				". Hold on, do I have this plugin \"_pluginName\"?",
				"Sorry. I don't have a plugin called \"_pluginName\""
			]
		},
		plugin_timeAnnouncer_default:{
			random: 0,
			list:[
				"Hello. _phrase[timePhrase]"
			]
		},
		default:{
			random: 0,
			list:[
				"Hello, World."
			]
		}
	}

};
