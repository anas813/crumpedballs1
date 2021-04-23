
class Paper {
    constructor(x,y,width,height) {
        var options={
        isstatic:true,
        'restitution':0,
        'friction':0,
        'density':1.2
    }
     this.body = Bodies.circle(x,y,radius,options);
     this.radius=radius
    
     world.add(world, this.body);
    }
    display() {
        ellipseMode(RADIUS);
    
        Fill("blue");
    
        rect(this.body.position.x, this.body.position.y, this.radius);
       }
    };