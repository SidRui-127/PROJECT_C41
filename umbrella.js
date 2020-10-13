class Umbrella {
    constructor(x, y, r){
        var options = {
            isStatic:true,
        }
        this.image = loadImage("walking_1.png");

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
        fill(0, 0, 0);
        ellipse(0, 0, this.r, this.r);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r+100, this.r+100);
        pop();
    }
}
