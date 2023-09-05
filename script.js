// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

let cubic = userNumber => Math.pow(userNumber, 3)

console.log(cubic(2));
console.log(cubic(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const userSalary = prompt('Введите размер вашей заработной платы')
let test = userInput => {
    if (Number.isNaN(Number(userInput))) {
        alert('Значение неверно');
    }
}

let cleanSalary = userInput => userInput * .87

test(userSalary);

console.log(`Размер заработной платы за вычетом налогов равен: ${cleanSalary(userSalary)}`);



// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const userNumber1 = Number(prompt('Введите первое число'));
const userNumber2 = Number(prompt('Введите второе число'));
const userNumber3 = Number(prompt('Введите третье число'));

const maxNumber = (num1, num2, num3) => Math.max(num1, num2, num3);

console.log(`Максимальное число = ${maxNumber(userNumber1, userNumber2, userNumber3)}`);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const num1 = 5;
const num2 = 10;

function sum (num1, num2) {
    return num1 + num2
}

function sub (num1, num2) {
    if (num1 >= num2) {
        return num1 - num2
    }

    else return num2 - num1
}

function mult (num1, num2) {
    return num1 * num2
}

function mult (num1, num2) {
    return num1 * num2
}

function del (num1, num2) {
    return num1 / num2
}

console.log(`Результат сложения = ${sum(num1, num2)}`);
console.log(`Результат вычитания = ${sub(num1, num2)}`);
console.log(`Результат умножения = ${mult(num1, num2)}`);
console.log(`Результат деления = ${del(num1, num2)}`);