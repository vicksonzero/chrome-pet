

module.exports = (function () {
	function Plugin (game) {
		// body...
		this.super = Plugin.prototype;
		this.game = game;
		this.ghost = null;
		this.name = "Plugin";
		// listen to events
	}

	// prototypical oop
	Plugin.constructor = Plugin;
	var p = Plugin.prototype;

	p.init = function init (ghost) {
		this.setGhost(ghost);
	};

	p.value = function value () {
		//this.game
	};

	p.setGhost = function setGhost(ghost) {
		this.ghost = ghost;
	};
	

	return Plugin;
})();
