var sheep;
var sheep2;
var xpos;
var ypos;
var bah;
var butt;

function preload(){
  sheep = loadImage("sheep.png");
  sheep2 = loadImage("sheep2.png");
  bah = loadSound("bah.wav");
  butt = loadImage("butt.png")
}

function setup() {
  createCanvas(1500,550);
  background(255,175,220);
}

function draw() {
  //\\background(255,175,220);
  background(252,68,68);
   //background(40,134,231);
  curTime = millis();
  
  /*if(curTime<3000){
    image(butt, 10,150,500,300);
  }*/
  
  
  
  if(mouseX> 800){
   background(r,g,b);
    var r=random(0,255)
    var g=random(0,255)
    var b=random(0,255)
    fill(r,g,b);
    
    for (var x=0; x < width; x=x+5){
    var xpos = random(0,1500);
    var ypos = random(0,550);
    image(sheep,xpos,ypos,100,100);
  }
  }
  
   if (mouseIsPressed){
  image(sheep2,600,100,300,300);
  bah.play();
  //fill(250,252,68);
  fill (255,255,0);
  textSize(32);
  text("bah", 600, 100);
//fill(0, 102, 153);
  }
   
    
  

  
  image(sheep, mouseX, mouseY,200,200);
  
  
}