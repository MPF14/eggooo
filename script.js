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

// class Sprite {
//   constructor(x, y, w, h, img, text = '', textSize = 16, color = 'black', textColor = 'white', stroke = 0, strokeColor = 'black', textOffsetX = 0, textOffsetY = 0) {
//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;
//     this.img = img;
//     this.text = text;
//     this.textSize = textSize;
//     this.color = color;
//     this.textColor = textColor;
//     this.stroke = stroke;
//     this.strokeColor = strokeColor;
//     this.textOffsetX = textOffsetX;
//     this.textOffsetY = textOffsetY;
//   }

//   draw() {
//     image(this.img, this.x, this.y, this.w, this.h);
//   }

//   contains(mx, my) {
//     return (
//       mx >= this.x &&
//       mx <= this.x + this.w &&
//       my >= this.y &&
//       my <= this.y + this.h
//     );
//   }
// }

function setup() {
  createCanvas(400, 400);
  background(137, 213, 210);
}

function draw() {
  background(220);

  circle(400, 300, 150);

  textSize(32);
  text("Score: " + score, 20, 40);
}

function mousePressed() {
  let d = dist(mouseX, mouseY, 400, 300);

  if (d < 75) {
    score++;
  }
}