import { Point } from "./point";
import { calcSidePoins } from "./calc-side-points";
import { isAllUnique } from "./helpers";

export function getWordsFromMatrixForPoint(
  firstPoint: Point,
  matrix: string[][],
  wordLength: number
): string[] {
  const resultList: Point[][] = [];

  processPoint(firstPoint, [firstPoint], resultList, wordLength, matrix);

  return resultList.map(item => pointsToLetters(item, matrix));
}

function processPoint(
  point: Point,
  prevPoints: Point[],
  resultList: Point[][],
  limit: number,
  matrix: string[][]
) {
  if (prevPoints.length === limit) {
    if (isAllUnique(prevPoints)) {
      resultList.push(prevPoints);
    }
  } else {
    const sidePoints: Point[] = calcSidePoins(point);
    for (let sidePoint of sidePoints) {
      processPoint(
        sidePoint,
        [...prevPoints, sidePoint],
        resultList,
        limit,
        matrix
      );
    }
  }
}

function pointsToLetters(points: Point[], matrix: string[][]): string {
  return points.map(point => pointToLetter(point, matrix)).join("");
}

function pointToLetter(point: Point, matrix: string[][]): string {
  return matrix[point.x][point.y];
}
