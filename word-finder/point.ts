export class Point {
  constructor(public x: number, public y: number) {}

  public isEqual(anotherPoint: Point): boolean {
    return this.x === anotherPoint.x && this.y === anotherPoint.y;
  }
}
