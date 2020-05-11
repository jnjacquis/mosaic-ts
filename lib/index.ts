import { ColorHSL } from './color/color_hsl';
import { Square } from './square';
import { Box } from './box';
import { CanvasGrid } from './canvas_grid'
import { Triangle } from './triangle';
import { Hexagon } from './hexagon';

let colorSchemeRed: Array<ColorHSL> = [
    new ColorHSL('hsl(0, 100%, 95%)'),
    new ColorHSL('hsl(0, 100%, 90%)'),
    new ColorHSL('hsl(0, 100%, 85%)'),
    new ColorHSL('hsl(0, 100%, 80%)'),
    new ColorHSL('hsl(0, 100%, 75%)'),
    new ColorHSL('hsl(0, 100%, 70%)'),
    new ColorHSL('hsl(0, 100%, 65%)'),
    new ColorHSL('hsl(0, 100%, 60%)'),
    new ColorHSL('hsl(0, 100%, 55%)'),
    new ColorHSL('hsl(0, 100%, 50%)'),
    new ColorHSL('hsl(0, 100%, 45%)'),
    new ColorHSL('hsl(0, 100%, 40%)')
];
let colorSchemeFlashyGreen: Array<ColorHSL> = [
    new ColorHSL('hsl(110, 100%, 95%)'),
    new ColorHSL('hsl(110, 100%, 90%)'),
    new ColorHSL('hsl(110, 100%, 85%)'),
    new ColorHSL('hsl(110, 100%, 80%)'),
    new ColorHSL('hsl(110, 100%, 75%)'),
    new ColorHSL('hsl(110, 100%, 70%)'),
    new ColorHSL('hsl(110, 100%, 65%)'),
    new ColorHSL('hsl(110, 100%, 60%)'),
    new ColorHSL('hsl(110, 100%, 55%)'),
    new ColorHSL('hsl(110, 100%, 50%)'),
    new ColorHSL('hsl(110, 100%, 45%)'),
    new ColorHSL('hsl(110, 100%, 40%)')
];
let colorSchemeDeepBlue: Array<ColorHSL> = [
    new ColorHSL('hsl(250, 100%, 95%)'),
    new ColorHSL('hsl(250, 100%, 90%)'),
    new ColorHSL('hsl(250, 100%, 85%)'),
    new ColorHSL('hsl(250, 100%, 80%)'),
    new ColorHSL('hsl(250, 100%, 75%)'),
    new ColorHSL('hsl(250, 100%, 70%)'),
    new ColorHSL('hsl(250, 100%, 65%)'),
    new ColorHSL('hsl(250, 100%, 60%)'),
    new ColorHSL('hsl(250, 100%, 55%)'),
    new ColorHSL('hsl(250, 100%, 50%)'),
    new ColorHSL('hsl(250, 100%, 45%)'),
    new ColorHSL('hsl(250, 100%, 40%)')
];

let randomColor = function (colors: Array<ColorHSL>) {
    var index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

let notPrevious = function (colors: Array<ColorHSL>, previous: ColorHSL) {
    var color = randomColor(colors);
    while (color == previous) {
        color = randomColor(colors);
    }
    return color;
}
console.log(randomColor(colorSchemeRed));
let color = new ColorHSL('hsl(0, 100%, 80%)')
console.log(color);

function init() {
    let triangle = new Triangle(40, 40, 'hsl(0, 100%, 75%)', 'yellow');
    let contextTriangle = getContext('canvas-triangle');
    triangle.draw(contextTriangle, 20, 20, Math.PI / 4);

    let square = new Square(40, 'hsl(0, 100%, 80%)', 'yellow');
    let contextSquare = getContext('canvas-square');
    square.draw(contextSquare, 20, 20, Math.PI / 4);

    let hexagon = new Hexagon(40, 'hsl(0, 100%, 70%)', 'yellow');
    let contextHexagon = getContext('canvas-hexagon');
    hexagon.draw(contextHexagon, 20, 20, 0);
    let box = hexagon.enclosing(0);
    hexagon = new Hexagon(40, 'hsl(0, 100%, 85%)', 'yellow');
    hexagon.draw(contextHexagon, 20 + 1.5*box.width/2, 20 + box.height/2, 0);

    let canvasGridHexagonHorizontal = getCanvas('canvas-grid-hexagon-horizontal');
    let contextGridHexagonHorizontal = getContext('canvas-grid-hexagon-horizontal');
    let gridHexagonHori = new CanvasGrid(canvasGridHexagonHorizontal, hexagon, colorSchemeRed);
    let columnOffsetX = function (column: number) {
        return - box.width / 4 * column;
    }
    let columnOffsetY = function (column: number) {
        if (column % 2 == 1) {
            return box.height / 2;
        }
        return 0;
    }
    gridHexagonHori.draw(contextGridHexagonHorizontal, hexagon, 0, 0, 0, columnOffsetX, columnOffsetY, randomColor);

    let canvasGridSquareHorizontal = getCanvas('canvas-grid-square-horizontal');
    let contextGridSquareHorizontal = getContext('canvas-grid-square-horizontal');
    let cgSquareHorizontal = new CanvasGrid(canvasGridSquareHorizontal, square, colorSchemeRed);
    cgSquareHorizontal.draw(contextGridSquareHorizontal, square, 0, 0, 0, null, null, notPrevious);

    let canvasGridSquareRotated45 = getCanvas('canvas-grid-square-rotated-45');
    let contextGridSquareRotated45 = getContext('canvas-grid-square-rotated-45');
    let angle = 45 * Math.PI / 180;
    let cgSquareRotated = new CanvasGrid(canvasGridSquareRotated45, square, colorSchemeRed);
    cgSquareRotated.draw(contextGridSquareRotated45, square, 0, 0, angle, null, null, notPrevious);
    cgSquareRotated.draw(contextGridSquareRotated45, square, 28, 28, angle, null, null, notPrevious);

    let canvasGridTriangleHorizontal = getCanvas('canvas-grid-triangle-horizontal');
    let contextGridTriangleHorizontal = getContext('canvas-grid-triangle-horizontal');
    let triangle1 = new Triangle(40, 40, 'hsl(0, 100%, 75%)', null);
    let gridTriangleHori = new CanvasGrid(canvasGridTriangleHorizontal, triangle1, colorSchemeRed);
    gridTriangleHori.draw(contextGridTriangleHorizontal, triangle1, 0, 0, 90 * Math.PI / 180, null, null, notPrevious);
    gridTriangleHori.draw(contextGridTriangleHorizontal, triangle1, 0, triangle1.halfHeight, 270 * Math.PI / 180, null, null, notPrevious);

    let canvasGridTriangleVertical = getCanvas('canvas-grid-triangle-vertical');
    let contextGridTriangleVertical = getContext('canvas-grid-triangle-vertical');
    let gridTriangleVerti = new CanvasGrid(canvasGridTriangleVertical, triangle1, colorSchemeRed);
    gridTriangleVerti.draw(contextGridTriangleVertical, triangle1, 0, 0, 0, null, null, notPrevious);
    gridTriangleVerti.draw(contextGridTriangleVertical, triangle1, triangle1.halfWidth, 0, Math.PI, null, null, notPrevious);

}

function getContext(name: string) {
    return getCanvas(name).getContext("2d");
}

function getCanvas(name: string) {
    return document.getElementById(name) as HTMLCanvasElement;
}

window.addEventListener("load", init);