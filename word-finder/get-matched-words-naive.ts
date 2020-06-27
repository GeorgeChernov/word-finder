export function getMatchedWords(
  letterCombinationsFromMatrix: string[],
  wordsFromDictionary: string[]
): string[] {
  const result: string[] = [];

  for (let matrixLetterCombination of letterCombinationsFromMatrix) {
    const matchedWord = wordsFromDictionary.find(
      (dictionaryWord) =>
        !dictionaryWord.localeCompare(matrixLetterCombination.toLowerCase())
    );

    if (matchedWord) {
      result.push(matchedWord);
    }
  }

  return result;
}
