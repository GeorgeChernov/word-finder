import { alphabet } from "./constants";

export function removeIncorrectCharacters(matrixAsString: string) {
  const matrixAsArray = matrixAsString.split("\n");

  return matrixAsArray
    .map(removeIncorrectCharactersForString)
    .filter(str => str.length === 5);
}

function removeIncorrectCharactersForString(inputString: string) {
  return inputString.split("").filter(character => {
    return alphabet.indexOf(character) >= 0;
  });
}
