var boy;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10

function setup() {
  createCanvas(displayWidth,displayHeight);
  boy = createSprite(100, 100, 50, 50);
 // wall1 = createSprite(1000,120,50,250);
 // wall2 = createSprite(500,450,250,50);
//  wall3 = createSprite(700,120,50,250);
 // wall4 = createSprite(1140,120,250,50);

 // wall5 = createSprite(500,120,50,250);
  wall6 = createSprite(800,450,50,250);
  wall7 = createSprite(1150,450,250,50);
  wall8 = createSprite(1000,150,50,250);

  wall9 = createSprite(1000,800,50,250);
  wall10 = createSprite(100,300,250,50);
 
}

function draw() {
  background("black");
    

  drawSprites();
}