class Mango
{
	constructor(x,y,r)
	{
		var options={
            isStatic:true,	
            restitution	: 0,
            friction : 1,
            density : 1.2	
			}
		this.x=x;
		this.y=y;
		this.r=r
		
        this.body=Bodies.circle(this.x, this.y, this.r/2 , options);
        this.image=loadImage('mango.png');
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			//rectMode(CENTER)
			//strokeWeight(4);
            fill(128,128,128)
            imageMode(CENTER);
			image(this.image,0,0,this.r*2,this.r*2);
			pop()
			
	}

}