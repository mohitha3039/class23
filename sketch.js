const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myWorld , myEngine , box, ground 




function setup() {
  createCanvas(800,800);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  var features = {
    isStatic : false,
    restitution : 1
  
  }
  var groundfeatures ={
    isStatic : true 
  }
  box = Bodies.rectangle (400,400,60,60,features)
  World.add(myWorld,box)
 ground = Bodies.rectangle (400,780,800,10,groundfeatures) 
 World.add(myWorld,ground)



}

function draw() {
  background("black"); 
  Engine.update(myEngine)
 rectMode(CENTER)
 rect(box.position.x,box.position.y,50,50)
rectMode (CENTER)
rect(ground.position.x,ground.position.y,800,10)



   
}


