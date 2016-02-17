

var ghostScript = require("./ghost/jarvis/");
var Ghost = require("./js/Ghost")(ghostScript);


var game = {
	ghostInstance: null,
	ghostScript: ghostScript,
	greetRandom: greetRandom,
	speak: speak,
	saveGhost: saveGhost,
	loadGhost: loadGhost
};

window.game = game;

// Register Event handlers
chrome.runtime.onInstalled.addListener(function(){
	//showAllVoices();
	game.ghostInstance = new Ghost();
	console.log(game.ghostInstance);

	game.loadGhost(game.ghostInstance);

	game.ghostInstance.onInstalled(game);

	var recognition = new webkitSpeechRecognition();
	recognition.onresult = function(event) { 
		console.log(event);
	}
	recognition.start();
});
//windows.onCreated
//onStartup
chrome.windows.onCreated.addListener(function () {

});






// helper functions

function greetRandom (ghost) {
	speak(ghost.getGreetingPhrase());
}


function speak (msg) {
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
		console.log(chrome.runtime.lastError);
		message('Settings saved');

	});
}

function loadGhost(ghost) {
	// Save it using the Chrome extension storage API.
	chrome.storage.sync.get('ghostPersistent', function(persistent) {
		// Notify that we saved.
		console.log(chrome.runtime.lastError);
		if(persistent){
			ghost.persistent = persistent;
		}

	});
}

//https://gist.github.com/danharper/8364399 
