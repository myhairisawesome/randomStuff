import Vector from '../../library/vector.js';
import Ball from './ball.js';
import { canvas, ctx } from '../constants.js';


var ball = new Vector(200,200)
var vel = new Vector(0,0)
let mouseX;
let mouseY;

let x = new Array(100).fill(undefined).map(n => Math.floor(Math.random() * 5000));
let y = new Array(100).fill(undefined).map(n => Math.floor(Math.random() * 5000));

let MyLine = {
    originX:0,
    originY:0,
    moveToX:0,
    moveToY:0,
}

function game() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(let i=0; i<100; i++) {
        //ctx.fillStyle = "black";
        ctx.strokeRect(x[i],y[i],50,50);
        ctx.font = '20px Arial'
        ctx.fillText(`x:${x[i]} y:${y[i]}`,x[i], y[i])
    }

    if(ball.x <= mouseX + 5 && ball.x >= mouseX - 5 && ball.y <= mouseY + 5 && ball.y >= mouseY - 5) {
        vel.set(0,0)
    }

    ball.add(vel)

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(ball.x,ball.y,50,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(MyLine.originX,MyLine.originY);
    ctx.lineTo(MyLine.moveToX,MyLine.moveToY);
    ctx.stroke();
    ctx.closePath();
    
    requestAnimationFrame(game);
}

canvas.addEventListener('mousemove', (event) => {
    mouseX = event.clientX - canvas.offsetLeft;
    mouseY = event.clientY - canvas.offsetTop;

    ctx.translate(mouseX,mouseY)
    let a = new Vector(0,0);
    MyLine.moveToX = ball.x;
    MyLine.moveToY = ball.y;
    MyLine.originX = mouseX;
    MyLine.originY = mouseY;
    console.log(a)
    console.log(ball.x,ball.y)
    ctx.setTransform(1,0,0,1,0,0)
    
    if(ball.x <= mouseX + 10 && ball.x >= mouseX - 10 && ball.y <= mouseY + 10 && ball.y >= mouseY - 10) {
        vel.set(0,0)
    } else {
        vel.set(mouseX-ball.x,mouseY-ball.y)
        vel.normalize()
        vel.setMag(3)
    }

});

document.addEventListener("keydown", (event) => {
    if(event.keyCode == 32) {
        
    }
})
requestAnimationFrame(game);