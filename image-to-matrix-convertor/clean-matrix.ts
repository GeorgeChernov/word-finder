import { alphabet } from "./constants";

export function removeIncorrectCharacters(matrixAsString: string) {
  const matrixAsArray = matrixAsString
    .split("\n")
    .filter(str => str.length === 5);

  return matrixAsArray.map(removeIncorrectCharactersForString);
}

function removeIncorrectCharactersForString(inputString: string) {
  return inputString.split("").filter(character => {
    return alphabet.indexOf(character) >= 0;
  });
}
