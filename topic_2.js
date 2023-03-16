/*1.Дано три цілих числа: a, b, c. Перевірте істинність висловлювання:
a < b < c*/
let a1 = 2;
let b1 = 1;
let c1 = 3;
let res = false;
if (a1 < b1 && b1 < c1) {
    res = true;
}
console.log(res);

/*2. 
Є такий код:*/
let x = 1;
let y = 2;

let res1 = x + String(y);// Допишіть код, необхідно використовувати змінні x і y
//let res1 = String((y * y + y) * y * x);
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = String(x < y) + y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = Boolean(x < y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = (x - x) / (y - y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""

/*3. 
Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”, */

let isAdult = prompt('Ввідіть свій вік:');
if (isAdult > 18) {
    console.log(`Вам ${isAdult}. Вітаю, ви досягли повнолітнього віку`);
} else {
    console.log(`Вам ${isAdult}. Вітаю, ви ще надто молоді`);
}

/*4.
Задано масив чисел, знайти число яке найбільш часто входить в масив, занести це число в новий масив і видалити всі входження цього числа із поточного масиву.*/

let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
// створемо ф-цію, яка підрахує к-ть повторень елементів в масиві 
const numberOfValue = (elem, arr) => {
    let initValue = 0;
    let result = arr.reduce((acc, el, index, arr) => {
        return acc += (elem === el) ? 1 : 0;
    }, initValue);
    return result;
}
console.log('test: ', numberOfValue(arr[1], arr));
// для кожного елемента масива підрахуємо к-ть його входжень
let arrNumber = arr.map((elem, index, arr) => numberOfValue(elem, arr));
console.log('arr: ', arr);
console.log('arrNumber:', arrNumber);
// знайдемо найбільший елемент масиву arrNumber
let maxElem = arrNumber[0];
arrNumber.forEach((elem, index, arr) => {
    maxElem = (elem > maxElem) ? elem : maxElem;
});

console.log('maxElem = ', maxElem);
let data; // значення елементу масива arr, який найчастіше повторюється 
for (let i = arr.length; i >= 0; i--) {
    if (arrNumber[i] === maxElem) {
        data = arr.splice(i, 1);
    }
}
console.log('arr= ', arr);
console.log('data = ', data[0]);

/*5. 
Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
Необхідно 
    a) визначити і вивести в консоль площу трикутника 
    b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).*/
let a = prompt('Enter 1-side of triangle:');
let b = prompt('Enter 2-side of triangle:');
let c = prompt('Enter 3-side of triangle:');
if ((a + b) > c && (a + c) > b && (b + c) > a &&
    a > 0 && b > 0 && c > 0) {
    let p = (a + b + c) / 2;
    let area = Math.sqrt(p * ((p - a) * (p - b) * (p - c)));
    console.log(area);

    const sides = [a, b, c].sort();
    const isRightAngled = Math.pow(sides[2], 2) === Math.pow(sides[0], 2) + Math.pow(sides[1], 2);
    console.log(`Трикутник є прямокутним: ${isRightAngled}`);

} else {
    console.log('Incorrect data');
}
/* 6. 
Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.
___
*/

let date = new Date();
let h = date.getHours();

switch (true) {
    case h >= 23 && h <= 5:
        console.log('Доброї ночі');
    case h >= 5 && h <= 11:
        console.log('Доброго ранку');
    case h >= 11 && h <= 17:
        console.log('Доброго дня');
    case h >= 17 && h <= 23:
        console.log('Доброго вечора');


}