class dropclass{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 5,options);
        this.radius=5;
        //this.createDrop=[];
        World.add(world, this.body);
        
            }
      display(){
       
       
        fill("blue")
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,5,5)
        
       
        
      }
  
      xandy(){
        if(this.body.position.y>height){
          Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
      }
}