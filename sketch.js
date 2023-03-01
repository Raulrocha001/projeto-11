var ship
function preload(){
  shipImage = loadImage("ship-1.png");
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
    drawSprites();
    ship = createSprite(200,200,400,20);
    ship.addImage(shipImage)
 ship.scale = 0.5;
}
