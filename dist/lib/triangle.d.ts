import { Shape } from "./shape";
import { Box } from './box';
import { Point } from './point';
export declare class Triangle extends Shape {
    halfWidth: number;
    height: number;
    halfHeight: number;
    summits: Array<Point>;
    constructor(width: number, height: number, fillStyle: string, strokeStyle: string);
    private computeSummits;
    enclosing(angle: number): Box;
    draw(context: CanvasRenderingContext2D, x: number, y: number, angle: number): void;
}
