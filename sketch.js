const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,300,70,70);
    box2 = new Box(800,300,70,70);
    box3 = new Box(600,200,70,70)
    box4 = new Box(800,200,70,70)
    ground = new Ground(500,height,1000,20)
    pig1= new Pig (700,300);
    pig2 = new Pig(700,200);
    box5 = new Box(700,100,70,70)
    log1=new Log(700,250,290,PI/2)
    log2 = new Log(700,150,290,PI/2)
    log3=new Log(640,100,100,PI/7)
    log4 = new Log(790,100,100,-PI/7)
    bird = new Bird(300,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3 .display();
    box4.display();

    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
    box5.display();
}