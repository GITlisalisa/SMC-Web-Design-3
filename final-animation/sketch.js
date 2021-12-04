
let posX;
let posY;

let velx; 
let velY;

let radius;
let circleClr;

//UI

function setup(){ // setup runs once, sets up the canvas
    let myCanvas = createCanvas(800, 600);
    myCanvas.parent('canvasParent');

   
    
    posX = width/2;
    posY = height/2;
   
    velX = 20;
    velY = 20;

    radius = 50;
   

  
}

function draw(){ // draw runs on a loop over and over in the canvas
background (0, 0 ,0);





noStroke();
circleClr = color(255, 255, 255);
fill( circleClr);
stroke(0);
circle(posX, posY, radius * 2);
if (posX + radius >= width || posX - radius <=0){
    velX = velX * -1;
}
if (posY + radius >= height || posY - radius <=0){
    velY = velY * -1;
}
posX += velX; 
posY += velY;

} // end of draw 



