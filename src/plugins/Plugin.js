

module.exports = (function () {
	function Plugin (game) {
		// body...
		this.game = game;
		this.name = "Plugin";
		// listen to events
	}

	// prototypical oop
	Plugin.constructor = Plugin;
	var p = Plugin.prototype;

	p.create = function create () {
		//this.game
	};

	p.update = function update () {
		//this.game
	};

	return Plugin;
})();