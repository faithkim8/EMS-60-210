

var noiseScale=0.1;


//setup is executed once at the launch
function setup() {
  createCanvas(600, 600);

}
    
//draw is executed every frame 60 times per second
function draw() {
  
  if(mouseY<(width/4)*2){
    noStroke()
    fill(0,0,0)}
  
    
    else if(mouseY<(width/4)*3){
    noStroke()
    fill(255,255,255)}
  
  else{
    var r=random(0,255)
    var g=random(0,255)
    var b=random(0,255)
    
    noStroke()
    fill(r,g,b)}
    
       
      

 
 rect(0,0,600,600);
  noStroke();
  
  /* background(0,0,0);
   stroke(0);*/
  for (var x=0; x < width; x=x+5) {
 
    var noiseVal = noise((mouseX+x)/**noiseScale*/, mouseY/**noiseScale*/);
    //strokeWeight(1)
    //stroke(noiseVal*255);
    strokeWeight(8)
    stroke(255,255,255)
    line(x, mouseY*noiseVal/*noiseVal*800*/, x, windowHeight+100);}
  
  
 
}
