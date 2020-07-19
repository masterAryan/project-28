
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var box,box1;
var ground;
var ball;
var dbimg,db;
var sling;
function preload()
{
	dbimg = loadImage("dustbingreen.png");
	paperimg = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(width/2,650,800,50);
	box = new Box(width/1.45,580,10,100);
	box1 = new Box(width/1.25,580,10,100);
	ball = new Ball(50,60,10);
	sling = new SlingShot(ball.body,{x:200,y:200});
	Engine.run(engine);
	
  
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  ground.display();
  box.display();
  box1.display();
  ball.display();
  drawSprites();
  sling.display();
  image(dbimg,550,525,100,100);
  
  
 
}
// function keyPressed() {
// 	if (keyCode === UP_ARROW) {

// 	  Matter.Body.applyForce(ball.body,ball.body.position,{x:18,y:-12});

// 	}
// }
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    sling.fly();
}




