const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var monster,slingshot;
var backgroundImg,ground;
var superhero, slingshot, monster;

function preload() {
//preload the images here
backgroundImg = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(500,450,1000,20);
  superhero = new Hero(200,350,275);
  monster = new Monster(950,350,275);
  slingshot = new SlingShot(superhero.body, {x: 150, y: 150});

  block1 = new Block(650,430,40,40);
  block2 = new Block(650,410,40,40);
  block3 = new Block(650,390,40,40);
  block4 = new Block(650,370,40,40);
  block5 = new Block(650,350,40,40);
  block6 = new Block(650,330,40,40);
  block7 = new Block(650,310,40,40);
  
  block8 = new Block(700,290,40,40);
  block9 = new Block(700,270,40,40);
  block10 = new Block(700,250,40,40);
  block11 = new Block(700,430,40,40);
  block12 = new Block(700,410,40,40);
  block13 = new Block(700,390,40,40);
  
  block14 = new Block(750,370,40,40);
  block15 = new Block(750,350,40,40);
  block16 = new Block(750,330,40,40);
  block17 = new Block(750,310,40,40);
  block18 = new Block(750,290,40,40);
  block19 = new Block(750,430,40,40);
  block20 = new Block(750,410,40,40);
  block21 = new Block(750,390,40,40);
 
  block22 = new Block(800,370,40,40);
  block23 = new Block(800,350,40,40);
  block24 = new Block(800,330,40,40);
  block25 = new Block(800,430,40,40);
  block26 = new Block(800,410,40,40);

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  superhero.display();
  monster.display();
  ground.display();
  slingshot.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();

  block25.display();
  block26.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(superhero.body, {x: mouseX , y: mouseY});
}

