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
var _ = require("lodash");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(width, height, fillStyle, strokeStyle) {
        var _this = _super.call(this) || this;
        console.log("Triangle: width: " + width + ", height: " + height + ", fillStyle: " + fillStyle + ", strokeStyle: " + strokeStyle);
        _this.halfWidth = width / 2;
        _this.height = height;
        _this.halfHeight = height / 2;
        _this.fillStyle = fillStyle;
        _this.strokeStyle = strokeStyle;
        _this.summits = [];
        _this.computeSummits();
        return _this;
    }
    Triangle.prototype.computeSummits = function () {
        this.summits[0] = new point_1.Point(this.halfWidth, 0, coordinates_1.Coordinates.Polar);
        this.summits[1] = new point_1.Point(this.height, Math.PI / 2, coordinates_1.Coordinates.Polar);
        this.summits[2] = new point_1.Point(this.halfWidth, Math.PI, coordinates_1.Coordinates.Polar);
    };
    Triangle.prototype.enclosing = function (angle) {
        var summit0 = this.summits[0].rotate(angle);
        var summit1 = this.summits[1].rotate(angle);
        var summit2 = this.summits[2].rotate(angle);
        var maxx = _.max([summit0[0], summit1[0], summit2[0]]);
        var minx = _.min([summit0[0], summit1[0], summit2[0]]);
        var maxy = _.max([summit0[1], summit1[1], summit2[1]]);
        var miny = _.min([summit0[1], summit1[1], summit2[1]]);
        var width = maxx - minx;
        var height = maxy - miny;
        console.log("Triangle: enclosing: width: " + width + ", height: " + height);
        return new box_1.Box(width, height);
    };
    Triangle.prototype.draw = function (context, x, y, angle) {
        console.log("Triangle: draw at x: " + x + ", y: " + y + ", with angle : " + angle);
        context.save();
        context.translate(x + this.halfWidth, y + this.halfHeight);
        context.rotate(angle);
        context.beginPath();
        context.fillStyle = this.fillStyle;
        context.moveTo(-this.halfWidth, -this.halfHeight);
        context.lineTo(this.halfWidth, -this.halfHeight);
        context.lineTo(0, this.halfHeight);
        context.lineTo(-this.halfWidth, -this.halfHeight);
        context.fill();
        context.restore();
    };
    return Triangle;
}(shape_1.Shape));
exports.Triangle = Triangle;
//# sourceMappingURL=triangle.js.map