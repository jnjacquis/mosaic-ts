"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
var box_1 = require("./box");
var point_1 = require("./point");
var coordinates_1 = require("./coordinates");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(size, fillStyle, strokeStyle) {
        var _this = _super.call(this) || this;
        console.log("Square: size: " + size + ", fillStyle: " + fillStyle + ", strokeStyle: " + strokeStyle);
        _this.size = size;
        _this.halfSize = size / 2;
        _this.fillStyle = fillStyle;
        _this.strokeStyle = strokeStyle;
        _this.summits = [];
        _this.computeSummits();
        return _this;
    }
    Square.prototype.computeSummits = function () {
        this.summits[0] = new point_1.Point(this.halfSize * Math.SQRT2, Math.PI / 4, coordinates_1.Coordinates.Polar);
        this.summits[1] = new point_1.Point(this.halfSize * Math.SQRT2, 3 * Math.PI / 4, coordinates_1.Coordinates.Polar);
        this.summits[2] = new point_1.Point(this.halfSize * Math.SQRT2, 5 * Math.PI / 4, coordinates_1.Coordinates.Polar);
        this.summits[3] = new point_1.Point(this.halfSize * Math.SQRT2, 7 * Math.PI / 4, coordinates_1.Coordinates.Polar);
    };
    Square.prototype.enclosing = function (angle) {
        var summit0 = this.summits[0].rotate(angle);
        var summit1 = this.summits[1].rotate(angle);
        var summit2 = this.summits[2].rotate(angle);
        var summit3 = this.summits[3].rotate(angle);
        var width = summit3[0] - summit1[0];
        var height = summit0[1] - summit2[1];
        return new box_1.Box(width, height);
    };
    Square.prototype.draw = function (context, x, y, angle) {
        console.log("Square: draw at x: " + x + ", y: " + y + ", with angle : " + angle);
        context.save();
        context.translate(x + this.halfSize, y + this.halfSize);
        context.rotate(angle);
        context.beginPath();
        if (this.fillStyle != undefined) {
            context.fillStyle = this.fillStyle;
            context.fillRect(-this.halfSize, -this.halfSize, this.size, this.size);
        }
        if (this.strokeStyle != undefined) {
            context.strokeStyle = this.strokeStyle;
            context.stroke();
        }
        context.restore();
    };
    Square.prototype.drawBox = function (context, angle) {
        context.beginPath();
        context.strokeStyle = 'blue';
        var summit0 = this.summits[0].rotate(angle);
        var summit1 = this.summits[1].rotate(angle);
        var summit2 = this.summits[2].rotate(angle);
        var summit3 = this.summits[3].rotate(angle);
        context.stroke();
        var width = summit3[0] - summit1[0];
        var height = summit0[1] - summit2[1];
        context.strokeRect(summit1[0], summit2[1], width, height);
    };
    return Square;
}(shape_1.Shape));
exports.Square = Square;
//# sourceMappingURL=square.js.map