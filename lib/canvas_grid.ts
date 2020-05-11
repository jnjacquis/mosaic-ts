import { Box } from "./box";
import { Shape } from "./shape";
import { ColorHSL } from "./color/color_hsl";

export class CanvasGrid {

    context: CanvasRenderingContext2D;
    width: number;
    height: number;
    rows: number;
    columns: number;
    shape: Shape;
    colorScheme: Array<ColorHSL>;

    constructor(canvas: HTMLCanvasElement, shape: Shape, colorScheme: Array<ColorHSL>) {
        this.width = canvas.width;
        this.height = canvas.height;
        this.shape = shape;
        this.colorScheme = colorScheme;
    }

    draw(context: CanvasRenderingContext2D, shape: Shape, offsetx: number, offsety: number, angle: number, columnOffsetX: (row: number) => number, columnOffsetY: (column: number) => number, colorify: (colors: Array<ColorHSL>, previous: ColorHSL) => ColorHSL) {
        const shapeBox: Box = shape.enclosing(angle);
        const rows = this.calculateRowsOrColumns(context.canvas.width, shapeBox.width);
        const columns = this.calculateRowsOrColumns(context.canvas.height, shapeBox.height);
        let color: ColorHSL = null;

        for (let row = 0; row < rows; row++) {
            let y = offsety + row * shapeBox.height;

            for (let column = 0; column < columns; column++) {
                let x = offsetx + column * shapeBox.width;
                let y1 = y;

                if (columnOffsetX != undefined) {
                    x += columnOffsetX(column);
                }
                if (columnOffsetY != undefined) {
                    y1 += columnOffsetY(column);
                }

                color = colorify(this.colorScheme, color);                
                this.shape.fillStyle = color.value();
                this.shape.draw(context, x, y1, angle);
            }
        }
    }

    private calculateRowsOrColumns(canvasSize, shapeSize) {
        return Math.floor(canvasSize / shapeSize);
    }
}