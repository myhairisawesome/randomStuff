import Vector from '../library/vector.js';

export default class WorldObject {
    constructor() {
        this.velocity = new Vector(0, 0);
        this.gravityAcceleration = new Vector(0,9.8/60);
        //this.applyphysics = true;
    }

    updatePosition() {
        this.applyForce();
    }

    applyForce() {
        this.velocity.add(this.gravityAcceleration);
        //this.velocity.sub(this.airResistance);
    }

}