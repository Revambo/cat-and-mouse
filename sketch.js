var cat, catImg, catImg2
var rat, ratImg
var garden
var gardenImg
function preload() {
    //load the images here
    catImg = loadAnimation("cat2.png", "cat3.png");
  catImg2 = loadAnimation("cat4.png")
ratImg = loadAnimation("mouse1.png", "mouse2.png", "mouse3.png", "mouse4.png")
gardenImg = loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
rat = createSprite(100, 600, 50, 50)
cat = createSprite(700, 600, 50, 50)

garden = createSprite(500, 400)
  garden.addImage(gardenImg)
 garden.scale = 1.2

cat.addAnimation("cat", catImg);
cat.addAnimation("catty", catImg2)
rat.addAnimation("rat", ratImg);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    cat.velocityX = -2
  
  rat.scale = 0.1
  cat.scale = 0.1
  
  rat.depth = garden.depth+1
  cat.depth = garden.depth+1

  if(cat.x === rat.x+100){
    cat.velocityX = 0
    cat.changeAnimation("catty", catImg2)
    
  } 
    
 

 
   
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
      
    if(cat.x - rat.x <(cat.width + rat.width)/2 &&
       rat.x - cat.x <(rat.width + cat.width)/2 &&
       cat.y - rat.y <(cat.height + rat.height)/2 &&
       rat.y - cat.y <(rat.height + cat.height)/2){
      cat.velocityX = -5
      cat.changeAnimation("catRunning")
    }
  }




}

