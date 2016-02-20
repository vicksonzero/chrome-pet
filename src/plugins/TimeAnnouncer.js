const Plugin = require("./Plugin");
//https://developer.chrome.com/apps/app_codelab_alarms

module.exports = (function () {

	function TimeAnnouncer (game) {
		// body...
		Plugin.constructor.call(this, game);
		// override
		this.name = "TimeAnnouncer";

		// self
		this.alarm = null;
	}

	// prototypical oop
	TimeAnnouncer.prototype = new Plugin();
	TimeAnnouncer.constructor = TimeAnnouncer;
	var p = TimeAnnouncer.prototype;


	p.init = function init (ghost) {
		this.super.init.call(this, ghost);

		var nextAnouncementDate = new Date();
		//nextAnouncementDate.setMinutes(0, 0, 0);
		nextAnouncementDate.setHours(nextAnouncementDate.getHours()+1,0,0,0);

		// // debug
		// nextAnouncementDate = new Date();
		// nextAnouncementDate.setHours(20,44,0,0,0);

		this.alarm = this.game.chrome.alarms.create(this.name, {when: nextAnouncementDate.getTime(), periodInMinutes: 60});
		//this.alarm = this.game.chrome.alarms.create(this.name, {when: Date.now(), periodInMinutes: 2});


		this.game.chrome.alarms.onAlarm.addListener(this.onAlarm.bind(this));
	};

	p.onAlarm = function onAlarm(chromeAlarm) {
		var phrase = this.ghost.randomPhrase(this.ghost.scripts.plugin_timeAnnouncer_default, this.ghost.persistent.scripts.plugin_timeAnnouncer_default);

		// flesh out by filling in dynamic stuffs
		phrase = this.ghost.injectKeywords(phrase, game);

		// actually speak the phrase
		this.game.speak(phrase);
	};

	p.value = function value () {
		return this.alarm.scheduledTime - new Date();
	};
	

	return TimeAnnouncer;
})();
