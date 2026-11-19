let ballX = 300;
let ballY = 300;
let ballSize = 40;     
let score = 0;
let gameState = "START";
let img;

async function setup() {
createCanvas(600, 600);
textAlign(CENTER);
textSize(20);

imageMode(CENTER);
img = await loadImage("selfportrait.jpg");

}

function draw() {

if (gameState == "START") {
    startScreen();
}

else {

    background(145,160,166);

    imageMode(CENTER);
    image(img, width / 2, height / 2, 600, 600);

    fill(0);
    text("Score: " + score, width / 2, 40);

}

if (gameState == "L1") {
levelOne();
fill(0);
text("Score: " + score, width / 2, 40);
noStroke();
drawBug(ballX, ballY, ballSize);
}

if (gameState == "L2") {
levelTwo();
fill(0);
text("Score: " + score, width / 2, 40);
noStroke();
drawBug(ballX, ballY, ballSize);
}

if (gameState == "L3") {
levelThree();
fill(0);
text("Score: " + score, width / 2, 40);
noStroke();
drawBug(ballX, ballY, ballSize);
}

if (gameState == "WIN") {
winScreen();
}

text("Score: " + score, width / 2, 40);

}

function startScreen() {
background(30);

fill(255);

text("CATCH THE BUG", width / 2, height / 2 - 30);
text("Press any key to start", width / 2, height / 2 + 10);

if (keyIsPressed) {
gameState = "L1";
}

}

function levelOne() {

text("Level One", width / 2, height - 20);

let distToBall = dist(ballX, ballY, mouseX, mouseY);
if (distToBall < ballSize / 2) {
ballX = random(width);
ballY = random(height);
score = score + 1;
}

if (score >= 5) {
gameState = "L2";
}

line(ballX, ballY, mouseX, mouseY);

circle(ballX, ballY, ballSize);
}

function levelTwo() {

text("Level Two", width / 2, height - 20);

let distToBall = dist(ballX, ballY, mouseX, mouseY);
if (distToBall < ballSize / 2) {
ballX = random(width);
ballY = random(height);
score = score + 1;
}

if (score >= 10) {
gameState = "L3";
}

//line(ballX, ballY, mouseX, mouseY);

circle(ballX, ballY, ballSize);
}

function levelThree() {

text("Level Three", width / 2, height - 20);

let distToBall = dist(ballX, ballY, mouseX, mouseY);
if (distToBall < ballSize / 2) {
ballX = random(width);
ballY = random(height);
score = score + 1;
ballSize = ballSize - 2;
}

if (score >= 15) {
gameState = "WIN";
}

//line(ballX, ballY, mouseX, mouseY);

circle(ballX, ballY, ballSize);

// image(img, ballX, ballY, ballSize, ballSize);
}

function drawBug(x, y, size) {
  push();
  translate(x, y);

  // Legs
  stroke(0);
  strokeWeight(2);
  line(-size/4, -size/4, -size/2, -size/2);
  line(size/4, -size/4, size/2, -size/2);
  line(-size/4, size/4, -size/2, size/2);
  line(size/4, size/4, size/2, size/2);

  // Antenna
  line(-size/5, -size/2, -size/3, -size);
  line(size/5, -size/2, size/3, -size);

  // Antenna tips
  fill(0);
  noStroke();
  circle(-size/3, -size, size/6);
  circle(size/3, -size, size/6);

  // Wings
  fill(255, 0, 0);
  ellipse(-size/5, 0, size/2, size/1.5);
  ellipse(size/5, 0, size/2, size/1.5);

  // Bug body
  fill(20);
  ellipse(0, 0, size/2, size);

  // Eyes
  fill(255);
  circle(-size/8, -size/4, size/8);
  circle(size/8, -size/4, size/8);

  pop();
}

function winScreen() {
background(0);

fill(255);

text("YOU WIN", width / 2, height / 2); }