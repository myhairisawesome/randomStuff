import {ctx} from './constants.js'
import WorldObject from './worldObject.js';

export default class Ball extends WorldObject{
    constructor(x,y,radius,applyPhysics=true){
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.applyPhysics = applyPhysics;
    }

    _pre() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        if(this.applyPhysics) {
            this.velocity.add(this.gravityAcceleration)
            this.x += this.velocity.x;
            this.y += this.velocity.y;
        }
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
}