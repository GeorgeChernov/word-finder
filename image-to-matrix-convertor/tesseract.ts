import * as Tesseract from "tesseract.js";

export function recognize(inputImage) {
  const options = {
    lang: "rus",
    tessedit_char_whitelist: "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ",
    logger: () => {}
  };

  return Tesseract.recognize(
    inputImage,
    "rus",
    options
  );
}
