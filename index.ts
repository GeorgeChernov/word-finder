import { matrix } from "./source";
import { Point } from "./point";
import { getWordsFromDictionary } from "./get-words-from-dictionary";
import { getWordsFromMatrixForPoint } from "./get-words-from-matrix-for-point";
import { matrixSize, wordLength } from "./constants";
import { getMatchedWords } from "./get-matched-words";
import { onlyUnique } from "./helpers";

const wordsFromDictionary: string[] = getWordsFromDictionary(
  "dictionary.txt",
  wordLength
);

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

const finalResult = result.filter(onlyUnique);

console.log(finalResult, finalResult.length);
