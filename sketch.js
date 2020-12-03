var f10jet,f10image;
var ben10,ben10image;
var bossShip,bossShipimage;
var nazmaShip,nazmafly;
var ufoShip,ufoimage;
var turtleShip,turtleimage;
var spaceShip,spaceshipImage;
var bullet,bulletimg
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
}
function draw(){
background(0)
f10jet.addImage("f10image",f10image)
//ben10.addImage("ben10image",ben10image)
//bossShip.addImage("bossShipimage",bossShipimage)
//nazmaShip.addImage("nazmafly",nazmafly)
//ufoShip.addImage("ufoimage",ufoimage)
//turtleShip.addImage("turtleimage",turtleimage)
//spaceShip.addImage("spaceshipimage",spaceshipImage)
shipMovement();
alienspawn();
if(keyDown("space")){
    bulletfire();
}
drawSprites(); 
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
    bullet.scale = 0.1;
    bullet.velocityY = -5
    bullet.x = f10jet.x;
    bullet.y = f10jet.y;
}
function alienspawn(){
    if(frameCount % 30=== 0){
        var rand = random(1,3)
        if(rand===1){
    var alien = createSprite(random(5,595),0,10,10);
     alien.addImage("ufoimage",ufoimage)
     alien.velocityY = 5;
        }
        if(rand===2){
    var alien2 = createSprite(random(5,595),0,10,10);
    alien2.addImage("turtleimage",turtleimage)
    alien2.velocityY = 5;
        }
        if(rand===3){
    var alien3 = createSprite(random(5,595),0,10,10);
    alien3.addImage("spaceshipImage",spaceshipImage)
    alien3.velocityY = 5;
        }
    }

}