const Logger = require("./js/lib/Logger");

module.exports = (function(){
	function Game(chrome){
		this.chrome = chrome;

		this.ghostInstance = null;
		this.ghostScriptFile = null;
		this.ghostScriptObject = null;
		this._logger = new Logger("Game");
	}


	var p = Game.prototype;

	p.speak = function speak (msg) {
		this._logger.info("speak: " + msg);
		this.chrome.tts.speak(msg, {'voiceName': 'Google UK English Male', pitch:1.2});
	};

	p.showAllVoices = function showAllVoices () {
		this.chrome.tts.getVoices(function(voices) {
			for (var i = 0; i < voices.length; i++) {
				console.log('Voice ' + i + ':');
				console.log('  name: ' + voices[i].voiceName);
				console.log('  lang: ' + voices[i].lang);
				console.log('  gender: ' + voices[i].gender);
				console.log('  extension id: ' + voices[i].extensionId);
				console.log('  event types: ' + voices[i].eventTypes);
			}
		});
	};


	p.getTime = function getTime() {
		var now = new Date();
		var time = ""
			+ zeroPad( now.getHours() ) + ":"
			+ zeroPad( now.getMinutes() );
		return time;
	};

	p.getDate = function getDate() {
		var now = new Date();
		var date = "" + now.getDate() + "/"
			+ (now.getMonth()+1)  + "/"
			+ now.getFullYear();
		return date;
	};


	p.saveGhost = function saveGhost(ghost) {
		var persistent = ghost.getPersistent();
		// Save it using the Chrome extension storage API.
		this.chrome.storage.sync.set({'ghostPersistent': persistent}, function() {
			// Notify that we saved.
			//console.log(chrome.runtime.lastError);
			console.log('Settings saved');

		});
	};

	p.loadGhost = function loadGhost(ghost, callback) {
		// Save it using the Chrome extension storage API.
		this.chrome.storage.sync.get('ghostPersistent', function(persistent) {
			// Notify that we saved.
			if(persistent.ghostPersistent && Object.keys(persistent.ghostPersistent).length>0){
				ghost.setPersistent(persistent.ghostPersistent);
				console.log("ghost memory loaded");
			}else{
				console.log("need persist");
				ghost.initPersistent();
			}
			callback();
		});
	};

	p.clearGhost = function clearGhost (callback) {
		this.chrome.storage.sync.remove('ghostPersistent',callback);
	};
	function zeroPad (num) {
		if(num>=10){
			return ""+num;
		}else{
			return "0"+num;
		}
	}

	return Game;
})();
