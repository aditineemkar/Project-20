//creating global variables
var car, car1, car2
var wall, wall1, wall2
var line, line1, line2;
var speed;
var weight;

function setup() {
  createCanvas(800,500);
  speed=random(55,90);
  speed1=random(55,90);
  speed2=random(55,90);
  weight=random(55,90);

  car=createSprite(200, 50, 10, 10);
  car1=createSprite(200, 216, 10, 10);
  car2=createSprite(200, 382, 10, 10);
  car.shapeColor="orange";
  car1.shapeColor="pink"; 
  car2.shapeColor="blue";
  car.velocityX=speed;
  car1.velocityX=speed1;
  car2.velocityX=speed2;

  wall=createSprite(600, 50, 5, 70);
  wall1=createSprite(600, 216, 5, 70);
  wall2=createSprite(600, 382, 5, 70);
  wall.shapeColor="orange";
  wall1.shapeColor="pink"; 
  wall2.shapeColor="blue";

  line=createSprite(450,100,800,5);
  line1=createSprite(450,300,800,5);
  line2=createSprite(450,500,800,5);

  
  
}

function draw() {
  background(255,255,255); 
  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180){
      car.shapeColor=("green");
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=("yellow");
    }
    if(deformation<100){
      car.shapeColor=("red");
    }
  }
  if(wall1.x-car1.x<(car1.width+wall1.width)/2){
    car1.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180){
      car1.shapeColor=("green");
    }
    if(deformation<180 && deformation>100){
      car1.shapeColor=("yellow");
    }
    if(deformation<100){
      car1.shapeColor=("red");
    }
  }
  if(wall2.x-car2.x<(car2.width+wall2.width)/2){
    car2.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180){
      car2.shapeColor=("green");
    }
    if(deformation<180 && deformation>100){
      car2.shapeColor=("yellow");
    }
    if(deformation<100){
      car2.shapeColor=("red");
    }
  }
  
  drawSprites();
}