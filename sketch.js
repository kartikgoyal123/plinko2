const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gamestate = "play";
var engine, world;
var ground;
var score =0;
var particle;
var count =0;
var division = [];
var plinkos = [];

var divisionHeight=300;



function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  
 for (var k = 0; k <=width;k = k + 80) {
    division.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
 }

 for (var j = 40; j <=width;j = j + 50) {
  plinkos.push(new Plinkos(j,75));
}
 for (var j = 15; j <=width-10;j = j + 50) {
  plinkos.push(new Plinkos(j,175));
}
 for (var j = 40; j <=width-20;j = j + 50) {
  plinkos.push(new Plinkos(j,275));
}
 for (var j = 15; j <=width-30;j = j + 50) {
  plinkos.push(new Plinkos(j,375));
}
}
function draw() {
  background("black");
  textSize(20) 
  text("Score : "+score,20,30);
  text("500",20,550);
  text("500",100,550);
  text("500",180,550);
  text("500",260,550);
  text("100",340,550);
  text("100",420,550);
  text("100",500,550);
  text("200",580,550);
  text("200",660,550);
  text("200",740,550) ;


  Engine.update(engine);

  ground.display();

  for (var k = 0; k < plinkos.length; k++ ){

    plinkos[k].display();
  }
  for (var k = 0; k < division.length; k++) {
     
    division[k].display();
  }
  if(particle!=null) {
     
    particle.display();
    if (particle.body.position.y > 760) {
     if (particle.body.position.x < 300) {
          score=score+500
      }
     if (particle.body.position.x > 301 && particle.body.position.x < 600) {
          score=score+100
   }
     if (particle.body.position.x > 601 && particle.body.position.x < 900) {
          score=score+200
 }
          particle=null;
 }
 }
       if(count>= 5){
         gamestate = "end";
         textSize(80) 
         text("GameOver",200,250);
       }
}

function mousePressed(){

    if(gamestate!=="end") {
        count++;
        particle=new Particle(mouseX,10,10,10);
    }

}