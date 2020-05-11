"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var square_1 = require("../lib/square");
describe("Tests of the Square class", function () {
    it('Test enclosing box with 3 angles', function () {
        var squareBox = new square_1.Square(20, null, null).enclosing(0);
        console.log(squareBox);
        squareBox = new square_1.Square(20, null, null).enclosing(30 * Math.PI / 180);
        console.log(squareBox);
        squareBox = new square_1.Square(20, null, null).enclosing(45 * Math.PI / 180);
        console.log(squareBox);
    });
});
//# sourceMappingURL=square.spec.js.map