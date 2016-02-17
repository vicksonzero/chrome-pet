chrome.tts.speak('Hello, Dickson.');
var bgGame = chrome.extension.getBackgroundPage().game;
console.log(bgGame);
bgGame.greetRandom(bgGame.ghostInstance);