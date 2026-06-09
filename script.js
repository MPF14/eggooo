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
let playing = 4;
let volume = 20;
let rectSprite;
let musicLabel = ['Music off', 'Music on', 'Music on', 'Music on', 'Music onn', 'Music on', 'Music on', 'Music on', 'Music on', 'Music on', 'Music on'];
let songs = ['off','skinny', 'lunch', 'chihiro', 'birds of a feather', 'wildflower', 'the greatest', "l'amor de ma vie", 'the diner', 'bittersuite', 'blue']

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

// volume

let volumeBar = new Sprite(-400, 0, 360, 30); //(200,280,140,13)
volumeBar.image = bar5;
volumeBar.scale = .5;

let volumeDot = new Sprite(-400, 0, 50, 60);
volumeDot.image = slideDot;
volumeDot.scale = .5;

let volumeText = new Sprite(200, 655, 10, 10);
volumeText.text = 'Volume: ' + round(volume / 14);
volumeText.textSize = 20;
volumeText.color = '#dcb98a';
volumeText.stroke = '#dcb98a';
volumeText.textColor = '#90625d';

//info button
let infoButton = new Sprite(-160, 160, 400, 400);
infoButton.image = exButton;
infoButton.scale = 0.1;

let infoMenu = new Sprite(0, 400, 430, 490);
infoMenu.image = infoMenuL;
infoMenu.scale = .625;

let infoText = new Sprite(0, 285, 100, 100);
let infoGraphics = createGraphics(300, 200);
infoGraphics.textSize(35);
infoGraphics.fill('#90625d');
infoGraphics.stroke('#dcb98a');
infoGraphics.strokeWeight(2);
infoGraphics.textAlign(CENTER, CENTER);
infoGraphics.textFont(font2);
infoGraphics.text("Info", 150, 100);
infoText.image = infoGraphics;


let infoMenuText = new Sprite(0, 490, 10, 10);
let infoMenuGraphics = createGraphics(300, 400);
infoMenuGraphics.textSize(13);
infoMenuGraphics.fill('#90625d');
infoMenuGraphics.stroke('#dcb98a');
infoMenuGraphics.strokeWeight(1);
infoMenuGraphics.textAlign(CENTER, TOP);
infoMenuGraphics.textFont(font1);
infoMenuGraphics.text('Click the next to\n earn points. Once you earn\nenough coins,you can buy \npower ups in the shop.\nOnce you earn enough, you\ncan prestige and reset to\nearn a bonus and your nest\nwill evolve! CPC stands for\ncoins per click and CPS stands\nfor coins per second.\n\nGraphics by Cup Nooble\nMusic by Billie Eilish\nMade by Matilda Fletcher', 150, 20);
infoMenuText.image = infoMenuGraphics;

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
let shopButton = new Sprite(160, -260, 400, 400);
shopButton.image = shopButtonL;
shopButton.scale = 0.1;

// settings button
let settingsButton = new Sprite(-160, -260, 400, 400);
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
	titleText.image = titleGraphics;
	infoMenuText.image = infoMenuGraphics;
	infoText.image = infoGraphics;

	updateGraphics(songText, songs[playing], 20, 180, 50, '#90625d', '#dcb98a', LEFT, CENTER, font1, 0, 25, 1);


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
			showMain();
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
			infoButton.image.offsety = -5;
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
			score += adder * multiplier;
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
			settingsButton.image.offsety = 10;
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
			playing = 1-ceil(playing/10);
			updateGraphics(musicText, musicLabel[playing], 20, 100, 20, '#90625d', '#dcb98a', LEFT, CENTER, font1, 0, 10, 1);
		}
  	} else if (page == 4) {
		if 	(mouse.pressed() && pointer.overlapping(shopButton)) {
			shopButton.image.offset.y = -5;
			shopButton.image = shopButtonClicked;
			setTimeout(() => { shopButton.image = shopButtonL; shopButton.image.offset.y = 0;}, 100);
			page = 1;
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

		if 	(mouse.pressed() && pointer.overlapping(target)) {
			target.scale = .27;
			setTimeout(() => { target.scale = .3;}, 25);
			score += adder * multiplier;
		}
	}
};
//page 0 - start
//page 1 - main
//page 2 - info 
//page 3 - settings
//page 4 - shop 1/2
//page 5 - prestige 1/2

function showMain() {
	startButton.moveTo(0,470,10);
	target.moveTo(0,50,10);
	titleText.moveTo(160,-180,4.717);
	titleText.scale = 1/5;
	infoButton.moveTo(-160,560,10);
	settingsButton.moveTo(-160, 160, 10);
	shopButton.moveTo(160, 160, 10);
	scoreMenu.moveTo(-90, -140, 10);
}
function hideMain() {
	shopButton.moveTo(560, 160, 10);
	scoreMenu.moveTo(-90, -540, 10);
	target.moveTo(0, 450, 10);
}
function hideInfo() {
  	infoMenu.moveTo(0, 400, 10);
	infoText.moveTo(0, 285, 10);
  	infoMenuText.moveTo(0, 490, 10);
}
function showInfo() {
  	infoMenu.moveTo(0, 0, 10);
	infoText.moveTo(0, -115, 10);
  	infoMenuText.moveTo(0, 90, 10);
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
}
// function updateGraphics(sprite, size) {
//     let g = createGraphics(100, 20);

//     g.textSize(size);
//     g.fill('#90625d');
//     g.stroke('#dcb98a');
//     g.strokeWeight(1);
//     g.textAlign(LEFT, CENTER);
//     g.textFont(font1);

//     g.text(playing ? 'Music on' : 'Music off', 0, 10);

//     sprite.image = g;
// }


function updateGraphics(sprite, text, size, width, lenght, color, outline, alignx = CENTER, aligny = CENTER, font = font1, x = 0, y = 0, weight = 1) {
    let g = createGraphics(width, lenght);

    g.textSize(size);
    g.fill(color);
    g.stroke(outline);
    g.strokeWeight(weight);
    g.textAlign(alignx, aligny);
    g.textFont(font);

    g.text(text, x, y);

    sprite.image = g;
}
// updateGraphics(music, musicLabel[playing], 20, 100, 20, '#90625d', '#dcb98a', LEFT, CENTER, font1, 0, 10, 1);




