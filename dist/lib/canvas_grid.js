"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CanvasGrid = /** @class */ (function () {
    function CanvasGrid(canvas, shape, colorScheme) {
        this.width = canvas.width;
        this.height = canvas.height;
        this.shape = shape;
        this.colorScheme = colorScheme;
    }
    CanvasGrid.prototype.draw = function (context, shape, offsetx, offsety, angle, columnOffsetX, columnOffsetY, colorify) {
        var shapeBox = shape.enclosing(angle);
        var rows = this.calculateRowsOrColumns(context.canvas.width, shapeBox.width);
        var columns = this.calculateRowsOrColumns(context.canvas.height, shapeBox.height);
        var color = null;
        for (var row = 0; row < rows; row++) {
            var y = offsety + row * shapeBox.height;
            for (var column = 0; column < columns; column++) {
                var x = offsetx + column * shapeBox.width;
                var y1 = y;
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
    };
    CanvasGrid.prototype.calculateRowsOrColumns = function (canvasSize, shapeSize) {
        return Math.floor(canvasSize / shapeSize);
    };
    return CanvasGrid;
}());
exports.CanvasGrid = CanvasGrid;
//# sourceMappingURL=canvas_grid.js.map