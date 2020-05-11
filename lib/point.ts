import { Coordinates } from './coordinates';

export class Point {
    x: number;
    y: number;
    r: number;
    a: number;

    constructor(c1: number, c2: number, cs: Coordinates) {
        if (cs === Coordinates.Cartesian) {
            this.x = c1;
            this.y = c2;
            this.computeRadius();
            this.computeAngle();
        } else {
            this.r = c1;
            this.a = c2;
            this.computeX();
            this.computeY();
        }
    }

    computeX() {
        this.x = this.r * Math.cos(this.a);
    }

    computeY() {
        this.y = this.r * Math.sin(this.a);
    }

    computeRadius() {
        this.r = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    computeAngle() {
        this.a = Math.atan(this.y / this.x);
    }

    rotate(angle: number): [number, number] {
        const newAngle = this.a + angle;
        const newX = this.r * Math.cos(newAngle);
        const newY = this.r * Math.sin(newAngle);
        return [newX, newY];
    }
}