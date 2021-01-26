class Tree
{
	constructor(x,y)
	{
		var options={
            isStatic:true,	
           
			}
		this.x=x;
		this.y=y;
		
		
        this.body=Bodies.rectangle(this.x, this.y, 1,1 , options);
        this.image=loadImage('tree.png');
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			//rectMode(CENTER)
			//strokeWeight(4);
            
            imageMode(CENTER);
			image(this.image,0,0,400,600);
			pop()
			
	}

}