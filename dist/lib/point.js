"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var coordinates_1 = require("./coordinates");
var Point = /** @class */ (function () {
    function Point(c1, c2, cs) {
        if (cs === coordinates_1.Coordinates.Cartesian) {
            this.x = c1;
            this.y = c2;
            this.computeRadius();
            this.computeAngle();
        }
        else {
            this.r = c1;
            this.a = c2;
            this.computeX();
            this.computeY();
        }
    }
    Point.prototype.computeX = function () {
        this.x = this.r * Math.cos(this.a);
    };
    Point.prototype.computeY = function () {
        this.y = this.r * Math.sin(this.a);
    };
    Point.prototype.computeRadius = function () {
        this.r = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    Point.prototype.computeAngle = function () {
        this.a = Math.atan(this.y / this.x);
    };
    Point.prototype.rotate = function (angle) {
        var newAngle = this.a + angle;
        var newX = this.r * Math.cos(newAngle);
        var newY = this.r * Math.sin(newAngle);
        return [newX, newY];
    };
    return Point;
}());
exports.Point = Point;
//# sourceMappingURL=point.js.map