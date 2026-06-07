let score = 0;
let multiplier = 1;
let passive = 0;
let page = 0;
let prestige = 1;
let IconState = 1;
let scoreText = 'Score=' + score;
let multiplierText = 'Multiplier=' + multiplier;
let passiveText = 'Passive =' + passive;
let playing = 0;
let volume = 20;
let rectSprite;

await Canvas(400, 400)
let font1 = loadFont('assets/pixelFont.ttf');
let font2 = loadFont('assets/kiwiSoda.ttf')
let bar1 = loadImage('assets/bar1.png');
let bar2 = loadImage('assets/bar2.png');
let bar3 = loadImage('assets/bar3.png');
let bar4 = loadImage('assets/bar4.png');
let bar5 = loadImage('assets/bar5.png');
let bar6 = loadImage('assets/bar6.png');
let bar7 = loadImage('assets/bar7.png');
let bar8 = loadImage('assets/bar8.png');
let bar9 = loadImage('assets/bar9.png');
let coinIcon1 = loadImage('assets/coinIcon1.png');
let coinIcon2 = loadImage('assets/coinIcon2.png');
let downArrow1 = loadImage('assets/downArrow1.png');
let downArrow2 = loadImage('assets/downArrow2.png');
let egg1 = loadImage('assets/egg0.png');
let egg2 = loadImage('assets/egg1.png');
let egg3 = loadImage('assets/egg2.png');
let egg4 = loadImage('assets/egg3.png');
let exButton = loadImage('assets/exButton.png');
let exButtonClicked = loadImage('assets/exButtonClicked.png');
let infoMenuL = loadImage('assets/infoMenu.png');
let leftArrow1 = loadImage('assets/leftArrow1.png');
let leftArrow2 = loadImage('assets/leftArrow2.png');
let playButton = loadImage('assets/playButton.png');
let playButtonClicked = loadImage('assets/playButtonClicked.png');
let prestigeButtonL = loadImage('assets/prestigeButton.png');
let prestigeButtonClicked = loadImage('assets/prestigeButtonClicked.png');
let prestigeButton2 = loadImage('assets/prestigeButton2.png');
let prestigeButtonClicked2 = loadImage('assets/prestigeButtonClicked2.png');
let questionButton = loadImage('assets/questionButton.png');
let questionButtonClicked = loadImage('assets/questionButtonClicked.png');
let rightArrow1 = loadImage('assets/rightArrow1.png');
let rightArrow2 = loadImage('assets/rightArrow2.png');
let scoreMenuL = loadImage('assets/scoreMenu.png');
let settingsButtonL = loadImage('assets/settingsButton.png');
let settingsButtonClicked = loadImage('assets/settingsButtonClicked.png');
let settingsMenuL = loadImage('assets/settingsMenu.png');
let shopButtonL = loadImage('assets/shopButton.png');
let shopButtonClicked = loadImage('assets/shopButtonClicked.png');
let shopMenuL = loadImage('assets/shopMenu.png');
let slideDot = loadImage('assets/slideDot.png');
let squareButton = loadImage('assets/squareButton.png');
let squareButtonClicked = loadImage('assets/squareButtonClicked.png');
let toggleOff1 = loadImage('assets/toggleOff1.png');
let toggleOff2 = loadImage('assets/toggleOff2.png');
let toggleOn1 = loadImage('assets/toggleOn1.png');
let toggleOn2 = loadImage('assets/toggleOn2.png');
let toolIcon1 = loadImage('assets/toolIcon1.png');
let toolIcon2 = loadImage('assets/toolIcon2.png');
let upArrow1 = loadImage('assets/upArrow1.png');
let upArrow2 = loadImage('assets/upArrow2.png');
let waterIcon1 = loadImage('assets/waterIcon1.png');
let waterIcon2 = loadImage('assets/waterIcon2.png');

let audio1 = loadSound('assets/audio/SKINNY.mp3');
let audio2 = loadSound('assets/audio/LUNCH.mp3');
let audio3 = loadSound('assets/audio/CHIHIRO.mp3');
let audio4 = loadSound('assets/audio/BIRDSOFAFEATHER.mp3');
let audio5 = loadSound('assets/audio/WILDFLOWER.mp3');
let audio6 = loadSound('assets/audio/THEGREATEST.mp3');
let audio7 = loadSound("assets/audio/L'AMOURDEMAVIE.mp3");
let audio8 = loadSound('assets/audio/THEDINER.mp3');
let audio9 = loadSound('assets/audio/BITTERSUITE.mp3');
let audio10 = loadSound('assets/audio/BLUE.mp3');

let startButton = new Sprite(0, 0, 900, 200);
startButton.img = playButton;
startButton.scale = .3;
startButton.physics = 'static';
startButton.layer = 1;

let startText = new Sprite(0, 0, 200, 200);
startText.text = 'Ehi';
startText.scale = 1;
startText.textSize = 20;
// startText.color = '#8dbd3a';
startText.physics = 'static';
// startText.stroke = '#98cfa2';
// startText.textColor = '#206992';

let target = new Sprite(0, 0, 400, 225);
target.img = egg1;
target.scale = .1;
target.img.offset.y = -80;
target.physics = 'static';









target.layer = 2;

q5.update = function () {
	background("#89D5D2");
	text('click to increase score!', 0, -50);
	text('Score: ' + score, 0, -30);

	if (mouse.presses() && pointer.overlapping(target)) {
		score += 1;
	}
};


