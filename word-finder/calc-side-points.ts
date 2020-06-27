import { Point } from "./point";
import * as constants from './constants';

function calcRawSidePoints(point: Point): Point[] {
  const sidePoints: Point[] = [];

  for (var x = 0; x < 3; x++) {
    for (var y = 0; y < 3; y++) {
      sidePoints.push(new Point(point.x - 1 + x, point.y - 1 + y));
    }
  }

  return sidePoints;
}

function removeStartPoint(startPoint: Point, points: Point[]): Point[] {
  return points.filter(point => !point.isEqual(startPoint));
}

function removeOutOfRangePoint(points: Point[]): Point[] {
  return points.filter(
    point =>
      point.x >= 0 &&
      point.x < constants.matrixSize &&
      point.y >= 0 &&
      point.y < constants.matrixSize
  );
}

export function calcSidePoins(point: Point): Point[] {
  const rawSidePoints = calcRawSidePoints(point);
  const sidePointsWithoutStartPoint = removeStartPoint(point, rawSidePoints);
  const finalPoints = removeOutOfRangePoint(sidePointsWithoutStartPoint);
  return finalPoints;
}
