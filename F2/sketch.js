var a,b,c,d

function setup(){
createCanvas(1200,600);
b=Matter.Engine.create()
a=Matter.Bodies.rectangle(600,300,40,40);
c=Matter.Bodies.rectangle(600,580,1200,20)
d=Matter.Bodies.circle(500,300,30)
Matter.World.add(b.world,a);
Matter.World.add(b.world,c)
Matter.World.add(b.world,d)
c.isStatic=true
a.restitution=1.7
d.restitution=1
}

function draw(){
background("black");
Matter.Engine.update(b)
rectMode(CENTER)
d.position.x=mouseX
d.position.y=mouseY
rect(a.position.x,a.position.y,40,40)
rect(c.position.x,c.position.y,1200,20)
ellipseMode(RADIUS)
ellipse(d.position.x,d.position.y,30,30)
}