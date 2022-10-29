/* part 1*/

// a * b
const a = 25;
const b = 5;
console.log("a + b =", a + b); // = 125

// c / d
const c = 15;
const d = 5;
console.log("c / d =", c / d); // = 3

// e + f
const e = 10;
const f = 32;
console.log("e + f =", e + f); // = 42

/* part 2 */
let num = 11;
let boolean = true;
let string = "java script";
let fakeNumber = "100";
console.log("num =", num);
console.log("boolean =", boolean);
console.log("string =", string);
console.log("fakeNumber =", fakeNumber);

/* part 3*/
num = 1;
console.log("num += 11 =>", (num += 11)); // num = num + 11;
console.log("num -= 11 =>", (num -= 11)); // num = num – 11;
console.log("num *= 11 =>", (num *= 11)); // num = num * 11;
console.log("num /= 11 =>", (num /= 11)); // num = num  /11;
console.log("--num =>", ++num); // num = num + 1;
console.log("--num =>", --num); // num = num – 1;
/* В предыдущих двух строках используется не постинкремент по той причине, что условие постинкремента выполнится после console.log и не покажет результат в консоль*/

/* part 4 */
let userInput1, userInput2;
userInput1 = Number(prompt("Enter the number to move it to the square :"));
// userInput1 ^ 2
console.log("The result of squaring =", Math.pow(userInput1, 2));

alert("Input data for arithmetic mean search");
userInput1 = Number(prompt("Enter the first number :"));
userInput2 = Number(prompt("Enter the second number :"));
// (userInput1 + userInput2) / 2
console.log(
  "Arithmetic mean of the numbers entered =",
  (userInput1 + userInput2) / 2
);

userInput1 = Number(
  prompt(
    "Enter the number of minutes and we will transfer it to You in seconds :"
  )
);
console.log("Time in seconds =", userInput1 * 60, "seconds");

let greeting = "Hello,";
let userName = prompt("Input Your name");
console.log(greeting + " " + userName);
