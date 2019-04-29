export default class Vector {
    
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    set(x,y) {
        this.x = x;
        this.y = y;
    }

    add(vector) {
        return {x:this.x += vector.x, y:this.y += vector.y};
    }

    static add(vector1,vector2) {
        return {x:vector1.x+vector2.x,y:vector1.y+vector2.y}
    }

    sub(vector) {
        return {x:this.x -= vector.x, y:this.y -= vector.y};
    }

    static sub(vector1,vector2) {
        //if((vector1 && vector2) instanceof Vector){
            return new Vector(vector1.x - vector2.x, vector1.y - vector2.y);
        //} else {
          //  console.log('it is not instance of vector');
        //}
    }

    mult(factor) {
        this.x *= factor;
        this.y *= factor;
    }

    static mult(factor) {
        return {x:this.x*factor, y:this.y*factor}
    }

    div(factor) {
        this.x /= factor;
        this.y /= factor
    }

    static div(vector,factor) {
        return {
            x : vector.x / factor,
            y : vector.y / factor
        }
    }

    mag() {
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
    }

    magSq() {
        return this.x*this.x + this.y*this.y;
    }

    setMag(value) {
        this.normalize()
        this.mult(value)
    }

    normalize() {
        var len = this.mag()
        if(len !== 0) this.mult(1/len);
        return this;
    }

    dotProduct(vector) {
        return this.x*vector.x+this.y*vector.y;
    }

    projection(vector) {
        let scalarPojection = this.dotProduct(vector)/(Math.pow(vector.x,2) + Math.pow(vector.y,2));
        return new Vector(scalarPojection*vector.x, scalarPojection*vector.y)
    }

    reflection(vector) {
        vector.normalize();
        let a = (2 * this.dotProduct(vector));
    }

    distance(vector) {
        return Math.sqrt(Math.pow(vector.x - this.x,2) + Math.pow(vector.y - this.y,2));
    }

    static distance(vector1,vector2) {
        return Math.sqrt(Math.pow(vector1.x - vector2.x,2) + Math.pow(vector1.y - vector2.y,2));
    }

    copy() {
        return new Vector(this.x,this.y)
    }

    limit(value) {
        let msq = this.magSq();
        if(msq > value*value) {
            this.div(Math.sqrt(msq))
            this.mult(value)
        }
        return this;
    }

    static random2D() {
        return {
            x : Math.random() * 2 - 1,
            y : Math.random() * 2 - 1
        }
    }
}