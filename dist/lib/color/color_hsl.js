"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ColorHSL = /** @class */ (function () {
    function ColorHSL(color) {
        this.formatBegin = 'hsl(';
        this.formatEnd = ')';
        this.separator = ', ';
        if (!this.verifyFormat(color)) {
            return;
        }
        var colorComponents = color.substring(4).split(',');
        this.hue = Number.parseInt(colorComponents[0]);
        this.saturation = Number.parseInt(colorComponents[1]);
        this.lightness = Number.parseInt(colorComponents[2]);
    }
    ColorHSL.prototype.verifyFormat = function (color) {
        if (color == undefined) {
            console.log('Undefined :(');
            return false;
        }
        return color.startsWith(this.formatBegin) && color.endsWith(this.formatEnd);
    };
    ColorHSL.prototype.caculateComponentWithPercent = function (value, percent) {
        if (percent == undefined) {
            return value;
        }
        return Math.round(value * percent);
    };
    ColorHSL.prototype.value = function () {
        return this.formatBegin + this.hue + this.separator + this.saturation + "%" + this.separator + this.lightness + "%" + this.formatEnd;
    };
    return ColorHSL;
}());
exports.ColorHSL = ColorHSL;
//# sourceMappingURL=color_hsl.js.map