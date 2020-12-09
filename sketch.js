var f10jet,f10image;
var ben10,ben10image;
var bossShip,bossShipimage;
var nazmaShip,nazmafly;
var ufoShip,ufoimage;
var turtleShip,turtleimage;
var spaceShip,spaceshipImage;
var bullet,bulletimg
var bulletgroup;
var spaceShipgroup;
var turtleShipgroup;
var ufogroup;
var wave = 1
var score = 0;
var gameState = "play";
function preload(){
f10image = loadImage("images/playership.gif")
ben10image = loadImage("images/ben10ship.png")
bossShipimage = loadImage("images/boss.png")
nazmafly = loadImage("images/nazmaShip.png")
ufoimage = loadImage("images/ufo.gif")
turtleimage = loadImage("images/turtle_1.png")
spaceshipImage = loadImage("images/spaceship1.gif")
bulletimg = loadImage("images/bullet.png")
}
function setup(){
createCanvas(600,700);
f10jet = createSprite(200,650,10,20)
//ben10  = createSprite(100,200,10,20)
//bossShip = createSprite(200,500,10,20)
//nazmaShip = createSprite(50,200,10,20)
//ufoShip  = createSprite(100,300,10,20)
//turtleShip =createSprite(100,400,10,20)
//spaceShip = createSprite(100,550, 10,10)
bulletgroup = new Group();
spaceShipgroup = new Group();
ufogroup = new Group();
turtleShipgroup = new Group();
}
function draw(){
background("gray")
//ulletgroup.debug = true;
f10jet.scale = 0.8;
f10jet.addImage("f10image",f10image)
//ben10.addImage("ben10image",ben10image)
//bossShip.addImage("bossShipimage",bossShipimage)
//nazmaShip.addImage("nazmafly",nazmafly)
//ufoShip.addImage("ufoimage",ufoimage)
//turtleShip.addImage("turtleimage",turtleimage)
//spaceShip.addImage("spaceshipimage",spaceshipImage)
shipMovement();
alienspawn();
if(keyWentDown("space")){
    bulletfire();
}
for(var i =0;i<ufogroup.length;i++){


if(bulletgroup.isTouching(ufogroup)){
    ufogroup.get(i).destroy();
    bulletgroup.destroyEach();
    score = score+5;
    console.log("ufoship")
}
}
for(var j =0;j<turtleShipgroup.length;j++){
if(bulletgroup.isTouching(turtleShipgroup)){

turtleShipgroup.get(j).destroy();
bulletgroup.destroyEach();
score = score+5;
console.log("turtleship")
}
}
for(var k =0;k<spaceShipgroup.length;k++){
if(bulletgroup.isTouching(spaceShipgroup)){
spaceShipgroup.get(k).destroy();
bulletgroup.destroyEach();
score = score+5;
console.log("spaceship")
}
}
drawSprites(); 
fill("red")
textSize(24);
text("score:"+score,500,100)
if(wave ===2 ){
    fill("red")
    textSize(40)
    text("Wave2",200,400)
}
}
function shipMovement(){
if(keyDown("D")){
    f10jet.velocityX = 5
}
if(keyDown("A")){
    f10jet.velocityX = -5
}

}
function bulletfire(){
    bullet = createSprite(200,650,20,20)
    bullet.addImage("bulletimg",bulletimg);
    bullet.debug = true;
    bullet.setCollider("rectangle",50,100,600,400);
    bullet.scale = 0.1;
    bullet.velocityY = -5
    bullet.x = f10jet.x;
    bullet.y = f10jet.y;
    bulletgroup.add(bullet);
 
}
function alienspawn(){
    if(gameState === "play"){
        if(score>=20){
            gameState = "wave2"
            wave=wave +1
            console.log(wave)
        }
    if(frameCount % 60=== 0){
        var rand = Math.round(random(1,3));
        if(rand===1){
    var alien = createSprite(random(5,595),0,10,10);
    alien.scale = 0.7
     alien.addImage("ufoimage",ufoimage)
     alien.velocityY = 5;
     ufogroup.add(alien);
        }
        if(rand===2){
    var alien2 = createSprite(random(5,595),0,10,10);
    alien2.scale = 0.7
    alien2.addImage("turtleimage",turtleimage)
    alien2.velocityY = 5;
    turtleShipgroup.add(alien2);
        }
      if(rand===3){
   var alien3 = createSprite(random(5,595),0,10,10);
    alien3.scale = 0.7;
    alien3.addImage("spaceshipImage",spaceshipImage)
    alien3.velocityY = 5;
    spaceShipgroup.add(alien3);
        }
    }
   if(gameState === "wave2"){
       ufogroup.setVelocityYEach(0);
       turtleShipgroup.setVelocityYEach(0)
       spaceShipgroup.setVelocityYEach(0)
       f10jet.visible = false; 
       bulletgroup.setLifetimeEach(0);
       fill("Red")
       textSize(24);
       text("wave2",200,600);
    }
}
}

