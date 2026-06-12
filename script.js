let score = 0;
let adder = {
	multiplier: 1,
	passive: 0};
let page = 0;
let prestige = 1;
let IconState = 1;
let scoreText = 'Score = ' + score;
let multiplierText = 'Multiplier = ' + adder.multiplier;
let passiveText = 'Passive = ' + adder.passive;
let playing = 0;
let volume = 10;
let rectSprite;
let musicLabel = ['Music off', 'Music on', 'Music on', 'Music on', 'Music onn', 'Music on', 'Music on', 'Music on', 'Music on', 'Music on', 'Music on'];
let songs = ['off','skinny', 'lunch', 'chihiro', 'birds of a feather', 'wildflower', 'the greatest', "l'amor de ma vie", 'the diner', 'bittersuite', 'blue'];
let lastSong = playing;

await Canvas(400, 400)
background("#89D5D2");
textAlign(CENTER, CENTER);
text("Loading...", 0, 0);
let font1 = await loadFont('assets/pixelFont.ttf');
let font2 = await loadFont('assets/kiwiSoda.ttf')
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

let audio1 = await loadSound('assets/audio/SKINNY.mp3');
let audio2 = await loadSound('assets/audio/LUNCH.mp3');
let audio3 = await loadSound('assets/audio/CHIHIRO.mp3');
let audio4 = await loadSound('assets/audio/BIRDSOFAFEATHER.mp3');
let audio5 = await loadSound('assets/audio/WILDFLOWER.mp3');
let audio6 = await loadSound('assets/audio/THEGREATEST.mp3');
let audio7 = await loadSound("assets/audio/L'AMOURDEMAVIE.mp3");
let audio8 = await loadSound('assets/audio/THEDINER.mp3');
let audio9 = await loadSound('assets/audio/BITTERSUITE.mp3');
let audio10 = await loadSound('assets/audio/BLUE.mp3');
let bars = [bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8, bar9];
let audios = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10]
let startButton = new Sprite(0, 70, 350, 100);
startButton.image = playButton;
startButton.scale = .6;
startButton.layer = 1;

let titleText = new Sprite(0, -80, 260, 100);
let titleGraphics = createGraphics(280, 200);
titleGraphics.textSize(80);
titleGraphics.fill('#658ca1');
titleGraphics.stroke('#658ca1');
titleGraphics.textAlign(CENTER, CENTER);
titleGraphics.textFont(font2);
titleGraphics.text("eggooo!", 142, 100);
titleText.image = titleGraphics;

let target = new Sprite(0, -350, 400, 225);
target.image = egg1;
target.scale = .3;
target.image.offset.y = -80;
target.layer = 2;

// settings menu
let settingsMenu = new Sprite(-400, -20, 430, 490);
settingsMenu.image = settingsMenuL;
settingsMenu.scale = .625;

// music
let music = new Sprite(-495, -75, 230, 150);
music.image = toggleOff1;
music.scale = 0.175;

let leftArrow = new Sprite(-506, -40, 300, 375);
leftArrow.image = leftArrow1;
leftArrow.scale = 0.06;

let rightArrow = new Sprite(-484, -40, 300, 375);
rightArrow.image = rightArrow1;
rightArrow.scale = 0.06;

let musicText = new Sprite(-410, -75, 100, 20);
let musicGraphics = createGraphics(100, 20);
musicGraphics.textSize(20);
musicGraphics.fill('#90625d');
musicGraphics.stroke('#dcb98a');
musicGraphics.strokeWeight(1);
musicGraphics.textAlign(LEFT, CENTER);
musicGraphics.textFont(font1);
musicGraphics.text(musicLabel[playing], 0, 10);
musicText.image = musicGraphics;

let songText = new Sprite(-370, -40, 180, 20);
let songGraphics = createGraphics(180, 50);
songGraphics.textSize(20);
songGraphics.fill('#90625d');
songGraphics.stroke('#dcb98a');
songGraphics.strokeWeight(1);
songGraphics.textAlign(LEFT, CENTER);
songGraphics.textFont(font1);
songGraphics.text(songs[playing], 0, 25);
songText.image = songGraphics;

let volumeBar = new Sprite(-400, 0, 360, 30); //(200,280,140,13)
volumeBar.image = bar5;
volumeBar.scale = .5;

let volumeDot = new Sprite(-400, 0, 50, 60);
volumeDot.image = slideDot;
volumeDot.scale = .5;

let infoButton = new Sprite(-160, 160, 400, 400);
infoButton.image = exButton;
infoButton.scale = 0.1;

let infoMenu = new Sprite(0, 400, 430, 490);
infoMenu.image = infoMenuL;
infoMenu.scale = .625;

let infoText = new Sprite(0, 285, 60, 30);
let infoGraphics = createGraphics(300, 200);
infoGraphics.textSize(35);
infoGraphics.fill('#90625d');
infoGraphics.stroke('#dcb98a');
infoGraphics.strokeWeight(2);
infoGraphics.textAlign(CENTER, CENTER);
infoGraphics.textFont(font2);
infoGraphics.text("Info", 150, 100);
infoText.image = infoGraphics;

let infoMenuText = new Sprite(0, 490, 200, 150);
let infoMenuGraphics = createGraphics(300, 400);
infoMenuGraphics.textSize(13);
infoMenuGraphics.fill('#90625d');
infoMenuGraphics.stroke('#dcb98a');
infoMenuGraphics.strokeWeight(1);
infoMenuGraphics.textAlign(CENTER, TOP);
infoMenuGraphics.textFont(font1);
infoMenuGraphics.text('Click the next to\n earn points. Once you earn\nenough coins,you can buy \npower ups in the shop.\nOnce you earn enough, you\ncan prestige and reset to\nearn a bonus and your nest\nwill evolve! CPC stands for\ncoins per click and CPS stands\nfor coins per second.\n\nGraphics by Cup Nooble\nMusic by Billie Eilish\nMade by Matilda Fletcher', 150, 20);
infoMenuText.image = infoMenuGraphics;

let scoreMenu = new Sprite(-90, -540, 480, 260);
scoreMenu.image = scoreMenuL;
scoreMenu.scale = .4;

let scoreboardText = new Sprite(-90, -540, 192, 104);
let scoreboardGraphics = createGraphics(192,104);
scoreboardGraphics.textSize(15);
scoreboardGraphics.fill('#90625d');
scoreboardGraphics.strokeWeight(1);
scoreboardGraphics.textAlign(LEFT, CENTER);
scoreboardGraphics.textFont(font1);
scoreboardGraphics.text(scoreText + '\n\n' + multiplierText + '\n\n' + passiveText, 35, 52);
scoreboardText.image = scoreboardGraphics;

// // coin icon
let coinIcon = new Sprite(-170, -577, 300, 450);
coinIcon.image = coinIcon1;
coinIcon.scale = 0.06;

// tool icon
let toolIcon = new Sprite(-170, -540, 300, 450);
toolIcon.image = toolIcon1;
toolIcon.scale = 0.05;

// water icon
let waterIcon = new Sprite(-170, -507, 300, 450);
waterIcon.image = waterIcon1;
waterIcon.scale = 0.06;

// shop button
let shopButton = new Sprite(160, -260, 400, 400);
shopButton.image = shopButtonL;
shopButton.scale = 0.1;

// settings button
let settingsButton = new Sprite(-160, -260, 400, 400);
settingsButton.image = settingsButtonL;
settingsButton.scale = 0.1;

// shop menu
let shopMenu = new Sprite(290, 0, 210, 430);
shopMenu.image = shopMenuL;
shopMenu.scale = .849;

let shopText = new Sprite(290,-150,150,40);
let shopGraphics = createGraphics(150,40);
shopGraphics.textSize(40);
shopGraphics.strokeWeight(0);
shopGraphics.textAlign(CENTER, CENTER);
shopGraphics.textFont(font1);
shopGraphics.fill('#a97959');
shopGraphics.text('shop', 78,23);
shopGraphics.fill('#f5e3c1');
shopGraphics.strokeWeight(3);
shopGraphics.stroke('#b68962')
shopGraphics.text('shop', 75,20);

shopText.image = shopGraphics;


// prestige button
let prestigeButton = new Sprite(290, 150, 360, 100);
prestigeButton.image = prestigeButtonL;
prestigeButton.scale = .4;

// shop menu buttons
let shopMenuButton1 = new Sprite(230, -105, 400, 400);
shopMenuButton1.image = squareButton;
shopMenuButton1.scale = .075;

let shopMenuText1 = new Sprite(310, -105, 100, 15);
let shopMenuGraphic1 = createGraphics(100, 15);
shopMenuGraphic1.textSize(14);
shopMenuGraphic1.fill('#90625d');
shopMenuGraphic1.stroke('#dcb98a');
shopMenuGraphic1.strokeWeight(1);
shopMenuGraphic1.textAlign(LEFT, CENTER);
shopMenuGraphic1.textFont(font1);
shopMenuGraphic1.text('1 CPC', 0, 7.5);
shopMenuText1.image = shopMenuGraphic1;

let shopMenuButtonText1 = new Sprite(230, -105, 30, 30);
let shopMenuButtonGraphic1 = createGraphics(18, 16);
shopMenuButtonGraphic1.textSize(16);
shopMenuButtonGraphic1.fill('#e7cfa5'); //#b68962
shopMenuButtonGraphic1.stroke('#a97959');
shopMenuButtonGraphic1.strokeWeight(2);
shopMenuButtonGraphic1.textAlign(CENTER, CENTER);
shopMenuButtonGraphic1.textFont(font1);
shopMenuButtonGraphic1.text('50', 9.5, 7.5);
shopMenuButtonText1.image = shopMenuButtonGraphic1;

let shopMenuButton2 = new Sprite(230, -65, 400, 400);
shopMenuButton2.image = squareButton;
shopMenuButton2.scale = .075;

let shopMenuText2 = new Sprite(310, -65, 100, 15);
let shopMenuGraphic2 = createGraphics(100, 15);
shopMenuGraphic2.textSize(14);
shopMenuGraphic2.fill('#90625d');
shopMenuGraphic2.stroke('#dcb98a');
shopMenuGraphic2.strokeWeight(1);
shopMenuGraphic2.textAlign(LEFT, CENTER);
shopMenuGraphic2.textFont(font1);
shopMenuGraphic2.text('5 CPS', 0, 7.5);
shopMenuText2.image = shopMenuGraphic2;

let shopMenuButtonText2 = new Sprite(230, -65, 30, 30);
let shopMenuButtonGraphic2 = createGraphics(18, 16);
shopMenuButtonGraphic2.textSize(8);
shopMenuButtonGraphic2.fill('#e7cfa5'); //#b68962
shopMenuButtonGraphic2.stroke('#a97959');
shopMenuButtonGraphic2.strokeWeight(2);
shopMenuButtonGraphic2.textAlign(CENTER, CENTER);
shopMenuButtonGraphic2.textFont(font1);
shopMenuButtonGraphic2.text('1000', 9.5, 7.5);
shopMenuButtonText2.image = shopMenuButtonGraphic2;


let shopMenuButton3 = new Sprite(230, -25, 400, 400);
shopMenuButton3.image = squareButton;
shopMenuButton3.scale = .075;


let shopMenuText3 = new Sprite(310, -25, 100, 15);
let shopMenuGraphic3 = createGraphics(100, 15);
shopMenuGraphic3.textSize(14);
shopMenuGraphic3.fill('#90625d');
shopMenuGraphic3.stroke('#dcb98a');
shopMenuGraphic3.strokeWeight(1);
shopMenuGraphic3.textAlign(LEFT, CENTER);
shopMenuGraphic3.textFont(font1);
shopMenuGraphic3.text('300 CPC', 0, 7.5);
shopMenuText3.image = shopMenuGraphic3;


let shopMenuButtonText3 = new Sprite(230, -25, 30, 30);
let shopMenuButtonGraphic3 = createGraphics(18, 16);
shopMenuButtonGraphic3.textSize(6);
shopMenuButtonGraphic3.fill('#e7cfa5'); //#b68962
shopMenuButtonGraphic3.stroke('#a97959');
shopMenuButtonGraphic3.strokeWeight(2);
shopMenuButtonGraphic3.textAlign(CENTER, CENTER);
shopMenuButtonGraphic3.textFont(font1);
shopMenuButtonGraphic3.text('25000', 9.5, 7.5);
shopMenuButtonText3.image = shopMenuButtonGraphic3;

let shopMenuButton4 = new Sprite(230, 15, 400, 400);
shopMenuButton4.image = squareButton;
shopMenuButton4.scale = .075;


let shopMenuText4 = new Sprite(310, 15, 100, 15);
let shopMenuGraphic4 = createGraphics(100, 15);
shopMenuGraphic4.textSize(14);
shopMenuGraphic4.fill('#90625d');
shopMenuGraphic4.stroke('#dcb98a');
shopMenuGraphic4.strokeWeight(1);
shopMenuGraphic4.textAlign(LEFT, CENTER);
shopMenuGraphic4.textFont(font1);
shopMenuGraphic4.text('30,000 CPS', 0, 7.5);
shopMenuText4.image = shopMenuGraphic4;


let shopMenuButtonText4 = new Sprite(230, 15, 30, 30);
let shopMenuButtonGraphic4 = createGraphics(18, 16);
shopMenuButtonGraphic4.textSize(16);
shopMenuButtonGraphic4.fill('#e7cfa5'); //#b68962
shopMenuButtonGraphic4.stroke('#a97959');
shopMenuButtonGraphic4.strokeWeight(2);
shopMenuButtonGraphic4.textAlign(CENTER, CENTER);
shopMenuButtonGraphic4.textFont(font1);
shopMenuButtonGraphic4.text('5a', 9.5, 7.5);
shopMenuButtonText4.image = shopMenuButtonGraphic4;

let shopMenuButton5 = new Sprite(230, 55, 400, 400);
shopMenuButton5.image = squareButton;
shopMenuButton5.scale = .075;


let shopMenuText5 = new Sprite(310, 55, 100, 15);
let shopMenuGraphic5 = createGraphics(100, 15);
shopMenuGraphic5.textSize(14);
shopMenuGraphic5.fill('#90625d');
shopMenuGraphic5.stroke('#dcb98a');
shopMenuGraphic5.strokeWeight(1);
shopMenuGraphic5.textAlign(LEFT, CENTER);
shopMenuGraphic5.textFont(font1);
shopMenuGraphic5.text('3a CPC', 0, 7.5);
shopMenuText5.image = shopMenuGraphic5;


let shopMenuButtonText5 = new Sprite(230, 55, 30, 30);
let shopMenuButtonGraphic5 = createGraphics(18, 16);
shopMenuButtonGraphic5.textSize(8);
shopMenuButtonGraphic5.fill('#e7cfa5'); //#b68962
shopMenuButtonGraphic5.stroke('#a97959');
shopMenuButtonGraphic5.strokeWeight(2);
shopMenuButtonGraphic5.textAlign(CENTER, CENTER);
shopMenuButtonGraphic5.textFont(font1);
shopMenuButtonGraphic5.text('250a', 9.5, 7.5);
shopMenuButtonText5.image = shopMenuButtonGraphic5;

let shopMenuButton6 = new Sprite(230, 95, 400, 400);
shopMenuButton6.image = squareButton;
shopMenuButton6.scale = .076;


let shopMenuText6 = new Sprite(310, 95, 100, 15);
let shopMenuGraphic6 = createGraphics(100, 15);
shopMenuGraphic6.textSize(14);
shopMenuGraphic6.fill('#90625d');
shopMenuGraphic6.stroke('#dcb98a');
shopMenuGraphic6.strokeWeight(1);
shopMenuGraphic6.textAlign(LEFT, CENTER);
shopMenuGraphic6.textFont(font1);
shopMenuGraphic6.text('500a CPS', 0, 7.5);
shopMenuText6.image = shopMenuGraphic6;


let shopMenuButtonText6 = new Sprite(230, 95, 30, 30);
let shopMenuButtonGraphic6 = createGraphics(18, 16);
shopMenuButtonGraphic6.textSize(8);
shopMenuButtonGraphic6.fill('#e7cfa5'); //#b68962
shopMenuButtonGraphic6.stroke('#a97959');
shopMenuButtonGraphic6.strokeWeight(2);
shopMenuButtonGraphic6.textAlign(CENTER, CENTER);
shopMenuButtonGraphic6.textFont(font1);
shopMenuButtonGraphic6.text('100b', 9.5, 7.5);
shopMenuButtonText6.image = shopMenuButtonGraphic6;

let shopStuff = [
[shopMenuButton1, shopMenuText1, shopMenuButtonText1, 'multiplier', 1, 50],
[shopMenuButton2, shopMenuText2, shopMenuButtonText2, 'passive', 5, 1000],
[shopMenuButton3, shopMenuText3, shopMenuButtonText3, 'multiplier', 300, 25000],
[shopMenuButton4, shopMenuText4, shopMenuButtonText4, 'passive', 30000, 5000000],
[shopMenuButton5, shopMenuText5, shopMenuButtonText5, 'multiplier', 3000000, 250000000],
[shopMenuButton6, shopMenuText6, shopMenuButtonText6, 'passive', 500000000, 100000000000]];

allSprites.passes(allSprites);
//allSprites.debug = true;

q5.update = function () {
 	background("#89D5D2");
	titleText.image = titleGraphics;
	infoMenuText.image = infoMenuGraphics;
	infoText.image = infoGraphics;
	audios[playing].setVolume(volume/200);
	toolIcon.image.offset.y = -30;
	toolIcon.image.offset.x = 55;
	coinIcon.image.offset.x = 15;

	coinIcon.image =
    floor(millis() / 700) % 2
        ? coinIcon2
        : coinIcon1;
	toolIcon.image =
    floor(millis() / 700) % 2
        ? toolIcon2
        : toolIcon1;
	waterIcon.image =
    floor(millis() / 700) % 2
        ? waterIcon2
        : waterIcon1;
	target.scale.y =
    floor(millis() / 450) % 2
        ? .31
        : .29;
	if (playing == 0) {
		music.image = toggleOff1;
	} else {
		music.image = toggleOn1;
	}

	if (page == 0) {
		if 	(mouse.pressed() && pointer.overlapping(startButton)) {
			startButton.image.offset.y = 10;
			startButton.image = playButtonClicked;
			setTimeout(() => {startButton.image = playButton; startButton.image.offset.y = 0;}, 100);
			page = 1;
			showMain(false);
			startAudio();
		}
		if (pointer.overlapping(startButton)) {
			startButton.image = playButtonClicked;
			startButton.image.offset.y = 10;
			setTimeout(() => {startButton.image = playButton; startButton.image.offset.y = 0;}, 100);
		} else {
			startButton.image = playButton;
			startButton.image.offset.y = 0;
		}

		if 	(mouse.pressed() && pointer.overlapping(infoButton)) {
			infoButton.image.offset.y = -5;
			infoButton.image = exButtonClicked;
			setTimeout(() => { infoButton.image = exButton; page = 2; infoButton.image.offset.y = 0;}, 100);
		}
		if (pointer.overlapping(infoButton)) {
			infoButton.image = exButtonClicked;
			infoButton.image.offset.y = -5;
		} else {
			infoButton.image = exButton;
			infoButton.image.offset.y = 0;
		}
  	} else if (page == 1) {
		if 	(mouse.pressed() && pointer.overlapping(settingsButton)) {
			settingsButton.image.offset.y = -5;
			settingsButton.image = settingsButtonClicked;
			setTimeout(() => { settingsButton.image = settingsButtonL; settingsButton.image.offset.y = 0;}, 100);
			page = 3;
			showSettings();
			hideMain();
		}
		if (pointer.overlapping(settingsButton)) {
			settingsButton.image = settingsButtonClicked;
			settingsButton.image.offset.y = -5;
		} else {
			settingsButton.image = settingsButtonL;
			settingsButton.image.offset.y = 0;
		}

		if 	(mouse.pressed() && pointer.overlapping(shopButton)) {
			shopButton.image.offset.y = -5;
			shopButton.image = shopButtonClicked;
			setTimeout(() => { shopButton.image = shopButtonL; shopButton.image.offset.y = 0;}, 100);
			page = 4;
			showShop();
		}
		if (pointer.overlapping(shopButton)) {
			shopButton.image = shopButtonClicked;
			shopButton.image.offset.y = -5;
		} else {
			shopButton.image = shopButtonL;
			shopButton.image.offset.y = 0;
		}

		if 	(mouse.pressed() && pointer.overlapping(target)) {
			target.scale = .27;
			setTimeout(() => { target.scale = .3;}, 25);
			score += adder.multiplier;
			scoreboard();
			}
  	} else if (page == 2) {
		showInfo();
		if 	(mouse.pressed()) {
			page = 0;
			hideInfo();
		} else if (pointer.overlapping(infoButton)) {
			infoButton.image = exButtonClicked;
			infoButton.y = 165;
		} else {
			infoButton.image = exButton;
			infoButton.y = 160;
		}
	} else if (page == 3) {
		settingsButton.image = leftArrow1;
		if 	(mouse.pressed() && pointer.overlapping(settingsButton)) {
			settingsButton.image.offset.y = 10;
			settingsButton.image = leftArrow2;
			setTimeout(() => { settingsButton.image = leftArrow1; settingsButton.image.offset.y = 0;}, 100);
			page = 1;
			hideSettings();
			showMain();
		}
		if (pointer.overlapping(settingsButton)) {
			settingsButton.image = leftArrow2;
			settingsButton.image.offset.y = 10;
		} else {
			settingsButton.image = leftArrow1;
			settingsButton.image.offset.y = 0;
		}
		
		if 	(mouse.pressed() && pointer.overlapping(music)) {
			if (playing != 0) {
				stopAllAudio();
			} else {
				startAudio();
			}
		}

		if 	(mouse.pressing() && (pointer.overlapping(volumeBar) || pointer.overlapping(volumeDot))) {
			volume = mouse.x+101.25;
			volumeBar.image = bars[floor(volume/22.5)];
			if (abs(mouse.x)<90) {volumeDot.x = mouse.x;}
			console.log(volume,audios[playing].volume);
		}

		if 	(mouse.pressed() && pointer.overlapping(leftArrow)) {
			leftArrow.image.offset.y = 5;
			leftArrow.image = leftArrow2;
			setTimeout(() => {leftArrow.image = leftArrow1; leftArrow.image.offset.y = 0;}, 100);
			if (playing!=1) {playing -= 1;} else {playing = 10;}
			startAudio();
		}
		if (pointer.overlapping(leftArrow)) {
			leftArrow.image.offset.y = 5;
			leftArrow.image = leftArrow2;
		} else {
			leftArrow.image.offset.y = 0;
			leftArrow.image = leftArrow1;
		}
		if 	(mouse.pressed() && pointer.overlapping(rightArrow)) {
			rightArrow.image.offset.y = 5;
			rightArrow.image = rightArrow2;
			setTimeout(() => {rightArrow.image = rightArrow1; rightArrow.image.offset.y = 0;}, 100);
			if (playing!=10) {playing += 1;} else {playing = 1}
			startAudio();
		}

		if (pointer.overlapping(rightArrow)) {
			rightArrow.image.offset.y = 5;
			rightArrow.image = rightArrow2;
		} else {
			rightArrow.image.offset.y = 0;
			rightArrow.image = rightArrow1;
		}

		if 	(mouse.pressed() && pointer.overlapping(infoButton)) {
			infoButton.image.offset.y = -5;
			infoButton.image = exButtonClicked;
			page = 3.5;
			showInfo(20);
		}
		if (pointer.overlapping(infoButton)) {
			infoButton.image = exButtonClicked;
			infoButton.image.offset.y = -5;
		} else {
			infoButton.image = exButton;
			infoButton.image.offset.y = 0;
		}
	} else if (page == 3.5){
		if 	(mouse.pressed()) {
			page = 3;
			hideInfo();
		} else if (pointer.overlapping(infoButton)) {
			infoButton.image = exButtonClicked;
			infoButton.image.offset.y = -5;
		} else {
			infoButton.image = exButton;
			infoButton.image.offset.y = 0;
		}
	} else if (page == 3.6){
		settingsButton.image = leftArrow1;
		if 	(mouse.pressed() && pointer.overlapping(settingsButton)) {
			settingsButton.image.offset.y = 10;
			settingsButton.image = leftArrow2;
			setTimeout(() => { settingsButton.image = leftArrow1; settingsButton.image.offset.y = 0;}, 100);
			page = 4;
			hideSettings();
			showMain();
			setTimeout(() => {showShop();}, 800);
		}
		if (pointer.overlapping(settingsButton)) {
			settingsButton.image = leftArrow2;
			settingsButton.image.offset.y = 10;
		} else {
			settingsButton.image = leftArrow1;
			settingsButton.image.offset.y = 0;
		}
		
		if 	(mouse.pressed() && pointer.overlapping(music)) {
			if (playing != 0) {
				stopAllAudio();
			} else {
				startAudio();
			}
		}

		if 	(mouse.pressing() && (pointer.overlapping(volumeBar) || pointer.overlapping(volumeDot))) {
			volume = mouse.x+101.25;
			volumeBar.image = bars[floor(volume/22.5)];
			if (abs(mouse.x)<90) {volumeDot.x = mouse.x;}
			console.log(volume,audios[playing].volume);
		}

		if 	(mouse.pressed() && pointer.overlapping(leftArrow)) {
			leftArrow.image.offset.y = 5;
			leftArrow.image = leftArrow2;
			setTimeout(() => {leftArrow.image = leftArrow1; leftArrow.image.offset.y = 0;}, 100);
			if (playing!=1) {playing -= 1;} else {playing = 10;}
			startAudio();
		}
		if (pointer.overlapping(leftArrow)) {
			leftArrow.image.offset.y = 5;
			leftArrow.image = leftArrow2;
		} else {
			leftArrow.image.offset.y = 0;
			leftArrow.image = leftArrow1;
		}
		if 	(mouse.pressed() && pointer.overlapping(rightArrow)) {
			rightArrow.image.offset.y = 5;
			rightArrow.image = rightArrow2;
			setTimeout(() => {rightArrow.image = rightArrow1; rightArrow.image.offset.y = 0;}, 100);
			if (playing!=10) {playing += 1;} else {playing = 1}
			startAudio();
		}

		if (pointer.overlapping(rightArrow)) {
			rightArrow.image.offset.y = 5;
			rightArrow.image = rightArrow2;
		} else {
			rightArrow.image.offset.y = 0;
			rightArrow.image = rightArrow1;
		}

		if 	(mouse.pressed() && pointer.overlapping(infoButton)) {
			infoButton.image.offset.y = -5;
			infoButton.image = exButtonClicked;
			page = 3.7;
			showInfo(20);
		}
		if (pointer.overlapping(infoButton)) {
			infoButton.image = exButtonClicked;
			infoButton.image.offset.y = -5;
		} else {
			infoButton.image = exButton;
			infoButton.image.offset.y = 0;
		}
	} else if (page == 3.7){
		if 	(mouse.pressed()) {
			page = 3.6;
			hideInfo();
		} else if (pointer.overlapping(infoButton)) {
			infoButton.image = exButtonClicked;
			infoButton.image.offset.y = -5;
		} else {
			infoButton.image = exButton;
			infoButton.image.offset.y = 0;
		}
  	} else if (page == 4) {
		if 	(mouse.pressed() && pointer.overlapping(shopButton)) {
			shopButton.image.offset.y = -5;
			shopButton.image = shopButtonClicked;
			setTimeout(() => { shopButton.image = shopButtonL; shopButton.image.offset.y = 0;}, 100);
			page = 1;
			hideShop();
		} else if (pointer.overlapping(shopButton)) {
			shopButton.image = shopButtonClicked;
			shopButton.image.offset.y = -5;
		} else {
			shopButton.image = shopButtonL;
			shopButton.image.offset.y = 0;
		}

		if 	(mouse.pressed() && pointer.overlapping(settingsButton)) {
			settingsButton.image.offset.y = -5;
			settingsButton.image = settingsButtonClicked;
			setTimeout(() => { settingsButton.image = settingsButtonL; settingsButton.image.offset.y = 0;}, 100);
			page = 3.6;
			hideShop();
			hideMain();
			showSettings();
		}
		if (pointer.overlapping(settingsButton)) {
			settingsButton.image = settingsButtonClicked;
			settingsButton.image.offset.y = -5;
		} else {
			settingsButton.image = settingsButtonL;
			settingsButton.image.offset.y = 0;
		}

		if 	(mouse.pressed() && pointer.overlapping(target)) {
			target.scale = .27;
			setTimeout(() => { target.scale = .3;}, 25);
			score += adder.multiplier;
			scoreboard();
		}
		// if (pointer.overlapping(shopStuff[0])) {
		// 		//shopStuff[i].image.offset.y = -5;
		// 		shopStuff[0].image = squareButtonClicked;
		// 		//if (mouse.pressed()){
		// 		// setTimeout(() => { shopStuff[i].image = squareButton; shopStuff[i].image.offset.y = 0;}, 100);
		// 		//}
		// }

		if (pointer.overlapping(shopMenuButtonText1)) {
				shopMenuButton1.image.offset.y = -5;
				shopMenuButton1.image = squareButtonClicked;
				//if (mouse.pressed()){
				// setTimeout(() => { shopStuff[i].image = squareButton; shopStuff[i].image.offset.y = 0;}, 100);
				//}
		}

		for (let i = 0; i < shopStuff.length; i++){
			if (pointer.overlapping(shopStuff[i][2])) {
				shopStuff[i][0].image.offset.y = -5;
				shopStuff[i][0].image = squareButtonClicked;
				if (mouse.pressed()){
				setTimeout(() => { shopStuff[i][0].image = squareButton; shopStuff[i][0].image.offset.y = 0;}, 100);
					if (score>=shopStuff[i][5]) {
						score -=shopStuff[i][5];
						adder[shopStuff[i][3]] += shopStuff[i][4];
						scoreboard();
					}
				}
			} else {
			shopStuff[i][0].image = squareButton;
			shopStuff[i][0].image.offset.y = 0;
			//console.log(stuff);}
			}
		}
	}
};
//page 0 - start
//page 1 - main
//page 2 - info 
//page 3 - settings
//page 4 - shop 1/2
//page 5 - prestige 1/2

function showMain(bleh = true) {
	startButton.moveTo(0,470,10);
	target.moveTo(0,50,10);
	titleText.moveTo(160,-180,4.717);
	titleText.scale = 1/5;
	settingsButton.moveTo(-160, 160, 10);
	shopButton.moveTo(160, 160, 10);
	scoreMenu.moveTo(-90, -140, 10);
	coinIcon.moveTo(-170, -177, 10);
	toolIcon.moveTo(-170, -140, 10);
	waterIcon.moveTo(-170, -107, 10);
	scoreboardText.moveTo(-90, -140, 10);
	if (bleh) {
		infoButton.moveTo(-500,100,10);
	} else {
		infoButton.x = -500;
		infoButton.y = 100;}
}
function hideMain() {
	shopButton.moveTo(560, 160, 10);
	scoreMenu.moveTo(-90, -540, 10);
	scoreboardText.moveTo(-90, -540, 10);
	target.moveTo(0, 450, 10);
	coinIcon.moveTo(-170, -577, 10);
	toolIcon.moveTo(-170, -540, 10);
	waterIcon.moveTo(-170, -507, 10);
}
function hideInfo() {
  	infoMenu.moveTo(0, 400, 10);
	infoText.moveTo(0, 285, 10);
  	infoMenuText.moveTo(0, 490, 10);
}
function showInfo(bleh = 0) {
  	infoMenu.moveTo(0, 0-bleh, 10);
	infoText.moveTo(0, -115-bleh, 10);
  	infoMenuText.moveTo(0, 90-bleh, 10);
}
function hideSettings() {
	settingsMenu.moveTo(-400, -20, 10);
	music.moveTo(-495, -75, 10);
	leftArrow.moveTo(-506, -40, 10);
	rightArrow.moveTo(-486, -40, 10);
	musicText.moveTo(-410, -75, 10);
	songText.moveTo(-370, -40, 10);
	volumeBar.moveTo(-400, 0, 10);
	volumeDot.moveTo(-400, 0, 10);
	infoButton.moveTo(-500,100,10);
}
function showSettings() {
	settingsMenu.moveTo(0, -20, 10);
	music.moveTo(-95, -75, 10);
	leftArrow.moveTo(-106, -40, 10);
	rightArrow.moveTo(-86, -40, 10);
	musicText.moveTo(-10, -75, 10);
	songText.moveTo(30, -40, 10);
	volumeBar.moveTo(0, 0, 10);
	volumeDot.moveTo(0, 0, 10);
	infoButton.moveTo(-100,100,10);
}
function updateGraphics(sprite, text, size, width, length, color, outline, alignx = CENTER, aligny = CENTER, font = font1, x = 0, y = 0, weight = 1) {
    let g = createGraphics(width, length);
    g.textSize(size);
    g.fill(color);
    g.stroke(outline);
    g.strokeWeight(weight);
    g.textAlign(alignx, aligny);
    g.textFont(font);
    g.text(text, x, y);
    sprite.image = g;
}
function updateMusicLabels(){
	updateGraphics(songText, songs[playing], 20, 180, 50, '#90625d', '#dcb98a', LEFT, CENTER, font1, 0, 25, 1);
	updateGraphics(musicText, musicLabel[playing], 20, 100, 20, '#90625d', '#dcb98a', LEFT, CENTER, font1, 0, 10, 1);
	}

function scoreboard(){
	scoreText = 'Score = ' + score;
	multiplierText = 'Multiplier = ' + adder.multiplier;
	passiveText = 'Passive = ' + adder.passive;
	let g = createGraphics(192,104);
	g.textSize(15);
	g.fill('#90625d');
	g.stroke('#dcb98a');
	g.strokeWeight(1);
	g.textAlign(LEFT, CENTER);
	g.textFont(font1);
	g.text(scoreText + '\n\n' + multiplierText + '\n\n' + passiveText, 35, 52);
	scoreboardText.image = g;
}

function stopAllAudio() {
    for (let song of audios) {
        song.stop();
    }
	playing = 0;
	updateMusicLabels();
}
function startAudio(){
	console.log(playing);
	for (let song of audios) {
        song.stop();}
	if (playing != 0) {
		audios[playing].play();
	} else {
		audio1.play();
		playing = 1;}
	updateMusicLabels();
}
function setFavicon(path) {
    document.getElementById('favicon').href = path;
}

function showShop() {
	prestigeButton.moveTo(90, 150, 10);
	shopMenuButton1.moveTo(30, -105, 10);
	shopMenuText1.moveTo(110, -105, 10);
	shopMenuButtonText1.moveTo(30, -105, 10);
	shopMenuButton2.moveTo(30, -65, 10);
	shopMenuText2.moveTo(110, -65, 10);
	shopMenuButtonText2.moveTo(30, -65, 10);
	shopMenuButton3.moveTo(30, -25, 10);
	shopMenuText3.moveTo(110, -25, 10);
	shopMenuButtonText3.moveTo(30, -25, 10);
	shopMenuButton4.moveTo(30, 15, 10);
	shopMenuText4.moveTo(110, 15, 10);
	shopMenuButtonText4.moveTo(30, 15, 10);
	shopMenuButton5.moveTo(30, 55, 10);
	shopMenuText5.moveTo(110, 55, 10);
	shopMenuButtonText5.moveTo(30, 55, 10);
	shopMenuButton6.moveTo(30, 95, 10);
	shopMenuText6.moveTo(110, 95, 10);
	shopMenuButtonText6.moveTo(30, 95, 10);
	shopMenu.moveTo(90, 0, 10);
	shopText.moveTo(90,-150, 10);
	shopButton.moveTo(-40, 160, 10);
	scoreMenu.moveTo(-100, -140, .5);
	coinIcon.moveTo(-180, -177, .5);
	toolIcon.moveTo(-180, -140, .5);
	waterIcon.moveTo(-180, -107, .5);
	scoreboardText.moveTo(-100, -140, .5);
	target.moveTo(-100,50,5);
	titleText.moveTo(-170,-75,17.315);
}

function hideShop() {
	prestigeButton.moveTo(290, 150, 10);
	shopMenuButton1.moveTo(230, -105, 10);
	shopMenuText1.moveTo(310, -105, 10);
	shopMenuButtonText1.moveTo(230, -105, 10);
	shopMenuButton2.moveTo(230, -65, 10);
	shopMenuText2.moveTo(310, -65, 10);
	shopMenuButtonText2.moveTo(230, -65, 10);
	shopMenuButton3.moveTo(230, -25, 10);
	shopMenuText3.moveTo(310, -25, 10);
	shopMenuButtonText3.moveTo(230, -25, 10);
	shopMenuButton4.moveTo(230, 15, 10);
	shopMenuText4.moveTo(310, 15, 10);
	shopMenuButtonText4.moveTo(230, 15, 10);
	shopMenuButton5.moveTo(230, 55, 10);
	shopMenuText5.moveTo(310, 55, 10);
	shopMenuButtonText5.moveTo(230, 55, 10);
	shopMenuButton6.moveTo(230, 95, 10);
	shopMenuText6.moveTo(310, 95, 10);
	shopMenuButtonText6.moveTo(230, 95, 10);
	shopMenu.moveTo(290, 0, 10);
	shopText.moveTo(290,-150, 10);
	shopButton.moveTo(160, 160, 10);
	scoreMenu.moveTo(-90, -140, .5);
	coinIcon.moveTo(-170, -177, .5);
	toolIcon.moveTo(-170, -140, .5);
	waterIcon.moveTo(-170, -107, .5);
	scoreboardText.moveTo(-90, -140, .5);
	target.moveTo(0,50,5);
	titleText.moveTo(160,-180,17.315);
}