let posX;
let posY;

let velx; 
let velY;

let radius;
let circleClr;



//UI


// Starts the canvas 
function setup(){ // setup runs once, sets up the canvas
    let myCanvas = createCanvas(800, 400);
    myCanvas.parent('canvasParent1'  );


    posX = width/2;
    posY = height/2;
   
    velX = 2;
    velY = 1;

    radius = 50;
    circleClr = color(0, 100, 100);

   

    
}

function draw(){ // draw runs on a loop over and over in the canvas
    background (0, 0, 0); // draws new background each time new ball drawn
    
// draws ball
    noStroke();
    circleClr = white;
    fill(circleClr);
    circle(posX, posY, radius * 2);

// makes ball bounce off walls
    if (posX + radius >= width || posX - radius <=0){
        velX = velX * -1;
    }
    if (posY + radius >= height || posY - radius <=0){
        velY = velY * -1;
    }
    posX += velX; 
    posY += velY;

    
    } // end of draw 


