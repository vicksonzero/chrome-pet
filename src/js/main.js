



bgGame = chrome.extension.getBackgroundPage().game;

window.bgGame = bgGame;
console.log(bgGame);
bgGame.ghostInstance.onPopup(bgGame);