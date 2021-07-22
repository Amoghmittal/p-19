var monkey,monkeyImg
var backImage,backr
var banana,bananaImg
var obstacles,obstaclesImg
var stoneGroup
var bananaGroup
var score=0
var invground

function preload(){
   monkeyImg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")

  backImage=loadImage("jungle.jpg")
  bananaImg=loadImage("banana.png")
    obstacleImg=loadImage("stone.png")
}

function setup() {
  createCanvas(600, 600);

  backgr=createSprite(300,300,800,400)
    backgr.addImage(backImage)
  backgr.velocityX=-2
  backgr.scale=1.5
  
  monkey=createSprite(100,520,20,50)
  monkey.addAnimation("monkey",monkeyImg)
  monkey.scale=0.1
  
  stoneGroup=new Group()
  bananaGroup=new Group()
  
  invground=createSprite(300,550,600,20)
  invground.visible=false
}

function draw() {
  background(220);
   if(backgr.x<0){
  backgr.x=backgr.width/2
    
  }
  if(bananaGroup.isTouching(monkey)){
  bananaGroup.destroyEach()
    score=score+2
    
}
  switch(score){
    case 10: monkey.scle=0.12
      break
      
       case 20: monkey.scle=0.14
      break
      
       case 30: monkey.scle=0.16
      break
      
       case 40: monkey.scle=0.18
      break
      
      default:break     
  }
      if(keyDown("space") ){
        monkey.velocityY=-12
      }
      
      monkey.velocityY=monkey.velocityY+0.8
      
      if(stoneGroup.isTouching(monkey)){
        monkey.scale=0.08
      }
      
      
  spawnObstacles()
  spawnBanana()
  drawSprites()
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Score:"+ score,500,50)
      monkey.collide(invground)
}


function spawnBanana(){
if(frameCount%60===0){
  banana=createSprite(600,random(300,500),40,10)
  banana.velocityX=-5
  banana.addImage(bananaImg)
  banana.scale=0.05
  banana.lifetime=300
  bananaGroup.add(banana)
}
}

function spawnObstacles(){
if(frameCount%300===0){
  obstacle=createSprite(800,550,10,40)
  obstacle.velocityX=-2
 obstacle.addImage(obstacleImg)
 obstacle.scale=0.2
obstacle.lifetime=900
  stoneGroup.add(obstacle)
}
}


