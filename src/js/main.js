



chrome.runtime.getBackgroundPage(function(backgroundPage) {
	var bgGame = backgroundPage.game;
	window.bgGame = bgGame;
	console.log(bgGame);
	bgGame.ghostInstance.onPopup(bgGame);
});
