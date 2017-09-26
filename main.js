var Shapes;

function setup()
{
    createCanvas(window.innerWidth,window.innerHeight);
    translate(window.innerWidth/2, window.innerHeight/2);
    background(10,10,10);

    Shapes = [];

    for(var i = 3;i<20;i++)
    {
        Shapes.push(new Shape(i,i*i,2));
    }
}

function draw()
{
    clear();
    translate(window.innerWidth/2, window.innerHeight/2);
    background(10,10,10);

    for(var i = 0;i < Shapes.length;i++)
    {
        Shapes[i].rotate((i+1)/100);
        Shapes[i].drawShape();
    }
}
