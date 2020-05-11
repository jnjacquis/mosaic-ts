"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hexagon_1 = require("../lib/hexagon");
describe("Tests of the Hexagon class", function () {
    it('Test the calculated enclosing box', function () {
        var hexagon = new hexagon_1.Hexagon(20, null, null);
        var box = hexagon.enclosing(0);
        console.log(box);
        expect(box.width).toBe(40);
        expect(box.height).toEqual(40 * Math.SQRT2);
    });
});
//# sourceMappingURL=hexagon.spec.js.map