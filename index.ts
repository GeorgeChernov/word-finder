import { processImage } from "./image-to-matrix-convertor/index";
import { getWordsFromMatrix } from "./get-words-from-matrix";

async function main() {
  const matrix = await processImage();
  const words = getWordsFromMatrix(matrix);

  console.log(words);
}

main();
