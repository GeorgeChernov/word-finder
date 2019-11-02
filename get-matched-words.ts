export function getMatchedWords(
  wordsFromMatrix: string[],
  wordsFromDictionary: string[]
): string[] {
  const result: string[] = [];

  for (let matrixWord of wordsFromMatrix) {
    const matchedWords = wordsFromDictionary.filter(
      dictionaryWord => dictionaryWord === matrixWord.toLowerCase()
    );

    if (matchedWords && matchedWords[0]) {
      result.push(matchedWords[0]);
    }
  }

  return result;
}
