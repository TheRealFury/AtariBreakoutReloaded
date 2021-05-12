var breakPad, ball, base, wall;
var heart1, heart2, heart3;
var heart, win, lose, brick;
var death, bounce, loseSound, winSound, start, loseLife;
var launch = 0;
var relativeX;
var lives = 3;
var mode = "mouse";
var destroyedEnemies = 0;
var soundPlayed = 0;
var justMoved = 0;
var code;
var documentation;

function preload(){
  imageLoad();
  soundLoad();
}
function setup(){
  createCanvas(550,610);
  SpriteCreation();
}
function draw(){
  background(220);
  if(justMoved == 1){
    start.play();
    justMoved = 2;
  }
  ballLimitations();
  statDisplay();
  relativeMotion();
  PadLimitations();
  situationCheck();
  testCollision();
  showLives();
  CreateButton();
  drawSprites();
}
function keyPressed() {
	if (keyCode === 32 && launch == 0) {
    ball.velocityY = Math.floor(Math.random() * 10) + 7;
    ball.velocityX = Math.floor(Math.random() * -5) + 5;
    launch = 1;
  }
  else if(keyCode === 16){
    if(mode == "mouse"){
      mode = "key";
    }
    else if(mode == "key"){
      mode = "mouse";
    }
  }
}