import WorldObject from "./worldObject.js";
import { ctx } from "./constants.js";

export default class Rect extends WorldObject {
    constructor(x,y, width, height) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    fill(color='black') {
        ctx.fillStyle = color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }

    stroke(color='black',lineWidth=1) {
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.strokeRect(this.x,this.y,this.width,this.height);
    }

}