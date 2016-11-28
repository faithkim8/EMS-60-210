
var lastMinute;

function setup() {
  
  createCanvas(600,600);
  background(0);
  
  lastMinute = minute();
  lastSecond = second();
  
}

function draw() {

  background(240);
  
  var numOfHours = hour()
  var numOfMinutes = minute();
  var numOfSeconds = second();
  //var lastMinute = minute();
  
  
  
  /*fill(255);
  text("Hours: " + numOfHours, 35,500);
  
  fill(255);
  text("Minutes: " + numOfMinutes, 35,535);
 
  fill(255);
  text("Seconds: " + numOfSeconds, 35,570);*/
  
  
  //!= is "not"
  /*if(lastMinute!= minute()){
    
    lastMinute=minute();
    var r = random(200,255);
    var g = random(100,200);
    var b = random(50,200);
    fill(r,g,b);
    
    
  
  }*/
  
   if(lastSecond!= second()){
    lastSecond=second();
    var r = random(200,255);
    var g = random(100,220);
    var b = random(50,200);
    fill(r,g,b);
    
    }
  
  noStroke();
  ellipse(width/2,height/2,300,300);
  
  
  //need to draw ellipse outside of if statement
  //ellipse(width/2,height/2,100,100);
  
  

  
}