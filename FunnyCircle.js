function Circle(x, y, radius)
{
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function getRandomHex()
{
    return Math.floor(Math.random()*255);
}

function getRandomColor()
{
    var red = getRandomHex();
    var blue = getRandomHex();
    var yellow = getRandomHex();
    return "rgb(" + red + "," + blue + "," + yellow + ")";
}

function createCircle()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random()*100);
    var color = getRandomColor();
    var x = Math.random()*window.innerWidth;
    var y = Math.random()*window.innerHeight;
    var circle = new Circle (x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function createMultipleCircle()
{
    for (let i = 0; i < 5; i++) createCircle();
}

setInterval(createMultipleCircle, 500);