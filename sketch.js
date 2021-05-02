/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,height,400,20)
    pig1 = new Pig(200,200,50,50);
    bird = new Bird(300,300,50,50);



}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display(); 
    bird.display();

}*/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1 , engine , world

function setup(){
var canvas = createCanvas(400,400);
engine = Engine.create();
world = engine.world;

box1 = new Box(200,100,15,45);
box2 = new Box(300,100,30,30);
ground1 = new Ground(200, height, 400, 20);
pig1 = new Pig(100,200,45,15);
bird1 = new Bird(300,230,15,30);

}

function draw(){
background(0);
Engine.update(engine);
console.log(box2.body.position.x);
console.log(box2.body.position.y);
console.log(box2.body.angle);
box1.display();
box2.display();
ground1.display();
pig1.display();
bird1.display();

}