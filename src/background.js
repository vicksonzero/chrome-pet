

var ghostScript = require("./ghost/jarvis/");
var Ghost = require("./js/Ghost")(ghostScript);

var ghostInstance;
// onInstalled
// onStartup
chrome.runtime.onInstalled.addListener(function(){
	//showAllVoices();


	ghostInstance = new Ghost();
	console.log(ghostInstance);

	greetRandom(ghostInstance);

	var recognition = new webkitSpeechRecognition();
	recognition.onresult = function(event) { 
		console.log(event);
	}
	recognition.start();
});



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


//https://gist.github.com/danharper/8364399 
