
const Logger = require("./js/lib/Logger");
const Game = require("./Game");

var ghostScript = require("./ghost/jarvis/jarvis");
var Ghost = require("./js/Ghost")(ghostScript);
const TimeAnnouncer = require("./plugins/TimeAnnouncer");
var username = "Dickson";
var _logger = new Logger("Game");


var game = new Game(chrome);

window.game = game;

// Register Event handlers
chrome.runtime.onInstalled.addListener(function(){
	//showAllVoices();
	// js promise: serialize all callback chains into more readable version
	Promise.resolve()
	.then(function(){
		// create ghost instance
		game.ghostInstance = new Ghost(username);

		// fill in ghost persistency
		return new Promise(function(resolve, reject){
			game.loadGhost(game.ghostInstance, resolve);
		});
	})
	.then(function(){

		// final check of ghost and let it come to life
		console.log(game.ghostInstance);
		game.ghostInstance.onInstalled(game);
	})
	.then(function(){

		game.ghostInstance.addPlugin(new TimeAnnouncer(game));
	});

	var recognition = new webkitSpeechRecognition();
	recognition.onresult = function(event) {
		console.log(event);
	}
	recognition.start();
});
//windows.onCreated
//onStartup
// chrome.windows.onCreated.addListener(function () {

// });


chrome.runtime.onSuspend.addListener(function(){
	//showAllVoices();
	game.saveGhost(game.ghostInstance);

});




// helper functions








//https://gist.github.com/danharper/8364399
