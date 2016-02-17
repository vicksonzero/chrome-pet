module.exports = function(ghostScript){
	function Ghost(){
	}

	function validateGhostScript (ghostScript) {
		return true;
	}

	Ghost.SEQUENCE = 0;
	Ghost.RANDOM = 0;

	Ghost.prototype = ghostScript;
	var p = Ghost.prototype;



	p.getPersistent = function getPersistent () {
		return this.persistent;
	};

	p.onInstalled = function onInstalled (game) {
		
	}

	p.randomPhrase = function randomPhrase (mode, phraseArray, phrasePersist) {
		
	}

	return Ghost;
};
