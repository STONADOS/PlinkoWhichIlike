class striker {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          friction:0.3,
          density:2.2,
          restitution:10
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("purple");
      stroke("orange");
      strokeWeight(5); 
      rect(pos.x, pos.y, this.width, this.height);
    }
  }