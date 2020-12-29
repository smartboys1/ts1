class Block{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.4,
          'friction':0.0,
         // 'density':1.0
      }
      this.Visbility=255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed);
      
    if(this.body.speed<3){
      var angle = this.body.angle;
      var pos=this.body.position;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
     // rectMode(center);
      rect(0,0,this.width,this.height);
       pop();

    }else{
     // world.remove(world,this.body);
      push()
      this.Visbility=this.Visbility-9;
      pop()
    }
     
    }
}