var Runner
var path
function preload(){
  //pre-load images
  Runnerrunning = loadAnimation("Runner-1.png", "Runner-2.png")
  pathImg = loadImage("path.png")
}
function setup(){
  createCanvas(400,400);
  //create sprites here
  Runner = createSprite(180,340,30,30)
  Runner.addAnimation("running",Runnerrunning);
  Runner.scale = 0.08
  path = createSprite(200,200,400,400)
  path.addImage("path",pathImg)
  path.velocityY = 4
  path.scale = 1.2
  
}

function draw() {
  background(0);
if (path.y>400){
  path.y = height/2;
}
Runner.x=World.mouseX
  drawSprites();
}

