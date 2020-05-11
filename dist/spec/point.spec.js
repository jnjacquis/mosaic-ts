"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var coordinates_1 = require("../lib/coordinates");
var point_1 = require("../lib/point");
describe("Tests of the Point class", function () {
    it('Test constructor and calculations of radius and angle from the cartesian coordinates', function () {
        var pt = new point_1.Point(1, 1, coordinates_1.Coordinates.Cartesian);
        expect(pt.r).toEqual(Math.SQRT2);
        expect(pt.a).toEqual(Math.PI / 4);
        pt = new point_1.Point(1, -1, coordinates_1.Coordinates.Cartesian);
        expect(pt.r).toEqual(Math.SQRT2);
        expect(pt.a).toEqual(-Math.PI / 4);
        pt = new point_1.Point(Math.cos(Math.PI / 6), 0.5, coordinates_1.Coordinates.Cartesian);
        expect(pt.r).toEqual(1);
        expect(pt.a).toEqual(Math.PI / 6);
        pt = new point_1.Point(0.5, Math.sin(Math.PI / 3), coordinates_1.Coordinates.Cartesian);
        expect(Math.ceil(pt.r)).toEqual(1);
        expect(pt.a).toEqual(Math.PI / 3);
    });
    it('Test rotate method', function () {
        var pt = new point_1.Point(Math.SQRT2, Math.SQRT2, coordinates_1.Coordinates.Cartesian);
        var coordinates = pt.rotate(Math.PI / 4);
        //expect(coordinates[0]).toEqual(0);
        expect(coordinates[1]).toEqual(2);
    });
});
//# sourceMappingURL=point.spec.js.map