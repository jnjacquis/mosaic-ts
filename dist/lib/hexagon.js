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
var Hexagon = /** @class */ (function (_super) {
    __extends(Hexagon, _super);
    function Hexagon(size, fillStyle, strokeStyle) {
        var _this = _super.call(this) || this;
        console.log("Hexagon: size: " + size + ", fillStyle: " + fillStyle + ", strokeStyle: " + strokeStyle);
        _this.size = size;
        _this.halfSize = size / 2;
        _this.fillStyle = fillStyle;
        _this.strokeStyle = strokeStyle;
        _this.summits = [];
        _this.computeSummits();
        return _this;
    }
    Hexagon.prototype.computeSummits = function () {
        this.summits[0] = new point_1.Point(this.halfSize, 0, coordinates_1.Coordinates.Polar);
        this.summits[1] = new point_1.Point(this.halfSize, Math.PI / 3, coordinates_1.Coordinates.Polar);
        this.summits[2] = new point_1.Point(this.halfSize, 2 * Math.PI / 3, coordinates_1.Coordinates.Polar);
        this.summits[3] = new point_1.Point(this.halfSize, Math.PI, coordinates_1.Coordinates.Polar);
        this.summits[4] = new point_1.Point(this.halfSize, 4 * Math.PI / 3, coordinates_1.Coordinates.Polar);
        this.summits[5] = new point_1.Point(this.halfSize, 5 * Math.PI / 3, coordinates_1.Coordinates.Polar);
    };
    Hexagon.prototype.enclosing = function (angle) {
        var summit0 = this.summits[0].rotate(angle);
        var summit1 = this.summits[1].rotate(angle);
        var summit2 = this.summits[2].rotate(angle);
        var summit3 = this.summits[3].rotate(angle);
        var summit4 = this.summits[4].rotate(angle);
        var summit5 = this.summits[5].rotate(angle);
        var xSummits = [summit0[0], summit1[0], summit2[0], summit3[0], summit4[0], summit5[0]];
        var ySummits = [summit0[1], summit1[1], summit2[1], summit3[1], summit4[1], summit5[1]];
        var width = _.max(xSummits) - _.min(xSummits);
        var height = _.max(ySummits) - _.min(ySummits);
        console.log("Hexagon: enclosing: width: " + width + ", height: " + height);
        return new box_1.Box(width, height);
    };
    Hexagon.prototype.draw = function (context, x, y, angle) {
        console.log("Hexagon: draw at x: " + x + ", y: " + y + ", with angle : " + angle);
        context.save();
        var box = this.enclosing(angle);
        context.translate(x + box.width / 2, y + box.height / 2);
        context.rotate(angle);
        context.beginPath();
        context.fillStyle = this.fillStyle;
        var currentAngle = 0;
        context.moveTo(this.halfSize * Math.cos(currentAngle), this.halfSize * Math.sin(currentAngle));
        for (var index = 0; index < 7; index++) {
            currentAngle += 60 * Math.PI / 180;
            context.lineTo(this.halfSize * Math.cos(currentAngle), this.halfSize * Math.sin(currentAngle));
        }
        context.fill();
        context.restore();
    };
    return Hexagon;
}(shape_1.Shape));
exports.Hexagon = Hexagon;
//# sourceMappingURL=hexagon.js.map