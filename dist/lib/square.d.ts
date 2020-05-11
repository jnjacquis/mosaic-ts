import { Shape } from './shape';
import { Box } from './box';
import { Point } from './point';
export declare class Square extends Shape {
    size: number;
    halfSize: number;
    fillStyle: string;
    strokeStyle: string;
    summits: Array<Point>;
    constructor(size: number, fillStyle: string, strokeStyle: string);
    private computeSummits;
    enclosing(angle: number): Box;
    draw(context: CanvasRenderingContext2D, x: number, y: number, angle: number): void;
    drawBox(context: CanvasRenderingContext2D, angle: number): void;
}
