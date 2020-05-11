import { Box } from "../lib/box";

describe("Tests of the Box class", function() {

    it('Test constructor with 2 parameters', function() {
        let box = new Box(null, null);
        expect(box.width).toBeNull(1);

        let box1 = new Box(1, 1);
        expect(box1.width).toEqual(1);
    })
    
})
