import { matrixSize } from "./constants";
import { getWordsFromMatrixForPoint } from "./get-words-from-matrix-for-point";
import { Point } from "./point";
import { getMatchedWords } from "./get-matched-words";
import { getWordsFromDictionary } from "./get-words-from-dictionary";
import { onlyUnique } from "./helpers";

export function getWordsFromMatrix(matrix, wordLength: number) {
  const start1: any = new Date();
  const wordsFromDictionary: string[] = getWordsFromDictionary(
    "dictionary.txt",
    wordLength
  );
  const end1: any = new Date();
  console.log(" -- getWordsFromDictionary: %dms", end1 - start1);

  const start2: any = new Date();

  let allWordsFromMatrix: string[] = [];

  for (var x = 0; x < matrixSize; x++) {
    for (var y = 0; y < matrixSize; y++) {
      const wordsFromMatrix: string[] = getWordsFromMatrixForPoint(
        new Point(x, y),
        matrix,
        wordLength
      );

      allWordsFromMatrix = allWordsFromMatrix.concat(wordsFromMatrix);
    }
  }

  const end2: any = new Date();
  console.log(" -- finding letter combinations in matrix: %dms", end2 - start2);

  const start3: any = new Date();
  const matchedWords = getMatchedWords(allWordsFromMatrix, wordsFromDictionary);
  const end3: any = new Date();
  console.log(" -- getMatchedWords: %dms", end3 - start3);

  return matchedWords.filter(onlyUnique);
}
