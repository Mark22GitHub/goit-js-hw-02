const calculateEngravingPrice = function (message, pricePerWord) {
  let countWords = message.split(" ");
  //   console.log(countWords);

  let countLength = countWords.length;
  //   console.log(countLength);

  let pricePerString = pricePerWord * countLength;
  //   console.log(pricePerString);
  return pricePerString;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120
