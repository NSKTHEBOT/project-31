const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var createDrop=[];
var maxDrops=100;

function setup(){
    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;
  
    if(frameCount%50===0){
        for(var i=0;i<maxDrops ;i++){
            createDrop.push(new dropclass(random(0,400),random(0,400)));
        }
    }
  
    
}

function draw(){
  Engine.update(engine)
    background(0)
    
      
  
    for(var i=0;i<maxDrops ;i++){
        createDrop[i].display();
        createDrop[i].xandy();
    
  }
    
     



}   

