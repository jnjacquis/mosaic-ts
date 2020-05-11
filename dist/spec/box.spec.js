"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var box_1 = require("../lib/box");
describe("Tests of the Box class", function () {
    it('Test constructor with 2 parameters', function () {
        var box = new box_1.Box(null, null);
        expect(box.width).toBeNull(1);
        var box1 = new box_1.Box(1, 1);
        expect(box1.width).toEqual(1);
    });
});
//# sourceMappingURL=box.spec.js.map