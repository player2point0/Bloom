class Shape
{
    constructor(sides,size,width)
    {
        this.incr = (360/sides) - 0.0000000001;
        this.size = size;
        this.sides = sides;
        this.width = width;
        this.angle = 0;

        this.rdnColour();
        this.drawShape();
    }

    drawShape()
    {
        rotate(radians(this.angle));
        strokeWeight(this.width);
        stroke(this.r,this.g,this.b);
        fill(this.r, this.g, this.b, 20);
        
        if(this.sides % 2 == 0)
        {
            this.drawPointyShape();
            return;
        }

        beginShape();
        for(var theta = 0;theta<=360;theta+=this.incr)
        {
            var x = this.size * Math.sin(radians(theta));
            var y = this.size * Math.cos(radians(theta));
            
            vertex(x, y);
        }
        endShape(close);
    }
    
    drawPointyShape()
    {
        var count = 0;
        var x = 0;
        var y = 0;

        beginShape();
        for(var theta = 0;theta<=360;theta+=this.incr)
        {
            if(count % 2 == 0)
            {
                x = 0.85 * this.size * Math.sin(radians(theta));
                y = 0.85 * this.size * Math.cos(radians(theta));    
            }

            else
            {
                x = this.size * Math.sin(radians(theta));
                y = this.size * Math.cos(radians(theta));    
            }
            
            vertex(x, y);
            count++;            
        }
        endShape(close);
    }

    rotate(incr)
    {
        this.angle += incr;
    }

    rdnColour()
    {
        this.r = this.rndN(255);
        this.g = this.rndN(255);
        this.b = this.rndN(255);
    }

    rndN(Max)
    {
        return Math.floor(Math.random()*Max);
    }
}