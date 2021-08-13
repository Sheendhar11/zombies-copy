const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bridge;
var stone;
var jointLink;
var jointPoint;
var engine;
var world;
var stones=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
 
  ground = new Wall (0,height-10,width*2,20);
  leftWall = new Wall (135,height/2+50,600,100); 
  rightWall = new Wall (width-300,height/2+50,600,100);
  bridge = new Bridge (15,{x:width/2-400,y:height/2});
  jointPoint = new Wall (width-600,height/2,40,20);
  Matter.Composite.add(bridge.body,jointPoint);
  jointLink = new Link (bridge,jointPoint);

  for(var i= 0; i < 8; i++){
    var x = random(width/2-200,width/2+300)
    var y = random(-10,140)
    var stone = new Stone(x,y,80,80)
    stones.push(stone)
  }

}

function draw() {
  background(51);
  Engine.update(engine);


  fill("black")
  text("x:"+mouseX+","+"y:"+mouseY,mouseX,mouseY)

  ground.display();
  leftWall.display();
  rightWall.display();
  bridge.show();
  for(var stone of stones){
    stone.display();
  }
}
