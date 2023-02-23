
// variables
let firstName;
let lastName;
let birthDate;
let squarePerimeter;
let circleRadius;
let distance;
let speed;
const pi = 3.14;
const currentYear = 2023;
const euro = 0.94;

/* Bad examples of naming:

let VALUE;
let varname;
let vARnAME;
let shit;
let var name;

 */

//name
firstName = prompt("Як тебе звуть?");
console.log("Як тебе звуть?");
console.log(firstName);
alert('Привіт, ' + firstName + '!');
console.log('Привіт, ' + firstName + '!');


//age
birthDate = prompt('В якому році ти народився?', "2002");
console.log('В якому році ти народився?');
console.log(birthDate);
let userAge = currentYear - birthDate;
alert('Ну ти і дід! Тобі вже цілих ' + userAge + " років! (або на рік менше, залежить від того, коли в тебе ДН)");
console.log('Ну ти і дід! Тобі вже цілих ' + userAge + " років! (або на рік менше, залежить від того, коли в тебе ДН)");


//square perimeter
squarePerimeter = prompt('Напиши сторону квадрату, а я скажу тобі періметр');
console.log('Напиши сторону квадрату, а я скажу тобі періметр')
let squareResult = squarePerimeter * 4;
console.log(squarePerimeter);
alert('Періметр дорівнює ' + squareResult + ' см');
console.log('Періметр дорівнює ' + squareResult + ' см');


//circle area
circleRadius = prompt('Напиши радіус кола, а я скажу тобі його площу');
console.log('Напиши радіус кола, а я скажу тобі його площу');
console.log(circleRadius);
let circleResult = pi * circleRadius * circleRadius;
alert('Площа кола дорівнює ' + circleResult + ' см! Ось така я розумна!');
console.log('Площа кола дорівнює ' + circleResult + ' см! Ось така я розумна!');


//time
distance = prompt('Напиши відстань між двома містами');
speed = prompt('А тепер напиши швідкість, з якою ти збираєшся рухатися');
console.log(distance, speed);
let time = distance / speed;
alert('Ти проїдеш відстань ' + distance + ' км зі швидкістю ' + speed + ' км/г за ' + time + ' годин');
console.log('Ти проїдеш відстань ' + distance + ' км зі швидкістю ' + speed + ' км/г за ' + time + ' годин');


//curs valut
let dollar = prompt('А тепер напиши кількість доларів, а я тобі конвертую в євро');
console.log(dollar);
let converterResult = dollar * euro;
alert('От скільки євриків вийде з твоїх долярів: ' + converterResult);
console.log('От скільки євриків вийде з твоїх долярів: ' + converterResult);