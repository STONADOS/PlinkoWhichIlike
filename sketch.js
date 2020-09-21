const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var score = 0;
var ground;

var balls = null;
var chances = 0;
var obstacle = [];
var divs = [];
var play= "huhu";
var gamestate = "start";

var gameplay = "playing";

function setup(){
    createCanvas(1400,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(700, 680, 14000, 40)

    for (var j = 70 ; j <= width; j+=90){
      obstacle.push(new obstacles(j, 125));
    }
    for (var j =23; j <= width; j+=90){
      obstacle.push(new obstacles(j, 215));
    }

    for (var j = 70 ; j <= width; j+=90){
      obstacle.push(new obstacles(j, 315));
    }

    for (var j = 0; j <= 1400;j = j+200){
      divs.push(new Ground(j, 590, 20, 150));
    }
}

function draw(){
    background("black");
    textSize(90);
    stroke("blue")
    fill("yellow");
    text("10", 50, 600);
    text("20", 250, 600);
    text("30", 450, 600);
    text("50", 650, 600);
    text("30", 850, 600);
    text("20", 1050, 600);
    text("10", 1250, 600);
    textSize(40);
    text("YoUr ScOrE : " + score, 100, 60);
    text("YoUr ChAnCeS : " + chances, 900, 60);

    Engine.update(engine);
 
    ground.display();

    for (var j = 0; j < obstacle.length; j++){
      obstacle[j].display();
    }
    
    if (gamestate == "start"){
    if(balls != null){
      balls.display();

      if (gameplay == "finished"){
      if (balls.body.position.y > 515){

        if(chances == 5){
          gamestate = "end";
        }
        if(balls.body.position.x >= 10 && balls.body.position.x <= 190 || 
          balls.body.position.x >= 1210 && balls.body.position.x <= 1390){
          score += 10; 
        }
        if(balls.body.position.x >= 210 && balls.body.position.x <= 390 || 
          balls.body.position.x >= 1010 && balls.body.position.x <= 1190){
          score += 20; 
        }
        if(balls.body.position.x >= 410 && balls.body.position.x <= 590 || 
          balls.body.position.x >= 810 && balls.body.position.x <= 990){
          score += 30; 
        }
        if(balls.body.position.x >= 610 && balls.body.position.x <= 790 ){
          score += 50; 
        }
        gameplay = "playing";
        play = "huhu";
      }
    }
    }
  }

    for (var j = 0; j < divs.length; j++){
      divs[j].display();
    }

    if (gamestate == "end"){
      textSize(110);
      fill("red");
      text("GaMe OvEr", 300, 350)
      if(keyWentDown("r")){
        gamestate = "start";
        gameplay = "playing";
        chances = 0;
        score = 0;
        balls = null
      }
    }
   }


function mouseDragged()
{
  if(play == "huhu"){
  if(gameplay != "finished"){
  chances++
  play = "nonu";
  gameplay = "finished";
  balls = new player(10);
  }
}
}