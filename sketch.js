var backgroundImg,girlSprite,girlSpriteImg;
var snow,snowImg;



function preload(){
  backgroundImg = loadImage("snow2.jpg");
  snowImg = loadImage("snow5.webp");
  girlSpriteImg = loadImage("Lady.png")
}
function setup() {
  createCanvas(800,400);
  createSprite();
 
  girlSprite = createSprite(0,350,30,30);
 girlSprite.shapeColor = "pink";
  girlSprite.addImage(girlSpriteImg);
  girlSprite.scale=0.1
  
}

function draw() {
  background(backgroundImg);  
  drawSprites();
 girlSprite.x = girlSprite.x+1;
 snowFall();
}

function snowFall(){
if (frameCount%60===0){
  snow = createSprite();
  snow.x = Math.round(random(0,800));
  snow.addImage("snow",snowImg);
  snow.scale = 0.2;
  snow.velocityY = 3;
  snow.lifetime= 300;
  girlSprite.depth = snow.depth;
  girlSprite.depth = girlSprite.depth+1;
}
}