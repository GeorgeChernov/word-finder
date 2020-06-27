import { getWordsFromDictionary } from "../word-finder/get-words-from-dictionary";

function isDictonarySorted(dictionary: string[]) {
  let prevValue = "а";

  dictionary.forEach((word) => {
    if (word.localeCompare(prevValue) > 0) {
      prevValue = word;
    } else {
      console.log(prevValue, word);
      return;
    }
  });
}

const wordsFromDictionary: string[] = getWordsFromDictionary(
  "dictionary.txt",
  6
);

console.log(isDictonarySorted(wordsFromDictionary));
