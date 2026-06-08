let score = 0;
let adder = 1;
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
await font1;
await font2;
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

let startButton = new Sprite(0, 70, 350, 100);
startButton.img = playButton;
startButton.scale = .6;
startButton.img.offset.y = 10;
startButton.layer = 1;

let titleText = new Sprite(0, -80, 260, 100);
let g = createGraphics(280, 200);
g.textSize(80);
g.fill('#658ca1');
g.stroke('#658ca1');
g.strokeWeight(2);
g.textAlign(CENTER, CENTER);
g.textFont(font2);
g.text("Eggooo!", 140, 100);
titleText.img = g;


let target = new Sprite(0, -400, 400, 225);
target.img = egg1;
target.scale = .3;
target.img.offset.y = -80;
target.layer = 2;

// settings menu
let settingsMenu = new Sprite(200, 600, 200, 400);
settingsMenu.image = settingsMenuL;
settingsMenu.scale = .3;

// music
let music = new Sprite(115, 550, 800, 800);
music.image = toggleOn1;
music.scale = 0.1;

let leftArrow = new Sprite(105, 590, 800, 800);
leftArrow.image = leftArrow1;
leftArrow.scale = 0.04;

let rightArrow = new Sprite(135, 590, 800, 800);
rightArrow.image = rightArrow1;
rightArrow.scale = 0.04;

let musicText = new Sprite(225, 550, 10, 10);
musicText.text = 'Music on';
musicText.textSize = 20;
musicText.color = '#dcb98a';
musicText.stroke = '#dcb98a';
musicText.textColor = '#90625d';

let songText = new Sprite(225, 590, 10, 10);
songText.text = 'Song selector';
songText.textSize = 20;
songText.color = '#dcb98a';
songText.stroke = '#dcb98a';
songText.textColor = '#90625d';

// volume

let volumeBar = new Sprite(200, 630, 200, 200); //(200,280,140,13)
volumeBar.image = bar5;
volumeBar.scale = .2;

let volumeDot = new Sprite(200, 628, 1400, 70);
volumeDot.image = slideDot;
volumeDot.scale = .2;

let volumeText = new Sprite(200, 655, 10, 10);
volumeText.text = 'Volume: ' + round(volume / 14);
volumeText.textSize = 20;
volumeText.color = '#dcb98a';
volumeText.stroke = '#dcb98a';
volumeText.textColor = '#90625d';

//info button
let infoButton = new Sprite(-150, 150, 400, 400);
infoButton.image = exButton;
infoButton.scale = 0.1;

let infoText = new Sprite(225, 685, 10, 10);
infoText.text = 'info';
infoText.textSize = 20;
infoText.color = '#dcb98a';
infoText.stroke = '#dcb98a';
infoText.textColor = '#90625d';

//info menu
let infoMenu = new Sprite(200, 600, 200, 400);
infoMenu.image = infoMenuL;
infoMenu.scale = .3;

let infoMenuText = new Sprite(200, 600, 10, 10);
infoMenuText.text = 'Click the next to\n earn points. Once you earn\nenough coins,you can buy \npower ups in the shop.\nOnce you earn enough, you\ncan prestige and reset to\nearn a bonus and your nest\nwill evolve! CPC stands for\ncoins per click and CPS stands\nfor coins per second.\n\nGraphics by Cup Nooble\nMusic by Billie Eilish\nMade by Matilda Fletcher';
infoMenuText.textSize = 14;
infoMenuText.textColor = '#90625d';
infoMenuText.color = '#dcb98a';
infoMenuText.stroke = '#dcb98a';

// score menu
let scoreMenu = new Sprite(-90, -540, 480, 260);
scoreMenu.image = scoreMenuL;
scoreMenu.scale = .4;
// scoreMenu.textSize = 15;
// scoreMenu.textColor = '#90625d';
// scoreMenu.text = scoreText + '\n\n' + multiplierText + '\n\n' + passiveText;

// coin icon
let coinIcon = new Sprite(-375, 23, 50, 50);
coinIcon.image = coinIcon1;
coinIcon.scale = 0.03;

// tool icon
let toolIcon = new Sprite(-373, 65, 50, 50);
toolIcon.image = egg3;
toolIcon.scale = 0.03;

// water icon
let waterIcon = new Sprite(-373, 100, 50, 50);
waterIcon.image = egg3;
waterIcon.scale = 0.03;

// shop button
let shopButton = new Sprite(150, -250, 400, 400);
shopButton.image = shopButtonL;
shopButton.scale = 0.1;

// settings button
let settingsButton = new Sprite(-150, -250, 400, 400);
settingsButton.image = settingsButtonL;
settingsButton.scale = 0.1;

// shop menu
let shopMenu = new Sprite(500, 200, 200, 400);
shopMenu.image = shopMenuL;
shopMenu.scale = .44;

// prestige button
let prestigeButton = new Sprite(500, 355, 700, 200);
prestigeButton.image = prestigeButtonL;
prestigeButton.scale = .2;

// shop menu buttons
let shopMenuButton1 = new Sprite(450, 50, 700, 700);
shopMenuButton1.image = squareButton;
shopMenuButton1.scale = .05;

let shopMenuText1 = new Sprite(530, 50, 100, 35);
shopMenuText1.text = 'COST: 50 \n1 CPC';
shopMenuText1.textColor = '#90625d';
shopMenuText1.color = '#dcb98a';
shopMenuText1.stroke = '#dcb98a';


let shopMenuButton2 = new Sprite(450, 100, 700, 700);
shopMenuButton2.image = squareButton;
shopMenuButton2.scale = .05;

let shopMenuText2 = new Sprite(530, 100, 100, 35);
shopMenuText2.text = 'COST: 1000 \n5 CPS';
shopMenuText2.textColor = '#90625d';
shopMenuText2.color = '#dcb98a';
shopMenuText2.stroke = '#dcb98a';


let shopMenuButton3 = new Sprite(450, 150, 700, 700);
shopMenuButton3.image = squareButton;
shopMenuButton3.scale = .05;

let shopMenuText3 = new Sprite(530, 150, 100, 35);
shopMenuText3.text = 'COST: 25000 \n300 CPC';
shopMenuText3.textColor = '#90625d';
shopMenuText3.color = '#dcb98a';
shopMenuText3.stroke = '#dcb98a';

let shopMenuButton4 = new Sprite(450, 200, 700, 700);
shopMenuButton4.image = squareButton;
shopMenuButton4.scale = .05;

let shopMenuText4 = new Sprite(530, 200, 100, 35);
shopMenuText4.text = 'COST: 5a \n30,000 CPS';
shopMenuText4.textColor = '#90625d';
shopMenuText4.color = '#dcb98a';
shopMenuText4.stroke = '#dcb98a';

let shopMenuButton5 = new Sprite(450, 250, 700, 700);
shopMenuButton5.image = squareButton;
shopMenuButton5.scale = .05;

let shopMenuText5 = new Sprite(530, 250, 100, 35);
shopMenuText5.text = 'COST: 250a \n3a CPC';
shopMenuText5.textColor = '#90625d';
shopMenuText5.color = '#dcb98a';
shopMenuText5.stroke = '#dcb98a';

let shopMenuButton6 = new Sprite(450, 300, 700, 700);
shopMenuButton6.image = squareButton;
shopMenuButton6.scale = .05;

let shopMenuText6 = new Sprite(530, 300, 100, 35);
shopMenuText6.text = 'COST: 100b \n500a CPS';
shopMenuText6.textColor = '#90625d';
shopMenuText6.color = '#dcb98a';
shopMenuText6.stroke = '#dcb98a';
allSprites.passes(allSprites);
allSprites.debug = true;


q5.update = function () {
 	background("#89D5D2");
	// text('click to increase score!', 0, -50);
	// text('Score: ' + score, 0, -30);

	// if (mouse.presses() && pointer.overlapping(target)) {
	// 	score += 1;
	// }
	if (page != 0) {
    	textFont(font1);
  	}
	
	if (page == 0) {
		target.visible = false;
		// textFont(font2);
		// settingsButton.img = exButton;
		// textSize(80);
		// fill ('#658ca1');
		// stroke ('#658ca1');
		// textAlign(CENTER, CENTER);
		// text('Eggooo!', 0, -80);
		if 	(mouse.pressing() && pointer.overlapping(startButton)) {
			startButton.y = 80;
			startButton.img = playButtonClicked;
			setTimeout(() => { startButton.img = playButton;}, 100);
			page = 1;
		}
		if (pointer.overlapping(startButton)) {
			startButton.img = playButtonClicked;
			startButton.y = 80;
		} else {
			startButton.img = playButton;
			startButton.y = 70;
		}

		if 	(mouse.pressing() && pointer.overlapping(infoButton)) {
			infoButton.y = 155;
			infoButton.img = exButtonClicked;
			setTimeout(() => { infoButton.img = exButton;}, 100);
			page = 2;
		}
		if (pointer.overlapping(infoButton)) {
			infoButton.img = exButtonClicked;
			infoButton.y = 155;
		} else {
			infoButton.img = exButton;
			infoButton.y = 150;
		}
  } else if (page == 1) {
		target.visible = true;
		startButton.moveTo(0,470,3);
		target.moveTo(0,0,3);
		titleText.moveTo(0,320,3);
		infoButton.moveTo(-150,550,3);
		settingsButton.moveTo(-150, 150, 3);
		shopButton.moveTo(150, 150, 3);
		scoreMenu.moveTo(-90, -140, 3);
		if 	(mouse.pressing() && pointer.overlapping(settingsButton)) {
			settingsButton.y = 155;
			settingsButton.img = settingsButtonClicked;
			setTimeout(() => { settingsButton.img = settingsButtonL;}, 100);
			page = 1;
		}
		if (pointer.overlapping(settingsButton)) {
			settingsButton.img = settingsButtonClicked;
			settingsButton.y = 155;
		} else {
			settingsButton.img = settingsButtonL;
		}

		if 	(mouse.pressing() && pointer.overlapping(shopButton)) {
			shopButton.y = 155;
			shopButton.img = shopButtonClicked;
			setTimeout(() => { shopButton.img = shopButtonL;}, 100);
			page = 1;
		}
		if (pointer.overlapping(shopButton)) {
			shopButton.img = shopButtonClicked;
			shopButton.y = 155;
		} else {
			shopButton.img = shopButtonL;
		}

		if 	(mouse.pressing() && pointer.overlapping(target)) {
			target.scale = .28;
			score += adder * multiplier;
		} else {
			target.scale = .3;
		}
  } 

//page 0 - start
//page 1 - main
//page 2 - info
//page 3 - settings
//page 4 - shop
//page 5 - prestige








};


