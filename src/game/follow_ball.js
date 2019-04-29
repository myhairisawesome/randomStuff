import {canvas, ctx} from './constants.js';
import Ball from './ball.js';
import Rect from './rect.js';


function game() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ball.fill('RGB(0,255,0)');
    ball.updatePosition()


    requestAnimationFrame(game);
}

canvas.addEventListener('mousemove', (event) => {
    let mouseX = event.clientX - canvas.offsetLeft;
    let mouseY = event.clientY - canvas.offsetTop;

    ball.updatePosition(mouseX,mouseY)

})



let rectangle = new Rect(0,canvas.height-100,canvas.width,canvas.height);
let ball = new Ball(400,20,40,false);

requestAnimationFrame(game);