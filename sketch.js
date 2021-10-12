//global variable
var box;

function setup(){
  createCanvas(1200 , 600);

  box = createSprite(580, 270, 30, 100);
  box.shapeColor = "orange";


}

function draw(){
  background(0);

  if(keyDown("space")){
    box.x = box.x + 5;
  }

  drawSprites();

}