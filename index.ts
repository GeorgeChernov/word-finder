import { processImage } from "./image-to-matrix-convertor/index";
import { getWordsFromMatrix } from "./get-words-from-matrix";

async function main() {
  //const start1: any = new Date();
  const matrix = await processImage();
  //const end1: any = new Date();
  //console.log("processImage: %dms", end1 - start1);

  //const start2: any = new Date();
  const words = getWordsFromMatrix(matrix, 8);
  //const end2: any = new Date();
  //console.log("getWordsFromMatrix: %dms", end2 - start2);

  return words;
}

const start: any = new Date();

main().then(words => {
  const end: any = new Date();
  const diff = (end as any) - (start as any);
  console.info("Execution time: %dms", diff);
  console.log("words", words);
});
