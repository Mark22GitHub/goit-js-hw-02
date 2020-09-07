const findLongestWord = function (string) {
  let arrayWord = string.split(" ");
  //   console.log(arrayWord);
  let longestWord = arrayWord[0];
  let wordLength = arrayWord[0].length;

  for (let i = 0; i < arrayWord.length; i += 1) {
    // console.log(arrayWord[i]);
    // console.log(arrayWord[i].length);

    if (wordLength < arrayWord[i].length) {
      wordLength = arrayWord[i].length;
      //   console.log(wordLength);
      longestWord = arrayWord[i];
      //   console.log(longestWord);
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
