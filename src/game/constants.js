const canvas = document.querySelector("canvas");
canvas.width = 1000;
canvas.height = 600;
const ctx = canvas.getContext("2d");

class Game {
    constructor(width, height) {
        this.canvas = document.createElement("canvas");
        this.canvas.width = width || 640;
        this.canvas.height = height || 480;

        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
    }
}
export {canvas, ctx, Game}