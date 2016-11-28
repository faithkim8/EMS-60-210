//setup is executed once at the launch
var eyexpos;
var eyexpos2;
var eyebrowypos;
var eyebrowypos2;
var mouthypos;
var teethypos;
var shoulderypos;
var hairypos;
var samemovement;

var red;
var green;
var blue;

var mic;

//just once (setup)
function setup() {
  //create canvas
  createCanvas(600, 600);
  
  mic = new p5.AudioIn()
  mic.start();
 
 
 
  vol=.3
  eyexpos=225;
  eyexpos2=370;
  eyebrowypos=430;
  eyebrowypos2=430;
  mouthypos=25;
  teethypos=343;
  shoulderypos=415;
  hairypos=390;
  
  red=0;
  green=213;
  blue=198;
}


//draw is executed every frame 60 times per second
function draw() {
  // draw stuff here
  
   var vol = mic.getLevel();
  
/*micLevel = mic.getLevel();*/

  
  //infinite (thats why it's under draw function)
  pupilxpos=map(mouseX,0,width,210,240)
  pupilxpos2=map(mouseX,0,width,387,357)
  bodyxpos=map(mouseX,0,width,90,100)
  wiggle=map(mouseX,0,width,-5,5)
  
   //fill the background
  background(199,247,172);
   
  //pink face
    /*fill(237,200,600);
    noStroke();
    ellipse(250, 200, 270, 300);*/
    
    /*//right ear
    noStroke();
    fill(239,186,168)
    ellipse(410, 240, 50, 70);*/
    
    
 
       /*//left ear
    noStroke();
    fill(239,186,168)
    ellipse(100, 240, 50, 70);*/

  var h = map(vol, 0, 1, height, 0);
    
  //hair
    noStroke();
    fill(239,186,168)
    rect(105,h-580,390,360,150);
    //390,360
    
    /*//hair
    noStroke();
    fill(239,186,168)
   rect(100,30,400,450,150);*/
    
    //body 
    noStroke();
    fill(0,213,198)
   rect(95,shoulderypos,420,320,120)
   //original x= 95
  
  //neck
    noStroke();
    fill(254,213,198)
    rect(235,360,133,80,10)
    ellipse(302,435,133,75)
    
    //neck skin extension
    noStroke();
    fill(254,213,198)
    ellipse(301.3,379,137,85)
    
     //neck shadow
    noStroke();
    fill(239,186,168)
    ellipse(302,385,130,85)
    
    //blood
    noStroke();
    fill(211,80,65)
    ellipse(302,375,50,40)
    
    //bone
    noStroke();
    fill(255,255,255)
    ellipse(302,375,35,25)
    rect(284.7,332,35,50,10)
    ellipse(288,335,30,30)
     ellipse(318,335,30,30)
    
   /* //squirting
    noStroke();
    fill(211,80,65)
    ellipse(267,355,10,10)
     ellipse(250,340,10,10)
      ellipse(240,325,10,10)
      ellipse(230,310,15,15)*/

      
      
    
    //lighter face
   
   
    strokeWeight(3);
    stroke(239,186,168)
    fill(254,213,198);
    rect(145,h-520,310,330,150);
    
    /*300,300,330,150*/
    /**/
    
    /*//lighter face 
    noStroke();
    fill(254,213,198)
    rect(145,150,310,300,150);*/
    
    //hair line
    noStroke();
    fill(254,213,198)
    rect(295,h-567,7,50,125);
    
    //light right ear
    noStroke();
    fill(254,213,198)
    ellipse(455, h-360, 30, 50);
    
    //light left ear
    noStroke();
    fill(254,213,198)
    ellipse(145, h-360, 30, 50);
    
    //eyebrows
    noStroke();
    fill(239,186,168)
    rect(190,h-eyebrowypos,67,15,125);
    
    noStroke();
    fill(239,186,168)
    rect(340,h-eyebrowypos2,67,15,125);
    
    
    
    //nose
    triangle(276,h-297,300,h-400,320,h-297)
    
    noStroke();
    fill(239,186,168)
    ellipse(299,h-305,40,40)
    ellipse(280,h-306,35,20)
    
 
    
    /* //nose
    triangle(276,290,300,200,320,290)*/
    
   noStroke()
    fill(254,213,198);
    triangle(275,h-297,300,h-400,311,h-297)
    
      /*noStroke();
    fill(239,186,168)
    ellipse(280,294,35,20)*/
  
    
    noStroke();
    fill(254,213,198)
    ellipse(284,h-306,35,20)
    
    noStroke();
    fill(239,186,168)
    ellipse(317,h-306,35,20)
    
    
    noStroke();
    fill(254,213,198)
    ellipse(298,h-306,35,35)
    
    
    
    /*//nose light
    noStroke();
    fill(254,213,198)
    triangle(276,290,300,200,320,290)
    
    noStroke();
    fill(254,213,198)
    ellipse(299,293,40,40)
    
    ellipse(280,293,20,20)
    
    noStroke();
    fill(254,213,198)
    ellipse(318,295,25,25)*/

    push();
    //mouth
    noStroke();
    fill(239,186,168)
    ellipse(300,h-245,65,30)
    
    //first tooth
    noStroke();
    fill(255,255,255)
    rect(284,h-260,10,10,2)
    
    //right tooth
    noStroke();
    fill(255,255,255)
    rect(296,h-260,10,10,2)
    
    //right tooth 2
    noStroke();
    fill(255,255,255)
    rect(308,h-260,10,10,2)
    pop();
    
    
    //dark cheeks
    noStroke();
    fill(239,186,168)
    ellipse(218,h-302,85,85);
    
    //cheeks
    noStroke();
    fill(254,213,198)
    ellipse(215,h-302,85,85);
    
    
    //cheeks right
     noStroke();
    fill(239,186,168)
    ellipse(380,h-302,85,85);
    
    //cheeks
    noStroke();
    fill(254,213,198)
    ellipse(383,h-302,85,85);
    
    //chin dark line
      noStroke();
    fill(239,186,168)
    ellipse(300,h-207,38,23);
    
    //chin
      noStroke();
    fill(254,213,198)
    ellipse(300,h-210,38,23);
   
   
    //eye lid
    noStroke();
    fill(239,186,168)
    ellipse(225,h-378,72,30)
    
    //eye lid 2
    noStroke();
    fill(239,186,168)
    ellipse(370,h-378,70,30)
    
    //eyes
    noStroke();
    fill(255,255,255)
    ellipse(h-375,225,70,30)
   
    noStroke();
    fill(255,255,255)
    ellipse(h-230,225,70,30)



    //pupils
    noStroke();
    fill(239,186,168)
   ellipse(h-370+wiggle,225,27,27)
    
    noStroke();
    fill(239,186,168)
    ellipse(h-230+wiggle,225,27,27)
   
    println("Caroline");
    textSize(600)
}

function mouseClicked(){
  eyexpos=random(210,240);
  eyexpos2=random(387,357);
  eyebrowypos=random(420,440)
  eyebrowypos2=random(420,440)
  mouthypos=40
  teethypos=340
  shoulderypos=random(400,430)
  hairypos=random(380,450)
  
  red=random(0,255);
  green=random(0,255);
  blue=random(0,255);


}


