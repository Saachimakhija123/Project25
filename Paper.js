class Paper {
    constructor(x,y,radius){

        this.paper=loadImage("paper.png");  
        
        
        

        var options ={
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2

        }
        
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius

        World.add(world,this.body)

    }

    display(){
        
        ellipseMode(CENTER);
      image(this.paper,this.body.position.x,this.body.position.y,50,35);
      
       
    
        //ellipse(this.body.position.x,this.body.position.y,this.radius);
    }
}