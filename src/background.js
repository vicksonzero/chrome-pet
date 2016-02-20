
const Logger = require("./js/lib/Logger");
const Game = require("./Game");

var ghostScript = require("./ghost/jarvis/jarvis");
var Ghost = require("./js/Ghost")(ghostScript);
const TimeAnnouncer = require("./plugins/TimeAnnouncer");
var username = "Dickson";
var _logger = new Logger("Game");


var game = new Game(chrome);

window.game = game;

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

	game.ghostInstance.addPlugin(new TimeAnnouncer(game));
});

// Register Event handlers
chrome.runtime.onInstalled.addListener(function(){
	//showAllVoices();
	// js promise: serialize all callback chains into more readable version
	
	game.ghostInstance.onInstalled(game);
});
//windows.onCreated
//onStartup
// chrome.windows.onCreated.addListener(function () {

// });

chrome.runtime.onStartup.addListener(function(){
	//showAllVoices();
	

	// var recognition = new webkitSpeechRecognition();
	// recognition.onresult = function(event) {
	// 	console.log(event);
	// }
	// recognition.start();
});


chrome.runtime.onSuspend.addListener(function(){
	//showAllVoices();
	game.saveGhost(game.ghostInstance);

});




// helper functions








//https://gist.github.com/danharper/8364399
