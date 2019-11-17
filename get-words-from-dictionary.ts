import * as fs from "fs";

export function getWordsFromDictionary(
  sourseName: string,
  numberOfLetters: number
) {
  const resultWords: string[] = [];

  var lines = fs
    .readFileSync(sourseName)
    .toString()
    .split("\n");

  for (let line of lines) {
    if (containsRequiredNumberOfLetters(line, numberOfLetters)) {
      resultWords.push(line);
    }
  }

  return resultWords;
}

function containsRequiredNumberOfLetters(
  word: string,
  numberOfLetters: number
) {
  return word.length === numberOfLetters;
}
