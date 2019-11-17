var bs = require("binary-search");

export function getMatchedWords(
  wordsFromMatrix: string[],
  wordsFromDictionary: string[]
): string[] {
  const result: string[] = [];

  for (let matrixWord of wordsFromMatrix) {
    const matchedWordIndex = bs(wordsFromDictionary, matrixWord.toLowerCase(), function(
      element,
      needle
    ) {
      return element.localeCompare(needle);
    });

    if (matchedWordIndex >= 0) {
      result.push(wordsFromDictionary[matchedWordIndex]);
    }
  }

  return result;
}
