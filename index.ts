import { convertImageToMatrix } from "./image-to-matrix-convertor/index";
import { getWordsFromMatrix } from "./word-finder/get-words-from-matrix";

async function main() {
  const start1: any = new Date();
  const matrix: string[][] = await convertImageToMatrix();
  const end1: any = new Date();
  console.log("convertImageToMatrix: %dms", end1 - start1);

  const start2: any = new Date();
  const words = getWordsFromMatrix(matrix, 8);
  const end2: any = new Date();
  console.log("getWordsFromMatrix: %dms", end2 - start2);

  return words;
}

const start: any = new Date();

main().then((words) => {
  const end: any = new Date();
  const diff = (end as any) - (start as any);
  console.info("Execution time: %dms", diff);
  console.log("words", words);
});
