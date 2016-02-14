

var ghostScript = require("./ghost/jarvis/jarvis");
var Ghost = require("./js/Ghost")(ghostScript);

// onInstalled
// onStartup

var game = {
	ghostInstance:null,
	speak: function speak (msg) {
		chrome.tts.speak(msg, {'voiceName': 'Google UK English Male', pitch:1.2});
	},
	showAllVoices: function showAllVoices () {
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
}

chrome.runtime.onInstalled.addListener(function(){
	//showAllVoices();


	game.ghostInstance = new Ghost();
	console.log(game.ghostInstance);

	game.ghostInstance.onWake(game);

	var recognition = new webkitSpeechRecognition();
	recognition.onresult = function(event) {
		console.log(event);
	}
	recognition.start();
});








//https://gist.github.com/danharper/8364399
