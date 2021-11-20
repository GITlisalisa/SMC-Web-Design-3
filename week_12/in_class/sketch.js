let posX;
let posY;

let velx; 
let velY;

let radius;
let circleClr;

//UI
let sliderHue;
let clickCounter;

function setup(){ // setup runs once, sets up the canvas
    let myCanvas = createCanvas(800, 600);
    myCanvas.parent('canvasParent');

    colorMode(HSB, 360, 100, 100);
    sliderHue = createSlider(0, 360, 0, 15);
    sliderHue.parent('canvasUI');
    sliderHue.style('width', '100px');
    posX = width/2;
    posY = height/2;
   
    velX = 2;
    velY = 1;

    radius = 50;
    circleClr = color(0, 80, 100);

    clickCounter = 0;
}

function draw(){ // draw runs on a loop over and over in the canvas
background (120, 40 ,100);


noFill();
stroke(270, 80, 80);
strokeWeight(10);
rect(5, 5, 70, 30);

textSize(24);
fill(270, 80, 80);
strokeWeight(2);
text(clickCounter, 12, 28);


noStroke();
circleClr = color(sliderHue.value(), 80, 100);
fill( circleClr);
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

function mouseReleased() {
    if (dist(mouseX, mouseY, posX, posY) < radius){
        clickCounter++;
        // circleClr = color(255, 0, 0);
        // radius +=10;
        if(velX >0 ){
            velX++;
        }
        else {
            velX--;
        }
        if(velY >0 ){
            velY++;
        }
        else {
            velY--;
        }
    }
    else{
        // circleClr = color(0, 80, 100);
    }
}