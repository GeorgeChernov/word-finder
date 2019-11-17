const sharp = require("sharp");
const mergeImg = require("merge-img");

const source = "sourceImage.PNG";
const gridImage = "croppedImage.jpg";

const k = 2;
const cellWidth = Math.round(225 / k);
const cellHeight = Math.round(230 / k);

function cropGrid(originalImage, resultImage) {
  return sharp(originalImage)
    .extract({
      width: Math.round(1115 / k),
      height: Math.round(1145 / k),
      left: Math.round(65 / k),
      top: Math.round(650 / k)
    })
    .toFile(resultImage);
}

function cropCell(originalImage, resultImage, rowIndex, columnIndex) {
  return sharp(originalImage)
    .extract({
      width: Math.round(140 / k),
      height: Math.round(130 / k),
      left: rowIndex * cellWidth + Math.round(40 / k),
      top: columnIndex * cellHeight + Math.round(50 / k)
    })
    .toFile(resultImage);
}

function cropCells() {
  const cropCellPromises = [];

  for (var x = 0; x < 5; x++) {
    for (var y = 0; y < 5; y++) {
      cropCellPromises.push(
        cropCell(gridImage, "letters/" + x + y + ".jpg", x, y)
      );
    }
  }

  return Promise.all(cropCellPromises);
}

function mergeByRows() {
  const mergePromises = [];

  mergePromises.push(
    mergeImg([
      "letters/00.jpg",
      "letters/10.jpg",
      "letters/20.jpg",
      "letters/30.jpg",
      "letters/40.jpg"
    ]).then(img => {
      img.write("rows/row0.jpg");
    })
  );

  mergePromises.push(
    mergeImg([
      "letters/01.jpg",
      "letters/11.jpg",
      "letters/21.jpg",
      "letters/31.jpg",
      "letters/41.jpg"
    ]).then(img => {
      img.write("rows/row1.jpg");
    })
  );

  mergePromises.push(
    mergeImg([
      "letters/02.jpg",
      "letters/12.jpg",
      "letters/22.jpg",
      "letters/32.jpg",
      "letters/42.jpg"
    ]).then(img => {
      img.write("rows/row2.jpg");
    })
  );

  mergePromises.push(
    mergeImg([
      "letters/03.jpg",
      "letters/13.jpg",
      "letters/23.jpg",
      "letters/33.jpg",
      "letters/43.jpg"
    ]).then(img => {
      img.write("rows/row3.jpg");
    })
  );

  mergePromises.push(
    mergeImg([
      "letters/04.jpg",
      "letters/14.jpg",
      "letters/24.jpg",
      "letters/34.jpg",
      "letters/44.jpg"
    ]).then(img => {
      img.write("rows/row4.jpg");
    })
  );

  return mergePromises;
}

function mergeAll() {
  const promises = mergeByRows();

  return Promise.all(promises).then(() => {
    mergeImg(
      [
        "rows/row0.jpg",
        "rows/row1.jpg",
        "rows/row2.jpg",
        "rows/row3.jpg",
        "rows/row4.jpg"
      ],
      { direction: true }
    ).then(img => {
      img.write("resultImage.jpg");
    });
  });
}

export function normalize() {
  return cropGrid(source, gridImage).then(() =>
    cropCells().then(() => mergeAll())
  );
}
