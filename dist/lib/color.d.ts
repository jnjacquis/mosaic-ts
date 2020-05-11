export declare class ColorHSL {
    formatBegin: string;
    formatEnd: string;
    separator: string;
    hue: number;
    saturation: number;
    lightness: number;
    constructor(color: string);
    verifyFormat(color: string): boolean;
    caculateComponentWithPercent(value: any, percent: any): any;
    value(): string;
}
