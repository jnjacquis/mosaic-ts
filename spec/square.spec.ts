import { Square } from "../lib/square";

describe("Tests of the Square class", function() {

    it('Test enclosing box with 3 angles', function() {
        let squareBox = new Square(20, null, null).enclosing(0);
        console.log(squareBox);

        squareBox = new Square(20, null, null).enclosing(30 * Math.PI / 180);
        console.log(squareBox);

        squareBox = new Square(20, null, null).enclosing(45 * Math.PI / 180);
        console.log(squareBox);
    })
    
})