import Vector from '../library/vector.js';
import {movePlayer} from './event_handlers.js';

export default class Player {
    constructor() {
        this.lifePoints = 100;
        this.coordinates = new Vector(100,100);
        this.event_handler = {x:0,y:0};
    }

    checkCollision(event_handler) {
        console.log('i hate myself')   
    }

    sayHi() {
        console.log(this.coordinates)
    }

    update() {
        this.coordinates.x += this.event_handler.x
        this.coordinates.y += this.event_handler.y
    }
    draw(ctx) {
        ctx.fillStlye = "red";
        ctx.fillRect(this.coordinates.x, this.coordinates.y,20,20);
        ctx.strokeRect(this.coordinates.x, this.coordinates.y,20,20);
    }
    moving(event) {
        console.log(event.keyCode)
        if(event.keyCode == 87) {
            this.coordinates.y -= 10;
        }
        // if(event.keyCode == 83) {
        //     this.coordinates.y -= 10;
        // }
        // if(event.keyCode == 81) {
        //     this.coordinates.y -= 10;
        // }
        // if(event.keyCode == 89) {
        //     this.coordinates.y -= 10;
        // }
    
        //this.event_handler = movePlayer(event);
    }
}