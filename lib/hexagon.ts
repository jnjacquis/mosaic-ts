import { Shape } from './shape';
import { Box } from './box';
import { Point }  from './point';
import { Coordinates } from './coordinates';
import * as _ from 'lodash';

export class Hexagon extends Shape {

    size: number;
    halfSize: number;
    fillStyle: string;
    strokeStyle: string;
    summits: Array<Point>;

    constructor(size: number, fillStyle: string, strokeStyle: string) {
        super();
        console.log("Hexagon: size: " + size + ", fillStyle: " + fillStyle + ", strokeStyle: " + strokeStyle);
        this.size = size;
        this.halfSize = size / 2;
        this.fillStyle = fillStyle;
        this.strokeStyle = strokeStyle;
        this.summits = [];
        this.computeSummits();
    }

    private computeSummits() {
        this.summits[0] = new Point(this.halfSize, 0, Coordinates.Polar);
        this.summits[1] = new Point(this.halfSize, Math.PI / 3, Coordinates.Polar);
        this.summits[2] = new Point(this.halfSize, 2 * Math.PI / 3, Coordinates.Polar);
        this.summits[3] = new Point(this.halfSize, Math.PI, Coordinates.Polar);
        this.summits[4] = new Point(this.halfSize, 4 * Math.PI / 3, Coordinates.Polar);
        this.summits[5] = new Point(this.halfSize, 5 * Math.PI / 3, Coordinates.Polar);
    }


    enclosing(angle: number): Box {
        let summit0 = this.summits[0].rotate(angle);
        let summit1 = this.summits[1].rotate(angle);
        let summit2 = this.summits[2].rotate(angle);
        let summit3 = this.summits[3].rotate(angle);
        let summit4 = this.summits[4].rotate(angle);
        let summit5 = this.summits[5].rotate(angle);
        let xSummits = [summit0[0], summit1[0], summit2[0], summit3[0], summit4[0], summit5[0]];
        let ySummits = [summit0[1], summit1[1], summit2[1], summit3[1], summit4[1], summit5[1]];
        let width = _.max(xSummits) - _.min(xSummits);
        let height = _.max(ySummits) - _.min(ySummits);
        console.log("Hexagon: enclosing: width: " + width + ", height: " + height);
        return new Box(width, height);
    }

    draw(context: CanvasRenderingContext2D, x: number, y: number, angle: number) {
        console.log("Hexagon: draw at x: " + x + ", y: " + y + ", with angle : " + angle);
        context.save();
        let box = this.enclosing(angle);
        context.translate(x + box.width / 2, y + box.height / 2);
        context.rotate(angle);
        context.beginPath();
        context.fillStyle = this.fillStyle;
        let currentAngle = 0;
        context.moveTo(this.halfSize * Math.cos(currentAngle), this.halfSize * Math.sin(currentAngle));
        for (let index = 0; index < 7; index++) {
            currentAngle += 60 * Math.PI / 180;
            context.lineTo(this.halfSize * Math.cos(currentAngle), this.halfSize * Math.sin(currentAngle));
        }
        context.fill();
        context.restore();
    }
}