var bullet,wall,thickness;
var speed,weight;



function setup() {
  createCanvas(1800,400);
  thickness=createSprite(22,83);
  wall=createSprite(1200,200,thickness,height/2)


  speed=random(223,321)
  weight=random(30,52)
  
  bullet.velocityX=speed;
  
  
}

function draw() {
  background("black");  

  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
   bullet.velocityX=0;
   var deformation=8.5 *weight*speed*speed/22500;
   if(deformation>180)
   {
     bullet.shapeColor="white";

   }

   if(deformation<180 && deformation>100)
   {
bullet.shapeColor="white";

   }

   if(deformation<100)
   {
     bullet.shapeColor="white";
     
   }
 } 

 if(hascollided(bullet,wall))
 {
   bullet.velocityX=0;
   var damage=0.5 *weight*speed*speed/(thickness*thickness*thickness);

   if(damage>10)
   {
     wall.shapeColor="red";
   }
   if(damage<10)
   {
     wall.shapeColor="green";
   }
 }


  drawSprites();
}

function hasCollided (lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  walllLeftEdge=lwalll.x;
  if(bulletRightEdge=lwallLeftEdgh){
    return true;
  }
return false;
}