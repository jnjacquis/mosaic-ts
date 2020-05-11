import { Box } from './box';
export declare abstract class Shape {
    fillStyle: string;
    strokeStyle: string;
    abstract enclosing(angle: number): Box;
    abstract draw(context: CanvasRenderingContext2D, x: number, y: number, angle: number): void;
}
