import Vector from '../library/vector.js';
import FSM from './fsm.js';

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
// change these constants set up to a json based approach
canvas.width = 900;
canvas.height = 500;

// Setting up menu


// @todo
// Implement a blur effect on the letters and a zoom when the mouse moves over the button

function showMenu() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    // ctx.strokeStyle = "red";
    // ctx.strokeRect((canvas.width/2)-100,(canvas.height/2)-25,200,50);
    ctx.fillStyle = "white";
    ctx.font = "35px serif"
    ctx.fillText("Start", canvas.width/2-50,canvas.height/2+10);
}
function start(event) {
    let x = event.clientX - canvas.offsetLeft;
    let y = event.clientY - canvas.offsetTop;
    
    if(x >= 350 && x <= 550 && y >= 225 && y <= 275) {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        this.removeEventListener('click', start);
    }
}

canvas.addEventListener("click", start);
showMenu();

// game