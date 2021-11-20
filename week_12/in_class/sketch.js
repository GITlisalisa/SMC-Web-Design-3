let posX;
let posY;

let velx; 
let velY;

let radius;
let circleClr;

function setup(){ // setup runs once, sets up the canvas
    let myCanvas = createCanvas(800,600);
    myCanvas.parent('canvasParent');

    colorMode(HSB, 360, 100, 100);

    posX = width/2;
    posY = height/2;
   
    velX = 4;
    velY = 3;

    let radius = 50;
    circleClr = color(0, 80, 100);
}

function draw(){ // draw runs on a loop over and over in the canvas
background (120, 40 ,100);


noFill();
stroke(270, 80, 80);
strokeWeight(10);
rect(200, 150, 200, 300);

fill( circleClr);
noStroke();
circle(posX,posY,radius * 2);
if (posX + radius >= width || posX - radius <=0){
    velX = velX * -1;
}
if (posY + radius >= height || posY - radius <=0){
    velY = velY * -1;
}
posX += velX; 
posY += velY;

} // end of draw 

function mouseReleased() {
    if (dist(mouseX, mouseY, posX, posY) < radius){
        circleClr = color(255, 0, 0);
    // radius +=10;
    }
    else{
        circleClr = color(204,102,0);
    }
}