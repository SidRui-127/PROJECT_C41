class Raindrop {
    constructor(x, y, r){
        var options = {
            isStatic:false,
            restitution:0.6,
            friction:0.3,
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(75, 111, 155);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}
