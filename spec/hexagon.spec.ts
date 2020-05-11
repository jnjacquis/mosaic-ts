import { Hexagon } from "../lib/hexagon";

describe("Tests of the Hexagon class", function() {

    it('Test the calculated enclosing box', function() {
        let hexagon = new Hexagon(20, null, null);
        let box = hexagon.enclosing(0);
        console.log(box);
        expect(box.width).toBe(40);
        expect(box.height).toEqual(40 * Math.SQRT2);
    })
    
})
