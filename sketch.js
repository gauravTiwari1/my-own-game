const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
  bg = loadImage("bg2.jpg");
}

function setup() {
  createCanvas(1000,700);
  engine = Engine.create();
  world = engine.world;

  

  
}

function draw() {
  background(bg);
  Engine.update(engine);

 

}
