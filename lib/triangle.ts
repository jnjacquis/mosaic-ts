import { Shape } from "./shape";
import { Box } from './box';
import { Point }  from './point';
import { Coordinates } from './coordinates';
import * as _ from 'lodash';

export class Triangle extends Shape {

    halfWidth: number;
    height: number;
    halfHeight: number;
    summits: Array<Point>;

    constructor(width: number, height: number, fillStyle: string, strokeStyle: string) {
        super();
        console.log("Triangle: width: " + width + ", height: " + height + ", fillStyle: " + fillStyle + ", strokeStyle: " + strokeStyle);
        this.halfWidth = width / 2;
        this.height = height;
        this.halfHeight = height / 2;
        this.fillStyle = fillStyle;
        this.strokeStyle = strokeStyle;
        this.summits = [];
        this.computeSummits();
    }

    private computeSummits() {
        this.summits[0] = new Point(this.halfWidth, 0, Coordinates.Polar);
        this.summits[1] = new Point(this.height, Math.PI / 2, Coordinates.Polar);
        this.summits[2] = new Point(this.halfWidth, Math.PI, Coordinates.Polar);
    }

    enclosing(angle: number): Box {
        let summit0 = this.summits[0].rotate(angle);
        let summit1 = this.summits[1].rotate(angle);
        let summit2 = this.summits[2].rotate(angle);
        let maxx = _.max([summit0[0], summit1[0], summit2[0]]);
        let minx = _.min([summit0[0], summit1[0], summit2[0]]);
        let maxy = _.max([summit0[1], summit1[1], summit2[1]]);
        let miny = _.min([summit0[1], summit1[1], summit2[1]]);
        let width = maxx - minx;
        let height = maxy - miny;
        console.log("Triangle: enclosing: width: " + width + ", height: " + height);
        return new Box(width, height);
    }

    draw(context: CanvasRenderingContext2D, x: number, y: number, angle: number) {
        console.log("Triangle: draw at x: " + x + ", y: " + y + ", with angle : " + angle);
        context.save();
        context.translate(x + this.halfWidth, y + this.halfHeight);
        context.rotate(angle);
        context.beginPath();
        context.fillStyle = this.fillStyle;
        context.moveTo(- this.halfWidth, - this.halfHeight);
        context.lineTo(this.halfWidth, - this.halfHeight);
        context.lineTo(0, this.halfHeight);
        context.lineTo(- this.halfWidth, - this.halfHeight);
        context.fill();
        context.restore();
    }
}