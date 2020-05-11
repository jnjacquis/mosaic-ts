export class ColorHSL {

    formatBegin: string = 'hsl(';
    formatEnd: string = ')';
    separator: string = ', ';

    hue: number;
    saturation: number;
    lightness: number;

    constructor(color: string) {
        if (!this.verifyFormat(color)) {
            return;
        }
        let colorComponents = color.substring(4).split(',');
        this.hue = Number.parseInt(colorComponents[0]);
        this.saturation = Number.parseInt(colorComponents[1]);
        this.lightness = Number.parseInt(colorComponents[2]);
    }

    verifyFormat(color: string): boolean {
        if (color == undefined) {
            console.log('Undefined :(');
            return false;
        }
        return color.startsWith(this.formatBegin) && color.endsWith(this.formatEnd);
    }

    caculateComponentWithPercent(value, percent) {
        if (percent == undefined) {
            return value;
        }
        return Math.round(value * percent);
    }

    value(): string {
        return this.formatBegin + this.hue + this.separator + this.saturation + "%" + this.separator + this.lightness + "%" + this.formatEnd;
    }
}
