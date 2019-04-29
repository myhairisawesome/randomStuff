import {ctx} from '../constants.js';
import Vector from '../../library/vector.js';

export default class Ball {
    constructor(x,y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    _pre() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
    }

    stroke(strokeColor="black", lineWidth=1) {
        this._pre();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = strokeColor;
        ctx.stroke();
        ctx.closePath();
    }
    
    fill(fillColor="blue") {
        this._pre();
        ctx.fillStyle = fillColor;
        ctx.fill();
        ctx.closePath();
    }

    update(x,y) {
        this.x = x;
        this.y = y;
    }

}