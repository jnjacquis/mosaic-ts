import { Coordinates } from './coordinates';
export declare class Point {
    x: number;
    y: number;
    r: number;
    a: number;
    constructor(c1: number, c2: number, cs: Coordinates);
    computeX(): void;
    computeY(): void;
    computeRadius(): void;
    computeAngle(): void;
    rotate(angle: number): [number, number];
}
