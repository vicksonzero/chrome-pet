module.exports = {
	name: "jarvis",
	state: "default",
	states: ["default"],

	getGreetingPhrase: function getGreetingPhrase(){
		var greetings = this.scripts.greetings;
		console.log(this);
		var index = Math.floor(Math.random()*greetings.length);
		//var index = 0;
		return greetings[index];
	},
	persistent:{
		scripts:{
			greetings:null
		}
	},

	scripts:{
		installed:[
			"Battle control online"
		],
		greetings:[
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
	}
	

}