import { gridImage, resultImage } from "./constants";

const sharp = require("sharp");
const mergeImg = require("merge-img");

const cellWidth = 130;
const cellHeight = 135;

async function cropGrid(inputImage, outputImage) {
  return sharp(inputImage)
    .extract({ width: 645, height: 660, left: 37, top: 380 })
    .toFile(outputImage);
}

function formLetterPath(value: string): string {
  return "letters/" + value + ".jpg";
}

function cropCell(originalImage, resultImage, rowIndex, columnIndex) {
  return sharp(originalImage)
    .extract({
      width: 75,
      height: 77,
      left: rowIndex * cellWidth + 25,
      top: columnIndex * cellHeight + 15
    })
    .toFile(resultImage);
}

async function cropCells(
  inputImage: string,
  basePathAppender: (fileName) => string
) {
  const cropCellPromises = [];

  for (var x = 0; x < 5; x++) {
    for (var y = 0; y < 5; y++) {
      cropCellPromises.push(
        cropCell(
          inputImage,
          basePathAppender(formLetterPath(x + '' + y)),
          x,
          y
        )
      );
    }
  }

  return Promise.all(cropCellPromises);
}

function mergeByRows(basePathAppender) {
  const mergePromises = [];

  mergePromises.push(
    mergeImg([
      basePathAppender("letters/00.jpg"),
      basePathAppender("letters/10.jpg"),
      basePathAppender("letters/20.jpg"),
      basePathAppender("letters/30.jpg"),
      basePathAppender("letters/40.jpg")
    ]).then(img => {
      img.write(basePathAppender("rows/row0.jpg"));
    })
  );

  mergePromises.push(
    mergeImg([
      basePathAppender("letters/01.jpg"),
      basePathAppender("letters/11.jpg"),
      basePathAppender("letters/21.jpg"),
      basePathAppender("letters/31.jpg"),
      basePathAppender("letters/41.jpg")
    ]).then(img => {
      img.write(basePathAppender("rows/row1.jpg"));
    })
  );

  mergePromises.push(
    mergeImg([
      basePathAppender("letters/02.jpg"),
      basePathAppender("letters/12.jpg"),
      basePathAppender("letters/22.jpg"),
      basePathAppender("letters/32.jpg"),
      basePathAppender("letters/42.jpg")
    ]).then(img => {
      img.write(basePathAppender("rows/row2.jpg"));
    })
  );

  mergePromises.push(
    mergeImg([
      basePathAppender("letters/03.jpg"),
      basePathAppender("letters/13.jpg"),
      basePathAppender("letters/23.jpg"),
      basePathAppender("letters/33.jpg"),
      basePathAppender("letters/43.jpg")
    ]).then(img => {
      img.write(basePathAppender("rows/row3.jpg"));
    })
  );

  mergePromises.push(
    mergeImg([
      basePathAppender("letters/04.jpg"),
      basePathAppender("letters/14.jpg"),
      basePathAppender("letters/24.jpg"),
      basePathAppender("letters/34.jpg"),
      basePathAppender("letters/44.jpg")
    ]).then(img => {
      img.write(basePathAppender("rows/row4.jpg"));
    })
  );

  return mergePromises;
}

function mergeAll(basePathAppender) {
  const promises = mergeByRows(basePathAppender);

  return Promise.all(promises).then(() => {
    mergeImg(
      [
        basePathAppender("rows/row0.jpg"),
        basePathAppender("rows/row1.jpg"),
        basePathAppender("rows/row2.jpg"),
        basePathAppender("rows/row3.jpg"),
        basePathAppender("rows/row4.jpg")
      ],
      { direction: true }
    ).then(img => {
      img.write(basePathAppender(resultImage));
    });
  });
}

export async function normalizeImage(
  originalImage: string,
  basePathAppender: (fileName) => string
) {
  await cropGrid(basePathAppender(originalImage), basePathAppender(gridImage));
  await cropCells(basePathAppender(gridImage), basePathAppender);
  await mergeAll(basePathAppender);
}
