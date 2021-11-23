let posX;
let posY;

let velx; 
let velY;

let radius;
let circleClr;


var audio = new Audio('sound.mp3');

//UI
let sliderHue;
let clickCounter;
// let sliderSize;

// Starts the canvas 
function setup(){ // setup runs once, sets up the canvas
    let myCanvas = createCanvas(800, 600);
    myCanvas.parent('canvasParent');

    colorMode(HSB, 360, 100, 100);
    sliderHue = createSlider(0, 360, 0, 15);
    sliderHue.parent('canvasUI');
    sliderHue.style('width', '300px'); // need to change styling 

    // sliderSize = createSlider();
    // sliderSize.parent('ballSize');
    // sliderSize.style('width', '300px'); 

    posX = width/2;
    posY = height/2;
   
    velX = 2;
    velY = 1;

    radius = 50;
    circleClr = color(0, 100, 50);

    clickCounter = 0;

    audio.addEventListener("canplaythrough", event => {
        /* the audio is now playable; play it if permissions allow */
        audio.play();
      });
}

function draw(){ // draw runs on a loop over and over in the canvas
    background (0, 0, 0); // draws new background each time new ball drawn
    
// draws ball
    noStroke();
    circleClr = color(sliderHue.value(), 80, 100);
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

    function mouseReleased() {
        if (dist(mouseX, mouseY, posX, posY) < radius){
            console.log("HIT");
            clickCounter++;
            audio.play();

            document.getElementById("clickCount").innerHTML =  "Click Counter: " + clickCounter;

            // const randomColor = Math.floor(Math.random()*16777215).toString(16);
            // document.getElementById("game").style.backgroundColor = "#" + randomColor;

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

