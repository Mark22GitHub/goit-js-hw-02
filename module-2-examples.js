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
