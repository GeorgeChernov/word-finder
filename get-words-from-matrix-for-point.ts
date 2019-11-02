import { Point } from "./point";
import { calcSidePoins } from "./calc-side-points";
import { isAllUnique } from "./helpers";

export function getWordsFromMatrixForPoint(
  firstPoint: Point,
  matrix: string[][]
): string[] {
  const resultList: string[] = [];
  const secondPoints: Point[] = calcSidePoins(firstPoint);

  for (let secondPoint of secondPoints) {
    const thirdPoints: Point[] = calcSidePoins(secondPoint);

    for (let thirdPoint of thirdPoints) {
      const forthPoints: Point[] = calcSidePoins(thirdPoint);

      for (let forthPoint of forthPoints) {
        const fifthPoints: Point[] = calcSidePoins(forthPoint);

        for (let fifthPoint of fifthPoints) {
          const wordInPoints = [
            firstPoint,
            secondPoint,
            thirdPoint,
            forthPoint,
            fifthPoint
          ];

          if (isAllUnique(wordInPoints)) {
            resultList.push(pointsToLetters(wordInPoints, matrix));
          }
        }
      }
    }
  }

  return resultList;
}

function pointsToLetters(points: Point[], matrix: string[][]): string {
  return points.map(point => pointToLetter(point, matrix)).join('');
}

function pointToLetter(point: Point, matrix: string[][]): string {
  return matrix[point.x][point.y];
}
