import { normalizeImage } from "./image-normalizer";
import { originalImage, resultImage } from "./constants";
import { recognize } from "./tesseract";
import { RecognizeResult } from "tesseract.js/src";
import { removeIncorrectCharacters } from "./clean-matrix";

const basePath = "./resources/";

function basePathAppender(fileName: string) {
  return basePath + fileName;
}

export async function processImage() {
  await normalizeImage(originalImage, basePathAppender);
  const result = await recognize(basePathAppender(resultImage));

  return removeIncorrectCharacters(result.data.text);
}
