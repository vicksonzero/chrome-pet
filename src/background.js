

var ghostScript = require("./ghost/jarvis/jarvis");
var Ghost = require("./js/Ghost")(ghostScript);
var username = "Dickson";
const Logger = require("./js/lib/Logger");
var _logger = new Logger("Game");


var game = {
	ghostInstance: null,
	ghostScript: ghostScript,
	greetRandom: greetRandom,
	speak: speak,
	saveGhost: saveGhost,
	loadGhost: loadGhost,
	getTime: getTime,
	getDate: getDate,
	clearGhost: clearGhost
};

window.game = game;

// Register Event handlers
chrome.runtime.onInstalled.addListener(function(){
	//showAllVoices();
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

function greetRandom (ghost) {
	speak(ghost.getGreetingPhrase());
}


function speak (msg) {
	_logger.info("speak: " + msg);
	chrome.tts.speak(msg, {'voiceName': 'Google UK English Male', pitch:1.2});
}


function showAllVoices () {
	chrome.tts.getVoices(function(voices) {
		for (var i = 0; i < voices.length; i++) {
			console.log('Voice ' + i + ':');
			console.log('  name: ' + voices[i].voiceName);
			console.log('  lang: ' + voices[i].lang);
			console.log('  gender: ' + voices[i].gender);
			console.log('  extension id: ' + voices[i].extensionId);
			console.log('  event types: ' + voices[i].eventTypes);
		}
	});
}

function saveGhost(ghost) {
	var persistent = ghost.getPersistent();
	// Save it using the Chrome extension storage API.
	chrome.storage.sync.set({'ghostPersistent': persistent}, function() {
		// Notify that we saved.
		//console.log(chrome.runtime.lastError);
		message('Settings saved');

	});
}

function loadGhost(ghost, callback) {
	// Save it using the Chrome extension storage API.
	chrome.storage.sync.get('ghostPersistent', function(persistent) {
		// Notify that we saved.
		if(persistent.ghostPersistent && Object.keys(persistent.ghostPersistent).length>0){
			ghost.setPersistent(persistent.ghostPersistent);
		}else{
			console.log("need persist");
			ghost.initPersistent();
		}
		callback();
	});
}

function clearGhost (callback) {
	chrome.storage.sync.remove('ghostPersistent',callback);
}

function getTime() {
	var now = new Date();
	var time = "" 
		+ now.getHours() + ":"  
		+ now.getMinutes();
	return time;
}

function getDate() {
	var now = new Date(); 
	var date = "" + now.getDate() + "/"
		+ (now.getMonth()+1)  + "/" 
		+ now.getFullYear();
	return date;
}

//https://gist.github.com/danharper/8364399 
