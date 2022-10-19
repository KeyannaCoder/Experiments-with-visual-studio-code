var box;

function setup() {
  createCanvas(1700,700);
  box = createSprite(100,200,50,50);

}

function draw() 
{
  background(30);
  if(keyIsDown(LEFT_ARROW)){
    box.x = box.x-2;
  
  }

  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x+2;
  
  }
  if(keyIsDown(UP_ARROW)){
    background("blue");
  
  }
drawSprites();

}




