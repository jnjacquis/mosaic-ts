"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_hsl_1 = require("./color/color_hsl");
var square_1 = require("./square");
var canvas_grid_1 = require("./canvas_grid");
var triangle_1 = require("./triangle");
var hexagon_1 = require("./hexagon");
var colorSchemeRed = [
    new color_hsl_1.ColorHSL('hsl(0, 100%, 95%)'),
    new color_hsl_1.ColorHSL('hsl(0, 100%, 90%)'),
    new color_hsl_1.ColorHSL('hsl(0, 100%, 85%)'),
    new color_hsl_1.ColorHSL('hsl(0, 100%, 80%)'),
    new color_hsl_1.ColorHSL('hsl(0, 100%, 75%)'),
    new color_hsl_1.ColorHSL('hsl(0, 100%, 70%)'),
    new color_hsl_1.ColorHSL('hsl(0, 100%, 65%)'),
    new color_hsl_1.ColorHSL('hsl(0, 100%, 60%)'),
    new color_hsl_1.ColorHSL('hsl(0, 100%, 55%)'),
    new color_hsl_1.ColorHSL('hsl(0, 100%, 50%)'),
    new color_hsl_1.ColorHSL('hsl(0, 100%, 45%)'),
    new color_hsl_1.ColorHSL('hsl(0, 100%, 40%)')
];
var colorSchemeFlashyGreen = [
    new color_hsl_1.ColorHSL('hsl(110, 100%, 95%)'),
    new color_hsl_1.ColorHSL('hsl(110, 100%, 90%)'),
    new color_hsl_1.ColorHSL('hsl(110, 100%, 85%)'),
    new color_hsl_1.ColorHSL('hsl(110, 100%, 80%)'),
    new color_hsl_1.ColorHSL('hsl(110, 100%, 75%)'),
    new color_hsl_1.ColorHSL('hsl(110, 100%, 70%)'),
    new color_hsl_1.ColorHSL('hsl(110, 100%, 65%)'),
    new color_hsl_1.ColorHSL('hsl(110, 100%, 60%)'),
    new color_hsl_1.ColorHSL('hsl(110, 100%, 55%)'),
    new color_hsl_1.ColorHSL('hsl(110, 100%, 50%)'),
    new color_hsl_1.ColorHSL('hsl(110, 100%, 45%)'),
    new color_hsl_1.ColorHSL('hsl(110, 100%, 40%)')
];
var colorSchemeDeepBlue = [
    new color_hsl_1.ColorHSL('hsl(250, 100%, 95%)'),
    new color_hsl_1.ColorHSL('hsl(250, 100%, 90%)'),
    new color_hsl_1.ColorHSL('hsl(250, 100%, 85%)'),
    new color_hsl_1.ColorHSL('hsl(250, 100%, 80%)'),
    new color_hsl_1.ColorHSL('hsl(250, 100%, 75%)'),
    new color_hsl_1.ColorHSL('hsl(250, 100%, 70%)'),
    new color_hsl_1.ColorHSL('hsl(250, 100%, 65%)'),
    new color_hsl_1.ColorHSL('hsl(250, 100%, 60%)'),
    new color_hsl_1.ColorHSL('hsl(250, 100%, 55%)'),
    new color_hsl_1.ColorHSL('hsl(250, 100%, 50%)'),
    new color_hsl_1.ColorHSL('hsl(250, 100%, 45%)'),
    new color_hsl_1.ColorHSL('hsl(250, 100%, 40%)')
];
var randomColor = function (colors) {
    var index = Math.floor(Math.random() * colors.length);
    return colors[index];
};
var notPrevious = function (colors, previous) {
    var color = randomColor(colors);
    while (color == previous) {
        color = randomColor(colors);
    }
    return color;
};
console.log(randomColor(colorSchemeRed));
var color = new color_hsl_1.ColorHSL('hsl(0, 100%, 80%)');
console.log(color);
function init() {
    var triangle = new triangle_1.Triangle(40, 40, 'hsl(0, 100%, 75%)', 'yellow');
    var contextTriangle = getContext('canvas-triangle');
    triangle.draw(contextTriangle, 20, 20, Math.PI / 4);
    var square = new square_1.Square(40, 'hsl(0, 100%, 80%)', 'yellow');
    var contextSquare = getContext('canvas-square');
    square.draw(contextSquare, 20, 20, Math.PI / 4);
    var hexagon = new hexagon_1.Hexagon(40, 'hsl(0, 100%, 70%)', 'yellow');
    var contextHexagon = getContext('canvas-hexagon');
    hexagon.draw(contextHexagon, 20, 20, 0);
    var box = hexagon.enclosing(0);
    hexagon = new hexagon_1.Hexagon(40, 'hsl(0, 100%, 85%)', 'yellow');
    hexagon.draw(contextHexagon, 20 + 1.5 * box.width / 2, 20 + box.height / 2, 0);
    var canvasGridHexagonHorizontal = getCanvas('canvas-grid-hexagon-horizontal');
    var contextGridHexagonHorizontal = getContext('canvas-grid-hexagon-horizontal');
    var gridHexagonHori = new canvas_grid_1.CanvasGrid(canvasGridHexagonHorizontal, hexagon, colorSchemeRed);
    var columnOffsetX = function (column) {
        return -box.width / 4 * column;
    };
    var columnOffsetY = function (column) {
        if (column % 2 == 1) {
            return box.height / 2;
        }
        return 0;
    };
    gridHexagonHori.draw(contextGridHexagonHorizontal, hexagon, 0, 0, 0, columnOffsetX, columnOffsetY, randomColor);
    var canvasGridSquareHorizontal = getCanvas('canvas-grid-square-horizontal');
    var contextGridSquareHorizontal = getContext('canvas-grid-square-horizontal');
    var cgSquareHorizontal = new canvas_grid_1.CanvasGrid(canvasGridSquareHorizontal, square, colorSchemeRed);
    cgSquareHorizontal.draw(contextGridSquareHorizontal, square, 0, 0, 0, null, null, notPrevious);
    var canvasGridSquareRotated45 = getCanvas('canvas-grid-square-rotated-45');
    var contextGridSquareRotated45 = getContext('canvas-grid-square-rotated-45');
    var angle = 45 * Math.PI / 180;
    var cgSquareRotated = new canvas_grid_1.CanvasGrid(canvasGridSquareRotated45, square, colorSchemeRed);
    cgSquareRotated.draw(contextGridSquareRotated45, square, 0, 0, angle, null, null, notPrevious);
    cgSquareRotated.draw(contextGridSquareRotated45, square, 28, 28, angle, null, null, notPrevious);
    var canvasGridTriangleHorizontal = getCanvas('canvas-grid-triangle-horizontal');
    var contextGridTriangleHorizontal = getContext('canvas-grid-triangle-horizontal');
    var triangle1 = new triangle_1.Triangle(40, 40, 'hsl(0, 100%, 75%)', null);
    var gridTriangleHori = new canvas_grid_1.CanvasGrid(canvasGridTriangleHorizontal, triangle1, colorSchemeRed);
    gridTriangleHori.draw(contextGridTriangleHorizontal, triangle1, 0, 0, 90 * Math.PI / 180, null, null, notPrevious);
    gridTriangleHori.draw(contextGridTriangleHorizontal, triangle1, 0, triangle1.halfHeight, 270 * Math.PI / 180, null, null, notPrevious);
    var canvasGridTriangleVertical = getCanvas('canvas-grid-triangle-vertical');
    var contextGridTriangleVertical = getContext('canvas-grid-triangle-vertical');
    var gridTriangleVerti = new canvas_grid_1.CanvasGrid(canvasGridTriangleVertical, triangle1, colorSchemeRed);
    gridTriangleVerti.draw(contextGridTriangleVertical, triangle1, 0, 0, 0, null, null, notPrevious);
    gridTriangleVerti.draw(contextGridTriangleVertical, triangle1, triangle1.halfWidth, 0, Math.PI, null, null, notPrevious);
}
function getContext(name) {
    return getCanvas(name).getContext("2d");
}
function getCanvas(name) {
    return document.getElementById(name);
}
window.addEventListener("load", init);
//# sourceMappingURL=index.js.map