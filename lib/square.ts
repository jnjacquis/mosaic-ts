import { Shape } from './shape';
import { Box } from './box';
import { Point }  from './point';
import { Coordinates } from './coordinates';

export class Square extends Shape {

    size: number;
    halfSize: number;
    fillStyle: string;
    strokeStyle: string;
    summits: Array<Point>;

    constructor(size: number, fillStyle: string, strokeStyle: string) {
        super();
        console.log("Square: size: " + size + ", fillStyle: " + fillStyle + ", strokeStyle: " + strokeStyle);
        this.size = size;
        this.halfSize = size / 2;
        this.fillStyle = fillStyle;
        this.strokeStyle = strokeStyle;
        this.summits = [];
        this.computeSummits();
    }

    private computeSummits() {
        this.summits[0] = new Point(this.halfSize * Math.SQRT2, Math.PI / 4, Coordinates.Polar);
        this.summits[1] = new Point(this.halfSize * Math.SQRT2, 3 * Math.PI / 4, Coordinates.Polar);
        this.summits[2] = new Point(this.halfSize * Math.SQRT2, 5 * Math.PI / 4, Coordinates.Polar);
        this.summits[3] = new Point(this.halfSize * Math.SQRT2, 7 * Math.PI / 4, Coordinates.Polar);
    }

    enclosing(angle: number): Box {
        let summit0 = this.summits[0].rotate(angle);
        let summit1 = this.summits[1].rotate(angle);
        let summit2 = this.summits[2].rotate(angle);
        let summit3 = this.summits[3].rotate(angle);
        let width = summit3[0] - summit1[0];
        let height = summit0[1] - summit2[1];
        return new Box(width, height);
    }

    draw(context: CanvasRenderingContext2D, x: number, y: number, angle: number) {
        console.log("Square: draw at x: " + x + ", y: " + y + ", with angle : " + angle);
        context.save();
        context.translate(x + this.halfSize, y + this.halfSize);
        context.rotate(angle);
        context.beginPath();
        if (this.fillStyle != undefined) {
            context.fillStyle = this.fillStyle;
            context.fillRect(-this.halfSize, -this.halfSize, this.size, this.size);    
        }
        if (this.strokeStyle != undefined) {
            context.strokeStyle = this.strokeStyle;
            context.stroke();
        }
        context.restore();
    }

    drawBox(context: CanvasRenderingContext2D, angle: number) {
        context.beginPath();
        context.strokeStyle = 'blue';
        let summit0 = this.summits[0].rotate(angle);
        let summit1 = this.summits[1].rotate(angle);
        let summit2 = this.summits[2].rotate(angle);
        let summit3 = this.summits[3].rotate(angle);
        context.stroke();
        let width = summit3[0] - summit1[0];
        let height = summit0[1] - summit2[1];
        context.strokeRect(summit1[0], summit2[1], width, height);
    }
}