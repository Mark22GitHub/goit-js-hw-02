// Module-2 Methods

// const arr = ["Mango", "Poly", "Ajax", 2, 3, 4, { a: 1, b: 2 }];

// if (arr) {
//   console.log(arr);
// }

// for(let i = 0; i < arr.length; i +=1) {}

// console.log(`Element #${i + 1} : ${arr[i]}`);

// for (let el of arr) {
//   console.log(el);
// }

// const arr2 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const arr3 = [];

// for (let el of arr2) {
//   for (let i = 0; i < el.length; i++) {
//     console.log(el[i]);

//     arr3.push(el[i]);
//   }
// }

// console.log(arr3);

// let a = 1;
// let b = a;
// a = 2;
// b = a;
// console.log(b);

// const obj = { name: "John", surname: "Vick" };
// console.log(obj);

// const objCopy = obj;
// console.log(objCopy);

// obj.name = "Vasilii";
// console.log(objCopy);

// Methods Split() & Join()

// let str = "Hello world, I'm Johny";
// console.log(str.split("").join(" "));

// Methods indexOf() & includes()

// const arr = ["Mango", "Poly", "Ajax", 2, 3, 4, { a: 1, b: 2 }];
// console.log(arr.indexOf("Ajax"));

//  Methods push() & pop() , shift(), unshift()

// let arr = [];

// arr.push("1");
// arr.push("2");
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift("0");
// console.log(arr);

// arr.shift();
// console.log(arr);

// REVERSE(Полиандр)
// let str = "AVA";
// let str2 = str.split('').reverse().join('');
// console.log(str === str2);

// Method slice()

// let arr = [1, 2, 3];
// let newArr = arr.slice(1,2);

// console.log(newArr);

// let arr = [1, 2, 3];
// arr.splice(1, 0, "hello");
// console.log(arr);

// #2
// 1.Создайте массив styles с элементами «Джаз» и «Блюз».
// 2.Добавьте «Рок-н-ролл» в конец.
// 3.Замените значение в середине на «Классика». Ваш код для поиска значения
//  в середине должен работать для массивов с любой длиной.
// 4.Удалите первый элемент массива и покажите его.
// 5.Вставьте «Рэп» и «Регги» в начало массива.

// Массив по ходу выполнения операций:
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// let styles = ["Jazz", "Blues"];
// console.log(styles);

// styles.push("Rock-&-Roll");
// console.log(styles);

// styles.splice(1, 1, "Classic");
// console.log(styles);

// console.log(styles.shift());
// console.log(styles);

// styles.unshift("Rap", "Ragee");
// console.log(styles);

//  ===Фунции===

// const fn = function (a = 0, b = 0, c = 0, d = 0) {
//   console.log(a, b, c, d);
// };

// fn(1, 9, 0, 3);

// Псевдомассив arguments

// const showMeArguments = function (...args) {
//   console.log(args);
// };

// showMeArguments("Thor", "Black Widow", "Ant Man");

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let arr2 = [6, 7, 8, 9, 10];
// console.log(arr2);

// let newArr = [...arr, ...arr2];
// console.log(newArr);

// ======================================

// Module-2 task-3(2)

// const findLongestWord = function (string) {
//   let arrayWord = string.split(" ");
//   //   console.log(arrayWord);

//   let longestWord = "";

//   for (let word of arrayWord) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'

// =============================================

// ==============================================

// Module-2 task-4(2)

// const formatString = function (string) {
//     if (string.length <= 40) return string;
// };

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

// console.log(formatString("Curabitur ligula sapien."));

// console.log(
//     formatString(
//         "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//     )
// );

// ============================================================

// ============================================================
// Module-2 task-5(2)

// ===II-Option===

// const checkForSpam = function (message) {
//   message = message.toLowerCase();

//   if (message.indexOf("spam") >= 0 || message.indexOf("sale") >= 0) return true;
//   return false;
// };

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// ===III-Option===

// const checkForSpam = function (message) {
//   message = message.toLowerCase();

//   return (message.includes("spam") || message.includes("sale")) ? true : false;
// };

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// ============================================================

// ============================================================

// Module - 2 task - 6(2)

// ===II-Option===

// let input = prompt("Введите число!");
// const numbers = [];
// let total = 0;

// for (let i = 0; input !== null || input == false; i += 1) {
//   if (i < 10) {
//     console.log(+input);
//   }

//   input = +input;
//   if (!isNan(input)) {
//     numbers.push(input);
//     total += input;
//   } else {
//     console.log("Введите число");
//   }
// }

// console.log(numbers);
// console.log(total);

// ============================================================

// ===practice #7===

// #7
// а теперь максимальное число если функция принимает неограниченое к-во аргументов
// const max = function () {}

// const max = function (...items) {
//   return Math.max(...items);
// };

// console.log(max(20, 10, 50, 40, 222, 30));

// ============================================================

// const createHumanFace = function (head, hair, nose, ears, eyes, beard) {
//   return ` Human's face with params like ${head} head, ${hair} hair, ${nose} nose , ${ears} ears has been created.`;
// };

// console.log(createHumanFace("big", "dark", "big", "small", "green", "nice"));

// ==============

//  === Стрелочная функция(в одну строку) ===

// const createHuman = (head, body, hands, legs) =>
//   console.log(
//     `Human's body with ${head} head , ${body} body, ${hands} hands, ${legs} legs.`
//   );
// createHuman("big", "fat", "three", "shaved");

// ============================================================

// ============================================================
//  === practice #2 ===
// #2
// Напишите функцию hello(), которая при вызове будет принимать переменную name (например, «Василий») и
// выводить строку (в нашем случае «Привет, Василий»).  В случае отсутствующего аргумента выводить «Привет, гость»

// const greeting = function (name = "guest") {
//   console.log(`Hello,  ${name}`);
// };

// greeting("Mark");

// =================
// ===Стрелочная функция(в одну строку)===

// const greeting = (name = "guest") => console.log(`Hello, ${name}`);

// greeting("John");

// ============================================================

// ============================================================

// === practice #3 ===

// #3
// Создайте функцию repeat(str, n), которая возвращает строку, состоящую из
//  n повторений строки str. n — по умолчанию 2, str — пустая строка

// const repeat = function (str, n) {
//   let result = "";
//   for (let i = 0; i < n; i += 1) {
//     result += str;
//   }
//   console.log(result);
// };

// repeat("Mark", 10);

// ============================================================

//  ============================================================

// === practice #4 ===

// #4
// здайте функцию avg() , которая будет находить среднее значение по всем своим аргументам
// (аргументы величины числовые).

// const avg = function (...argumentus) {
//   let total = 0;

//   for (let argument of argumentus) {
//     total += argument;
//   }

//   return Math.floor(total / argumentus.length);
// };

// console.log(avg(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//  ============================================================

// ===function Expression===

// const toShowName = function (firstName, secondName) {
//   console.log(`${firstName} ${secondName}`);
// };

// toShowName("Goga", "Roga");

// ===function Declaration===

// function toShowName(firstName, secondName) {
//     console.log(`${firstName} ${secondName}`)
// }

// ===fuinction ARROW===

// const toShowName = (firstName, secondName) =>
//   console.log(`${firstName} , ${secondName}`);
// toShowName("Shrek", "Reck");

// ==========================Practice==============================

// ===task-1===

// Написати ф-ю capitalize яка буде приймати строку і буде вертати нову строку де кожне слово буде починатися з великої літери.

// capitalize('the quick brown fox') // 'The Quick Brown Fox '

// const capitalize = function (string) {
//   let words = string.split(" ");
//   let arrayCapitalize = [];

//   for (let word of words) {
//     let capitalizeLetter = word[0].toUpperCase() + word.substring(1);
//     arrayCapitalize.push(capitalizeLetter);
//   }
//   return arrayCapitalize.join(" ");
// };

// console.log(capitalize("the quick brown fox"));

// ===task-2===

// Написати ф-ю countVowels яка буде приймати строку і буде вертати кількість голосних літер. aeiouAEIOU - рядок з голосними в англ алфавіті

const vowels = "aeiouAEIOU";
const countVowels = function (string) {
  console.log(string);

  let array = string.split("");
  console.log(array);
  let total = [];
  for (let element of array) {
    //   console.log(element);
    if (vowels.includes(element)) {
      console.log("vowel:", element);

      total.push(element);
    }
  }
  console.log(total);
};

countVowels("the quick brown fox"); // 5
