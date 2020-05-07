var wall, thickness, bullet, speed, weight;

function setup() {
  createCanvas(1000, 400);
  bullet = createSprite(100,200,50,20);
  wall = createSprite(900,200,30,300);
  bullet.velocityX = 30;
  bullet.shapeColor ="white";
  wall.shapeColor ="grey";
  speed = Math.floor(random(223,321));
  weight = Math.floor(random(30,52));
  thickness = Math.floor(random(22,83));
}

function draw() {
  background("blue");
  drawSprites();

  collided(bullet,wall);

  function damages(){
    damage = (0.5 * weight * speed *speed)/(thickness*thickness*thickness);
    console.log(damage);
  
    if(damage < 10 ){
      bullet.shapeColor ="green";
    }
    else{
      bullet.shapeColor ="red";
    }
  
  }
  function collided(object1,object2){
    if(object2.x-object1.x===object1.width/2 + object1.width/2-10)
      {
        object1.velocityX = 0;
        object2.velocityX = 0;
        damages();
      }

 

}
}