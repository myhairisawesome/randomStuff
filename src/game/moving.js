import Vector from '../library/vector.js';
import Ball from './ball.js';
import {canvas, ctx} from './constants.js'

let bolas = [];

function gameScreen() {
    
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    bolas.forEach(ball => {
        ball.fill('red');
        ball.updatePosition();
    })

    requestAnimationFrame(gameScreen)
}

canvas.addEventListener("mousedown", (event) => {
    var date = new Date
    startTime = date.getTime();
});

canvas.addEventListener("mouseup", (event) => {
    var date = new Date();
    endTime = date.getTime();

    let mouseX = event.clientX - canvas.offsetLeft;
    let mouseY = event.clientY - canvas.offsetTop;
    
    bolas.push(new Ball(mouseX, mouseY, (endTime - startTime) / 10))    

});
let startTime;
let endTime;
requestAnimationFrame(gameScreen);