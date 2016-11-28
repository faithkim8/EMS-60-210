var lastSecond;
var numOfSeconds;
var lastMinute;
var numOfMinutes;
var lastMillisecond;
var numOfMilliseconds;
var lastHour;
var numOfHours;
var lolli1Array;
var lolli2Array;
var lolliM1Array;
var lolliMLArray;
var lolliML2Array;
var maxDiameter = 100; 
var theta =0; 






// ------------------------------------
function setup() {
  createCanvas(800,800);
  background(28,76,125);
}


function draw() {
  background(17,58,72);

    
    
 //MILLISECONDS
if(lastMillisecond != millis()){
    lastMillisecond = millis();
    
  lolliMLArray = []; // make blank Lollipop array, contains nothing yet
  lolliMLArray2= [];
  lolliMLArray3 = [];
  for (var k=0; k<60; k++) { // create 60 lollis and push them into array
    var numsx5 = random(150,450); // pick random x 
    var numsy6 = random(425,450); // pick random y
    var numsx7 = random(350,580);
    var numsy8 = random(380,400);
    var numsx9 = random(250,500);
    var numsy10 = random(390,420);
    var position3 = [numsx5, numsy6]; // basically packaging x and y into one array
    var position4 = [numsx7,numsy8];
    var position5 = [numsx9,numsy10];
    lolliMLArray.push(position3);
    lolliMLArray2.push(position4);
    lolliMLArray3.push(position5);
  
    }
    } 

// draw all 60 saved lollis
  for (var k=0; k< 10; k++){//drawing the lollies
   lollyML(lolliMLArray[k][0],lolliMLArray[k][1], 5);
   lollyML2(lolliMLArray2[k][0],lolliMLArray2[k][1], 5);
   lollyML2(lolliMLArray3[k][0],lolliMLArray3[k][1], 5);
   
    }  
    
//HOURS
if(lastHour!= hour()){
    lastHour=hour();
    
    var r = random(200,255);
    var g = random(100,220);
    var b = random(50,200);
    fill(r,g,b);
    }

var diam = (sin(theta) * maxDiameter/2) + maxDiameter/2;
  lollyH(370,450,diam);
  theta += .04;


    
    
 //planes   
{

noStroke();

fill(100,55,60);
 beginShape();
 vertex(350,350);
 vertex(100,440);
 
 vertex(350,350);
 vertex(100,440);
 
 vertex(430,470);
 vertex(630,370);
 endShape(CLOSE);
 
 
 
 //top layer
 fill(190,94,100);
 beginShape();
 vertex(350,320);
 vertex(100,410);
 
 
 vertex(350,320);
 vertex(100,410);
 
 vertex(430,440);
 vertex(630,340);
 endShape(CLOSE);
 
 fill(0);
 

}

function lolly (x,y,head){
    noStroke()
    fill(242,249,41);
    rect(x-2.1,y,2,150);
    
    fill(242,249,41);
    ellipse(x,y,head,head);
}

function lolly2 (x,y,head){
    noStroke()
    fill(242,249,41);
    rect(x-2.1,y,1.5,180);
    
    fill(242,249,41);
    ellipse(x,y,head,head);
}

function lollyM1(x,y,head){
  noStroke()
    fill(190,94,80);
    rect(x-2.1,y,3,300);
    
    fill(190,94,80);
    ellipse(x,y,head,head);
}

function lollyML (x,y,head){
  noStroke()
    fill(190,94,80);
    rect(x-1.3,y,1.5,70);
    
    fill(190,94,80);
    ellipse(x,y+70,head,head);
}

function lollyML2 (x,y,head){
  noStroke()
    fill(190,94,100);
    rect(x-1.3,y,1.5,70);
    
    fill(190,94,100);
    ellipse(x,y+70,head,head);
}

function lollyH (x,y,diam){
  noStroke()
    fill(r,g,b);
    rect(x-1.3,y,3,180);
    
    fill(r,g,b);
    ellipse(x,y+180,diam,diam);
}



function bounce (numsy){
  var bounceH = random (200,220) ;
  return numsy + bounceH;
  
}



//SECONDS
if(lastSecond != second()){
    lastSecond = second();
    
    
    lolli1Array = []; // make blank Lollipop array, contains nothing yet
    lolli2Array = [];
  for (var i=0; i<60; i++) { // create 60 lollis and push them into array
    var numsx = random(250,520); // pick random x 
    var numsy = random(200,250); // pick random y
    var numsx2 = random(200,460);
    var numsy2 = random(190,240);
    var position = [numsx,numsy]; // basically packaging x and y into one array
    var position2 = [numsx2,numsy2];
    lolli1Array.push(position);
    lolli2Array.push(position2);
    
   }
}

// draw all 60 saved lollis
  for (var i=0; i< 30; i++){//drawing the lollies
   lolly(lolli1Array[i][0],lolli1Array[i][1], 10);
   lolly2(lolli2Array[i][0],lolli2Array[i][1],10);
  }
  
//MINUTES
if(lastMinute != minute()){
    lastMinute = minute();
    
    lolliM1Array = []; // make blank Lollipop array, contains nothing yet
  for (var l=0; l<60; l++) { // create 60 lollis and push them into array
    var numsx3 = random(195,510); // pick random x 
    var numsy4 = random(70,105); // pick random y
    var position2 = [numsx3, numsy4]; // basically packaging x and y into one array
    lolliM1Array.push(position2);
    }
    }


// draw all 60 saved lollis
  for (var l=0; l< 10; l++){//drawing the lollies
   lollyM1(lolliM1Array[l][0],lolliM1Array[l][1], 25);
  }

 


  
  
  
  

  
  
  
  
  
  
  
  
}


  
  
  


  
  
  

  

  
  
  
  








   
   
    


/*if(lastSecond != second()){
    lastSecond = second();
   
for (var i=0; i<60; i++) {
    numsx = random(250,480);
    numsy = random(220,255);
    
  }
}*/



/*var dArray = [[A,B,C] , [D,E,F], [G,H,I]]

dArray[0][0] = A;
dArray[1][2] = F;
*/

    
  
  
  
  

