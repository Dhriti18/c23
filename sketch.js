const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var box1,box2,ground;

function setup(){
    var canvas = createCanvas(400,400);
    myengine = Engine.create();
   // myworld is myengine's world
    myworld = myengine.world;

    box1= new Box(200,300,50,50);
    console.log(box1);
    box2= new Box(220,100,50,100);
    console.log(box2);
  ground= new Ground(200,380,400,20);
    console.log(box2);


}

function draw(){
    background(0);
    Engine.update(myengine);
    box1.display();
box2.display();
ground.display();
}