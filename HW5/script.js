// 1) Написать функцию которая первым принимает значение, которым заполнять массив,
//     а вторым - сколько элементов должно быть в массиве.
//     Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
//
// let arr = [];
//
// function firsFunction(a, b) {
//     for (let i = 0; i <= b; i++) {
//         arr.push(a)
//     }
// }
//
// firsFunction('x', 5);
// console.log(arr);
// //
// // 2) Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
// //     что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
//
// function isNumberInRange(a) {
//     if ( a > 0 && a < 10) {
//         console.log(true)
//     }else {
//         console.log(false)
//     }
//
// }
// isNumberInRange(9);
// //
// // 3) Сделайте функцию isEven() (even - это четный), которая параметром принимает
// // целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// function isEven(a) {
//     if ((a)%2  === 0) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
//
// }
// isEven(2);

// function isEven(a) {
//     return (a % 2 === 0)
//
// }
//
// console.log(isEven(6));


// //
// // 4) Дан массив с целыми числами. Создайте из него новый массив,
// //     где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arrTwo = [];
//
// for (let i = 0; i <= arr.length; i++) {
//     if (isEven(arr[i])) {
//         arrTwo = [...arrTwo, arr[i]]
//     }
// }
// console.log(arrTwo);


// //
// //
// // 5) Создайте функцию, которая получает два параметра – число и степень числа.
// //     Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.

// function myFunction(a, b) {
//  let st =  a ** b;
//     console.log(st)
//
// }
// myFunction(4,5);

// //
// //
// // 6) Функция принимает параметр - возраст пользователя.
// //     Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.

// function year(a) {
//     if ( a < 16) {
//         console.log('вы еще молоды')
//     } else {
//         console.log('добро пожаловать')
//     }
//
// }
// year(15);

// //
// // 7) Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию.
// //     В таком случае выведите сообщение – “Введите возраст”.
// // Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.

// function year(a) {
//     if (a === undefined) {
//         console.log('Введите свой возраст')
//     } else if (a < 16) {
//         console.log('вы еще молоды')
//     } else if (a > 16) {
//         console.log('добро пожаловать')
//     }
//
// }
//
// year(12);
//
// function year(a) {
// let num = (a === 0 || a === undefined) ? 'Введите свой возраст' : (a === 1 || a < 16) ? 'Вы еще молоды' : 'Добро пожаловать';
//     console.log(num)
// }
//
// year();

// function year(a) {
//     let num = a || false;
//     if ( num > 16) {
//         console.log('добро пожаловать')
//     } else if (num === false) {
//         console.log('Введите свой возраст')
//     } else {
//         console.log('вы еще молоды')
//     }
//
// }
//
// year(22);

// //
// // 8) Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
// //     Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
// //     делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.


// function ucFirst(str) {
//     return str[0].toUpperCase() + str.slice(1);
//
//  }
// //
// console.log(ucFirst('maksym'));

// //
// //
// // 9) Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'. ( с помощью функции, которая принимает строку)
//
// function firstFunction(str) {
//     let strOne = str.split('_');
//     for (let i = 1; i < strOne.length; i++) {
//         strOne[i]=ucFirst(strOne[i]);
//
//     }
//     strOne = strOne.join('');
//
// return strOne;
// }
// console.log(firstFunction('var_text_hello'));


// //
// // 10) Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
// //     Функция первым параметром должна принимать текст элемента, а вторым - массив,
// //     в котором делается поиск. Функция должна возвращать true или false.

// function inArray(a,b) {
//     for ( let i = 0; i<=b.length; i++) {
//         if ( a === b[i]) {
//             return true
//         }
//     }
//     return false
// }
// console.log(inArray('loh', ['loh','adnryha','stas']));
//

























