import { normalize } from "./image-normalizer";
import { recognize } from "./tesseract";

const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

function removeIncorrectCharacters(inputStrings: string[]) {
  return inputStrings.map(removeIncorrectCharactersForString);
}

function removeIncorrectCharactersForString(inputString: string) {
  return inputString
    .split("")
    .filter(character => {
      return alphabet.indexOf(character) >= 0;
    });
}

normalize().then(
  () => {
    recognize().then(({ data: { text } }) => {
      const result = removeIncorrectCharacters(text.split("\n")).filter(
        str => str.length === 5
      );

      console.log(result);
    });
  },
  error => console.error(error)
);
