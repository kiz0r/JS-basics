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
