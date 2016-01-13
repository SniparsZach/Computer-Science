window.onload = function() {
var canvas=document.getElementById("myCanvas"); // grabs the canvas element
var context=canvas.getContext("2d"); // returns the 2d context object
var img=new Image(); //creates a variable for a new image
img.src= "pictures/fishgameboat.png"; // specifies the location of the image
context.drawImage(img,0,0); // draws the image at the specified x and y location
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,120);
ctx.lineTo(700,120);
ctx.stroke();