var scribble = new Scribble();
var names = ["bob.","larry.","kate.","clyde.", "kimberley.","jamika.", 
"timika.", 
"mariann.", 
"sharell.", 
"shiela.", 
"kattie.", 
"carmon.", 
"estrella.", 
"loriann.", 
"lani.", 
"wendi.", 
"maritza.", 
"jeanetta.", 
"marian.", 
"aiko.", 
"gia.", 
"sindy.", 
"shemika.", 
"kenisha.", 
"florene.", 
"dennise.", 
"amy.",
"olive.", 
"isabella.", 
"brigitte.", 
"chau.", 
"karolyn.", 
"mellie.", 
"tatum.", "nathanial.", 
"ezekiel.", 
"kris.", 
"jimmy.", 
"denny.", 
"santos.", 
"richie.", 
"owen.", 
"barton.", 
"erick.", 
"rickey.", 
"michel.", 
"gino.", 
"thanh.", 
"nicky.", 
"ashley.", 
"jerome.",
"james.", 
"jeremy.", 
"rudolf.", 
"kelley.", 
"clarence.", 
"quinn.", 
"reynaldo.", 
"carlton.", 
"jae.", 
"joan.", 
"lesley.",
"odis.", 
"jefferey."  ];
var things = ["ketchup.","pie.","cats.","camera.","smart water.","watch.",
"tennis.","shoes.","record player.","grain.",
"stove.",
"zebra.",
"love.",
"underwear.",
"knee.",
"friend.",
"fireman.",
"potato.",
"fuel.",
"army.",
"frogs.",
"rake.",
"bead.",
"division.",
"plate.",
"tooth.",
"cakes.",
"earthquake.",
"expert.",
"sand.",
"needle.",
"riddle.",
"crate.",
"coil.",
"calendar.",
"seed.",
"governor.",
"bait.",
"crib.",
"haircut.",
"steam.",
"health.",
"effect.",
"basin.",
"clover.",
"sofa.",
"side.",
"lip.",
"jelly.",
"rings.",
"table.",
"bag.",
"dad.",
"church.",
"cake.",
"daughter.",
"plane.",
"quartz.",
"sheet.", "increase.",
"crook.",
"crowd.",
"vein.",
"home.",
"pot.",
"soap.",
"credit.",
"pocket.",
"place.",
"slave.",
"rose.",
"mask.",
"knot.",
"stew.",
"stocking.",
"kittens.",
"rice.",
"government.",
"cushion.",
"boot.",
"bed.",
"meeting.",
"geese.",
"school.",
"calculator.",
"purpose.",
"engine.",
"pull.",
"pest.",
"base.",
"linen.",
"mom.",
"north.",
"trucks.",
"ship.",
"airport.",
"actor.",
"wound.",
"umbrella.",
"discovery.",
"jam.",
"month.",
"cloth.",
"town.",
"range.",
"pies.",
"tent.",
"business.",
"gun."];
var mood = ["angry.","happy.","sad.","aggravated.",
"amused.","angry.", "annoyed.","anxious.","apathetic.","bewildered.","blissful.",
"dreamy.", "depressed.", "crazy.","dreamy.","giggly","hopeful.", "lonely.","loved.",
"stressed.","weird.", "lazy.", "mellow.","flirty.", "crappy.", "cheerful.",
"complacent.",
"confused.",
"content.",
"cranky.",
"crappy.",
"crazy.",
"curious.",
"cynical.",
"depressed.",
"devious.",
"disappointed.",
"discontent.",
"ditzy.",
"dreamy.",
"ecstatic.",
"energetic.",
"enraged.",
"enthralled.",
"envious.",
"excited.",
"flirty.",
"frustrated.",
"giddy.",
"giggly.",
"gloomy.",
"good.",
"grateful.",
"grumpy.",
"guilty.",
"happy.",
"high.",
"hopeful.",
"impressed.",
"indifferent.",
"infuriated.",
"irate.",
"irritated.",
"iealous.",
"joyful.",
"jubilant.",
"lazy.",
"lethargic.",
"listless.",
"lonely.",
"loved.",
"mad.",
"melancholy.",
"mellow.",
"mischievous.",
"moody.",
"mournful.",
"numb.",
"optimistic.",
"peaceful.",
"pessimistic.",
"pleased.",
"rejected.",
"rejuvenated.",
"relaxed.",
"relieved.",
"restless.",
"sad.",
"satisfied.",
"shocked.",
"silly.",
"smart.",
"stressed.",
"surprised.",
"sympathetic.",
"thankful.",
"uncomfortable."];

var index = 0;

function setup() {
  createCanvas(600,600);
  background(255);
 
}

function draw() {
}



function mousePressed( ){
  background(255);
  face();
  words();
}


function words(){
  randomMoods();
  randomNames();
  randomThings();
}

function randomMoods(){
fill(0);
textSize(15);
text(random(mood),(width/2)-15,490);
}

function randomNames(){
  fill(0);
  textSize(15);
  text(random(names),(width/2)-15,450);
}

function randomThings(){
  fill(0);
  textSize(15);
  text(random(things),(width/2)-15,470);
}


function face(){
  outline();
  eye(); 
  pupil();
  mouth1();
  eyebrows();
  AllTheNoses();
  AllTheHairs();
}

function outline(){
  noFill(0);
  strokeWeight( 1 );
  faceWidth = random(100,200);
  faceHeight = random(120,230);
  
  scribble.bowing = random(1,8);    
  scribble.roughness = random(1,3);
  scribble.numEllipseSteps = 5;
  scribble.maxOffset = random(1,5);  
  scribble.scribbleEllipse( width/2, height/2, faceWidth, faceHeight );
}

function eye(){
  noFill(0);
  var eyeWidth = random(20,40);
  var eyeHeight = random(8,15);
  var x = random(30,45);

  scribble.roughness = (1);
  scribble.scribbleEllipse( (width/2)-x, height/2-2, eyeWidth, eyeHeight );
  scribble.scribbleEllipse( (width/2)+x, height/2-2, eyeWidth, eyeHeight );
}

function pupil(){
  var pupilWidth = random(5,20);
  var pupilHeight = random(5,15);
  var x = random(30,40);
  
  fill(0);
  scribble.roughness = (1);
  scribble.scribbleEllipse( (width/2)-x, height/2-2, pupilWidth, pupilHeight );
  scribble.scribbleEllipse( (width/2)+x, height/2-2, pupilWidth, pupilHeight );
}

function mouth1(){
  var x = random(5,30);
  var y = random(5,10);
  
  fill(0);
  scribble.roughness = (1);
  scribble.roughness = (1);
  scribble.scribbleEllipse( (width/2), height/2+50, x, y );
}


function eyebrows(){

  var x = random(10,40);
  var y = random(2,10);

  scribble.bowing = random(1,3);    
  scribble.roughness = random(1,2);
  scribble.numEllipseSteps = 5;
  scribble.scribbleRect( (width/2)-35, (height/2)-30, x, y );
  scribble.scribbleRect( (width/2)+35, (height/2)-30, x, y );
  
  
 
}

function nose1(){
  noFill();
  var x = random(5,20);
  
  scribble.roughness = (1);
  scribble.scribbleCurve( (width/2), (height/2)-x, (width/2)-2, (height/2)+30, (width/2)-3, (height/2)+30, (width/2)+3, (height/2)+30 );
}

function nose2(){
  var x = random(5,20);
  
  scribble.roughness = (1);
  scribble.scribbleCurve( (width/2), (height/2)-x, (width/2)-10, (height/2)+30, (width/2)-3, (height/2)+30, (width/2)+3, (height/2)+30 );
}

function nose3(){
  var x = random(5,20);
  
  scribble.roughness = (1);
  scribble.scribbleCurve( (width/2), (height/2)-x, (width/2)-20, (height/2)+40, (width/2)-3, (height/2)+30, (width/2)+20, (height/2)+40 );
}

function AllTheNoses(){
var ranNum = int(random(1,4));
println(ranNum);
if(ranNum == 1){
  nose1();
}

else if(ranNum == 2){
  nose2();
}

else{
  nose3();
}
}

function AllTheHairs(){
  var ranNum = int(random(1,4));

if(ranNum == 1){
  hair1();
}

else if(ranNum == 2){
  hair2();
}

else{
  bangs();
}
  
}

function hair1(){
  scribble.bowing = random(1,8);    
  scribble.roughness = random(1,10);
  scribble.numEllipseSteps = 5;
  scribble.maxOffset = random(1,5);  
  var hairLength = random(100,300);
  var howMuch = random(1,20);
  for( var i=0; i<howMuch;i++){
  scribble.scribbleLine( width/2,((height/2)-(faceHeight/2)), width/2, hairLength );
  }
}
  
  function hair2(){
  scribble.bowing = random(1,50);
  scribble.roughness = random(1,20);
  scribble.maxOffset = random(1,50);  
  var hairLength = random(width/2,500);
  var howMuch = random(1,10);
  var position = random(200,300);
  var long = random(300,500);
  for( var i=0; i<howMuch;i++){
  scribble.scribbleCurve( width/2,((height/2)-(faceHeight/2)),200, long, 200, 200, 200, 300);
  scribble.scribbleCurve( width/2,((height/2)-(faceHeight/2)),400, long, 400, 200, 400, 300);
  }
  }
  
  function bangs(){
  scribble.bowing = random(1,5);
  scribble.roughness = random(1,10);
  scribble.maxOffset = random(1,5);  
  var long = random(width/2,500);
  
  var hairLength = random( ((height/2)-(faceHeight/2)),300 );
  var howMuch = random(1,10);
  for( var i=0; i<howMuch;i++){
  scribble.scribbleLine( width/2,((height/2)-(faceHeight/2)), width/2, hairLength );
  scribble.scribbleCurve( width/2,((height/2)-(faceHeight/2)),200, long, 200, 200, 200, 300);
  scribble.scribbleCurve( width/2,((height/2)-(faceHeight/2)),400, long, 400, 200, 400, 300);
  }
  
  
}

