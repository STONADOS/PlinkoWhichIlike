class player{
    constructor(y){
        var options = {
            restitution:1.0,
            // density:1.2
        }
        this.body = Bodies.circle(mouseX, y, 25, options);
        this.radius = 25;
        this.color = color(random(0, 255), random(0, 255), random(255));
        World.add(world, this.body);
    }
display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    fill(this.color);
    stroke(this.color);
    ellipseMode(CENTER);
    ellipse(0, 0, this.radius, this.radius);
    pop();

}
}