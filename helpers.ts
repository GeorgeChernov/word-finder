import { Point } from "./point";

export function isAllUnique(points: Point[]) {
  for (let leftPoint of points) {
    let count = 0;

    for (let rigthPoint of points) {
      if (leftPoint.isEqual(rigthPoint)) {
        count++;
      }
    }

    if (count > 1) {
      return false;
    }
  }

  return true;
}

export function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
