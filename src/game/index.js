import FSM from './fsm.js';
import Vector from '../library/vector.js';
import Player from './Player.js';
import {movePlayer} from './event_handlers.js';

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
// change these constants set up to a json based approach
canvas.width = 900;
canvas.height = 500;



// Setting up menu


// @todo
// Implement a blur effect on the letters and a zoom when the mouse moves over the button

///*
let isRunning = false;
function showMenu() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    // ctx.strokeStyle = "red";
    // ctx.strokeRect((canvas.width/2)-100,(canvas.height/2)-25,200,50);
    ctx.scale(1,1);
    ctx.fillStyle = "white";
    ctx.filter = 'drop-shadow(1px 1px 2px #e9e9e9)';
    ctx.font = "35px serif"
    ctx.fillText("Start", canvas.width/2-50,canvas.height/2+10);
    ctx.setTransform(1,0,0,1,0,0);
}

function start(event) {
    let x = event.clientX - canvas.offsetLeft;
    let y = event.clientY - canvas.offsetTop;
    
    if(x >= 350 && x <= 550 && y >= 225 && y <= 275) {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        isRunning = true;
        this.removeEventListener('click', start);
        return game()
    }
}

canvas.addEventListener("click", start);
showMenu();
//*/


// let player = {
//     x:100,
//     y:100,
//     vx:0,
//     vy:0
// }

let player = new Vector(100,100)
let vel = new Vector(0,0);

function game() {
    player.x += vel.x;
    player.y += vel.y;
    setupScreen();
    ctx.fillRect(player.x + vel.x,player.y + vel.y, 20,20)
    ctx.strokeRect(player.x + vel.x,player.y + vel.y, 20,20)
    requestAnimationFrame(game)

}

function setupScreen() {
    ctx.fillStyle = "#e9e9e9";
    ctx.fillRect(0,0,canvas.width/2,canvas.height);
    ctx.fillStyle = "grey";
    ctx.fillRect(canvas.width/2,0,canvas.height,canvas.height);
}

let keyMap = {
    w:false,
    s:false,
    a:false,
    d:false,
    space:false
}
function loadEventListeners() {
    document.addEventListener("keydown", (event) => {
        //console.log(event.keyCode)
        if(event.keyCode == 87)
            keyMap.w = true;
        if(event.keyCode == 83)
            keyMap.s = true;
        if(event.keyCode == 65)
            keyMap.a = true;
        if(event.keyCode == 68)
            keyMap.d = true;
        if(event.keyCode == 32)
            keyMap.space = true;

        if(keyMap.w && keyMap.a) {
            vel.y = -5;
            vel.x = -5;
            vel.setMag(5);
        } 
        else if(keyMap.w) {
            vel.y = -5
            vel.x = 0;
        } else if(keyMap.a) {
            vel.x = -5;
            vel.y = 0;

        }
        if(keyMap.s && keyMap.d) {
            vel.y = 5;
            vel.x = 5;
            vel.setMag(5);
            vel.setMag(5);
        } else if(keyMap.s) {
            vel.x = 0;
            vel.y = 5;
        } else if(keyMap.d) {
            vel.x = 5;
            vel.y = 0;
        }

        if(keyMap.w && keyMap.d) {
            vel.x = 5;
            vel.y = -5;
            vel.setMag(5);
        }
        if(keyMap.s && keyMap.a) {
            vel.x = -5;
            vel.y = 5;
            vel.setMag(5);
        }

    });

    document.addEventListener("keyup", (event) => {
        if(event.keyCode == 87) {
            keyMap.w = false;
        }
        if(event.keyCode == 83) {
            keyMap.s = false;
        }
        if(event.keyCode == 65) {
            keyMap.a = false;
        }
        if(event.keyCode == 68) {
            keyMap.d = false;
        }
    })
}
loadEventListeners();
requestAnimationFrame(game)