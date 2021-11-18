// Starts the canvas 
const canvas = document.getElementById("game");
const context = canvas.getContext('2d');

// canvas size, ball velocity, ball size
let cPosX = canvas.width/2;
let cPosY = canvas.height/2;
let cVelX = 2;
let cVelY = 1;
let cRadius = 60;
let newRadiusValue = 90;
let ballColor = "hsl(180, 50%, 50%)";

// Function to draw canvas 
function draw(){
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawCircle();
    moveCircle();

    window.requestAnimationFrame(draw);
}
// Function to draw ball 
function drawCircle(){
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.fillStyle = ballColor; // define as: #FF0CE2 , rgb(255, 128, 35), "wheat"
    context.ellipse(cPosX, cPosY, cRadius, cRadius, 0, 0, 2*Math.PI);
    context.stroke();
    context.fill();
    
}

// Function for ball to be redrawn as it moves
function moveCircle(){
    if(cPosX+cRadius >= canvas.width || cPosX-cRadius  <= 0)
    {
        cVelX *= -1;
    }
    if(cPosY+cRadius >= canvas.height || cPosY-cRadius <= 0)
    {
        cVelY = cVelY * -1;
    }
    cPosX = cPosX + cVelX;
    cPosY = cPosY + cVelY;
}

draw();



// funtion to change ball color
const hueSlider = document.getElementById("hueValue");
const saturationSlider = document.getElementById("satValue");
const lightnessSlider = document.getElementById("lightValue");

let calculateColor = function(){
    let valueH = hueSlider.value;
    let valueS = saturationSlider.value;
    let valueL = lightnessSlider.value;
    let colValue = "hsl(" + valueH + ", " + valueS  + "% "  + ", " + valueL  + "%"  + ")";
    ballColor = colValue;
}

// slider controls to change ball color
hueSlider.addEventListener("change", calculateColor);
saturationSlider.addEventListener("change", calculateColor);
lightnessSlider.addEventListener("change", calculateColor);


// funtion to change ball size 
const sizeSlider = document.getElementById("ballSize");

let calculateSize = function(){
    let valueR = sizeSlider.value;
    let newRadiusValue = valueR;
    cRadius = newRadiusValue;
    console.log("Size change!!!");
}

sizeSlider.addEventListener("change", calculateSize);


// Function to count number times ball is clicked
var counterVal = 0;
canvas.addEventListener("click", function(event){
   //console.log(event);
  
   let mouseXp = event.pageX - event.target.offsetLeft;
   let mouseYp = event.pageY - event.target.offsetTop;
   console.log("Mouse X: " + mouseXp + " Mouse Y: " + mouseYp);

   let distX = Math.abs(cPosX - mouseXp);
   let distY = Math.abs(cPosY - mouseYp);
 
   if(distX < cRadius && distY < cRadius){
    console.log("HIT!!!");
    ++counterVal;
    document.getElementById("clickCount").innerHTML =  "Click Counter: " + counterVal;
    cVelX = cVelX * 1.25;
    cVelY = cVelY * 1.25;
    // document.getElementById("game").style.backgroundColor = "black";
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("game").style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;

}
});





