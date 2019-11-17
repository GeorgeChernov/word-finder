import { matrixSize, wordLength } from "./constants";
import { getWordsFromMatrixForPoint } from "./get-words-from-matrix-for-point";
import { Point } from "./point";
import { getMatchedWords } from "./get-matched-words";
import { getWordsFromDictionary } from "./get-words-from-dictionary";
import { onlyUnique } from "./helpers";

const wordsFromDictionary: string[] = getWordsFromDictionary(
  "dictionary.txt",
  wordLength
);

export function getWordsFromMatrix(matrix) {
  let result: string[] = [];

  for (var x = 0; x < matrixSize; x++) {
    for (var y = 0; y < matrixSize; y++) {
      const wordsFromMatrix: string[] = getWordsFromMatrixForPoint(
        new Point(x, y),
        matrix,
        wordLength
      );

      result = result.concat(
        getMatchedWords(wordsFromMatrix, wordsFromDictionary)
      );
    }
  }

  return result.filter(onlyUnique);
}
