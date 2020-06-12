const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var holder_options={
    isStatic: true
  }

  holder = Bodies.rectangle(200,100,200,20,holder_options);
  World.add(world,holder);

  var ball_options = {
    restitution : 1.0,
    density : 1.0
  }

  ball  = Bodies.circle(220,200,40,ball_options);
  World.add(world,ball);


  var options = {
    bodyA : ball,
    bodyB : holder,
    stiffness: 0.004,
    length : 100
  }
  
  var chain = Constraint.create(options);
  World.add(world,chain);
}


function draw() {
  background(0); 
  Engine.update(engine);

  fill ("red");
  rectMode(CENTER);
  rect(holder.position.x,holder.position.y,200,20);

  fill("blue");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40);

  strokeWeight(8);
  stroke("green");
  line(ball.position.x,ball.position.y,holder.position.x,holder.position.y);
  
  text("Press space bar to oscillate the Pendulum left and right using mouse",40,20);
  text("Press enter key to set the Pendulum",100,50);
  
  if(keyCode ===ENTER){
    ball.position.x = 200;
  }
  else if(keyCode===32){
    ball.position.y = mouseY;
    ball.position.x = mouseX;
  }
}










