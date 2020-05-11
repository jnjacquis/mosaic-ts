import { Coordinates } from "../lib/coordinates";
import { Point } from "../lib/point";

describe("Tests of the Point class", function() {

    it('Test constructor and calculations of radius and angle from the cartesian coordinates', function() {
        let pt = new Point(1, 1, Coordinates.Cartesian);
        expect(pt.r).toEqual(Math.SQRT2);
        expect(pt.a).toEqual(Math.PI / 4);

        pt = new Point(1, -1, Coordinates.Cartesian);
        expect(pt.r).toEqual(Math.SQRT2);
        expect(pt.a).toEqual(-Math.PI / 4);

        pt = new Point(Math.cos(Math.PI / 6), 0.5, Coordinates.Cartesian);
        expect(pt.r).toEqual(1);
        expect(pt.a).toEqual(Math.PI / 6);

        pt = new Point(0.5, Math.sin(Math.PI / 3), Coordinates.Cartesian);
        expect(Math.ceil(pt.r)).toEqual(1);
        expect(pt.a).toEqual(Math.PI / 3);
    })
    
    it('Test rotate method', function() {
        let pt = new Point(Math.SQRT2, Math.SQRT2, Coordinates.Cartesian);
        let coordinates: [number, number] = pt.rotate(Math.PI / 4);
        //expect(coordinates[0]).toEqual(0);
        expect(coordinates[1]).toEqual(2);
    })
})
