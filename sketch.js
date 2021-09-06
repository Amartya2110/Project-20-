var rocket, rocketImg
var galaxy, galaxyImg 
var meteor, meteorImg, meteorG

function preload(){
rocketImg = loadImage("Rocket.png")
galaxyImg = loadImage("Galaxy.png")
meteorImg = loadImage("Meteor.png")
}

function setup() {
 createCanvas(500,600)

 meteorG = new Group();
 galaxy = createSprite()
 galaxy.addImage("galaxy", galaxyImg)
 galaxy.velocityY = 1
 
 if(galaxy.y > 600){
     path.y = height/2
 }


 rocket = createSprite(225,500)
 rocket.addImage(rocketImg)
 rocket.scale = 0.1
}

function draw() {
 background("galaxy")


createMeteor();

 drawSprites()
}


function createMeteor() {
    if (World.frameCount % 200 == 0) {
    var cash = createSprite(Math.round(random(50, 450),40, 10, 10));
    meteor.addImage(meteorImg);
    meteor.scale=0.12;
    meteor.velocityY = 3;
    meteor.lifetime = 150;
    meteorG.add(meteor);
    }
}








