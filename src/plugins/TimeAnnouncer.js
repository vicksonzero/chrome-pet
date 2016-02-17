const Plugin = require("./Plugin");
//https://developer.chrome.com/apps/app_codelab_alarms

module.exports = (function () {

	function TimeAnnouncer (game) {
		// body...
		Plugin.constructor.call(this, game);
		this.name = "TimeAnnouncer";
	}

	// prototypical oop
	TimeAnnouncer.prototype = new Plugin();
	TimeAnnouncer.constructor = TimeAnnouncer;
	var p = TimeAnnouncer.prototype;


	p.create = function create () {
		chrome.alarms.create(this.name, {delayInMinutes: 0.1, periodInMinutes: 0.1});
	};

	p.update = function update () {
		//this.game
	};

	return TimeAnnouncer;
})();