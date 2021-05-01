class Stone{

constructor(x,y){

var options={
restitution:0.8,
friction:0.9,
density:12
};
this.body=Bodies.rectangle(x,y,50,50,options);
this.width=50;
this.height=50;
World.add(world,this.body);

}
display(){
push();
translate(this.body.position.x,this.body.position.y);
angleMode(RADIANS);
rotate(this.body.angle);
rectMode(CENTER);
fill("blue");
strokeWeight(5);
stroke("purple");
rect(0,0,this.width,this.height);

}




}











