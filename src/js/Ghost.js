module.exports = function(ghostScript){
	function Ghost(){
	}

	function validateGhostScript (ghostScript) {
		return true;
	}

	Ghost.prototype = ghostScript;
	var p = Ghost.prototype;

	return Ghost;
};
