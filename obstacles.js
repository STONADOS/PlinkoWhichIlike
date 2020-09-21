class obstacles{
    constructor(x, y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 50;
        this.image = loadImage("sprites/polygon.png")
        World.add(world, this.body);
    }
display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius, this.radius);
    pop();
}
}