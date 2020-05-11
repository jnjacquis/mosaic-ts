import { Shape } from "./shape";
import { ColorHSL } from "./color/color_hsl";
export declare class CanvasGrid {
    context: CanvasRenderingContext2D;
    width: number;
    height: number;
    rows: number;
    columns: number;
    shape: Shape;
    colorScheme: Array<ColorHSL>;
    constructor(canvas: HTMLCanvasElement, shape: Shape, colorScheme: Array<ColorHSL>);
    draw(context: CanvasRenderingContext2D, shape: Shape, offsetx: number, offsety: number, angle: number, columnOffsetX: (row: number) => number, columnOffsetY: (column: number) => number, colorify: (colors: Array<ColorHSL>, previous: ColorHSL) => ColorHSL): void;
    private calculateRowsOrColumns;
}
