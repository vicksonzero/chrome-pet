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

	onGhostSelected: function(game){
		this.greetRandom(game);
	},
	onWake: function(game){
		this.greetRandom(game);
	},
	onOpenSettings: function(game){

	},
	onBored: function(game) {

	},
	onMessage:function(game) {

	},
	greetRandom: function greetRandom (game) {
		game.speak(this.getGreetingPhrase());
	},

	getGreetingPhrase: function getGreetingPhrase(){
		var greetings = this.dictionary.greetings.list;
		//console.log(greetings);
		var index = Math.floor(Math.random()*greetings.length);
		//var index = 0;
		return greetings[index];
	},

	dictionary:{

		greetings:{
			nonoverlap:10, // sequential:true, nonoverlap:0.5
			list:[
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
				"Crisp to the maximum",
				// Toy Story
				"There's a snake in your boot!",
			]
		}
	},


	// plugin data
	plugins:{}

}
