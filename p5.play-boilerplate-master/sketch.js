var bg, bgImg;
var player, playerImg;
var SMImage, SM;
var plasticGroup, plasticImg, plastic;

function preload(){

  bgImg = loadImage("sprites/bg.gif");
  playerImg = loadImage("sprites/submarine.gif");
  SMImage = loadImage("sprites/SM.png");
  plasticImg = loadImage("sprites/bottle.png");

}



function setup() {
  createCanvas(800,400);
  player = createSprite(100, 200, 50, 50);
  player.addImage(playerImg);
  player.scale = 0.07;

  SM = createSprite(700, 200, 50, 50);
  SM.addImage(SMImage);
  SM.scale = 0.7;
//this.remove();
  
}

function draw() {
  background(bgImg);  

  if (keyIsDown(UP_ARROW)) {
    player.y -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    player.y += 10;
  }
  drawSprites();
}


