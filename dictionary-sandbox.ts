import * as fs from "fs";
var bs = require("binary-search");

export function getAllWordsFromDictionary(sourseName: string) {
  const resultWords: string[] = [];

  var lines = fs
    .readFileSync(sourseName)
    .toString()
    .split("\n");

  for (let line of lines) {
    resultWords.push(line);
  }

  return resultWords;
}

const start1: any = new Date();
const wordsFromDictionary: string[] = getAllWordsFromDictionary(
  "dictionary.txt"
);
const end1: any = new Date();
console.log(" -- getAllWordsFromDictionary: %dms", end1 - start1);

for (var numberOfLetters = 1; numberOfLetters < 20; numberOfLetters++) {
  console.log(
    "Words with " + numberOfLetters + " letters:",
    wordsFromDictionary.filter(word => word.length === numberOfLetters).length
  );
}

// const count = wordsFromDictionary.filter(word => word.length === 5).length;
// console.log(count);

console.log(
  "Result",
  bs(wordsFromDictionary, "кот", function(element, needle) {
    return element.localeCompare(needle);
  })
);
