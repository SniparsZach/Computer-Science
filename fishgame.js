var myCanvas = document.getElementById("myCanvas");
var fishs = [];
var pole = [];
var ctx = myCanvas.getContext("2d");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("fishgameboat");

ctx.moveTo(0,120);
ctx.lineTo(700,120);
ctx.stroke();
ctx.drawImage(img, 200, 55, 210.740741, 90);

function Fish(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.height = 12;
    this.width = 15;
    ctx.fillstyle = "#FFA500";
    this.draw = function() {
        ctx.rect(this.xPos, this.yPos, this.width, this.height);
        ctx.stroke();
    };
    
    this.move = function() {
        if(this.yPos < 119) {
            
        } else {
            this.xPos -= -1;
            this.yPos -= 0;           
        }

    };
}

var wave1 = setInterval(function(){
    
    var tempRand = myCanvas.height / 3 + Math.random() *  myCanvas.height/3*2;
    fishs.push(new Fish(0, tempRand));

}, 1500);

var box = {
    xPos: 270,
    yPos: 125,
    goLeft: false,
    goRight: false,
    goUp: true,
    goDown: true,
    move: function(){

        if(box.goUp && box.yPos > 120){
            this.yPos -= 5;    
        }
        if(box.goDown && box.yPos < 340){
            this.yPos += 5;    
        }
        console.log(this.xPos);
    },
    draw: function(){
        ctx.rect(box.xPos,box.yPos,10,10);
        ctx.fillRect(box.xPos,box.yPos ,10,10);
        ctx.stroke();
    }
}


document.addEventListener("keydown", function(evt){
    if(evt.keyCode === 37){
        box.goLeft = true;
    }
    if(evt.keyCode === 38){
        box.goUp = true;
    }
    if(evt.keyCode === 39){
        box.goRight = true;
    }
    if(evt.keyCode === 40){
        box.goDown = true;        
    }    
    
});

document.addEventListener("keyup", function(evt){
    if(evt.keyCode === 37){
        box.goLeft = false;
    }
    if(evt.keyCode === 38){
        box.goUp = false;
    }
    if(evt.keyCode === 39){
        box.goRight = false;
    }
    if(evt.keyCode === 40){
        box.goDown = false;        
    }    
})

function gameLoop() {
    ctx.beginPath();
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    // Draw Background Colors
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0,0,700,400);
    ctx.fillStyle = "#668FFF";
    ctx.fillRect(0,120,700,280);
    // Draw Boat
    ctx.drawImage(img, 280, 55, 210.740741, 90);
    
    ctx.fillStyle = "#000000";
    box.move();
    box.draw();
    
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(300,100);
    ctx.lineTo(275,70);
    ctx.lineTo(275, box.yPos);
    ctx.stroke();

    for (var i = 0; i < fishs.length; i++) {
        fishs[i].move();
        fishs[i].draw();
        if(isColliding(fishs[i],box)){
            fishs.splice(i,1);
        }
    }

    window.requestAnimationFrame(gameLoop)
}

function isColliding(box, fishs){
    console.log(box, fishs);
    var isLeft = fishs.xPos + fishs.width < box.xPos;
    var isRight = fishs.xPos > box.xPos + box.width;
    var isBelow = fishs.yPos + fishs.height < box.yPos;
    var isAbove = fishs.yPos > box.yPos + box.height;
    return !(isRight||isLeft||isAbove||isBelow);
}

gameLoop();