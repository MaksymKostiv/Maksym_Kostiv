
// 1 - Создать переменную каждого типа данных.

// let number = 22;
// console.log(typeof number);
//
// let str = '22';
// console.log(typeof str);
//
// let bol = true;
// console.log(typeof bol);
//
// let und = undefined;
// console.log(typeof und);
//
// let nul = null;
// console.log(nul);
//
// let bInt = 111231n;
// console.log(typeof bInt);
//
// let symB = Symbol ("id");
// console.log(typeof symB);
//
// let obj = {a: 1};
// console.log(typeof obj);
// console.log()

// 2 - Создать переменную var, let, const. Перезаписать их значения(не для const).

// var str = 'а для чего я вообще нужен в 2022 году';
// str = 'ну наеврное где-то нужен если рассказали за меня';
// console.log(str);
//
// let x = 29;
// x = 11;
// console.log(x);
//
// const name = 'Maksym';
// console.log(name);


// 3 - Привести тип каждого типа данных хотя бы 2-3мя способами(Google).
//
// let num = 1;
// num = '1';
// num = true;
// const boo = !num;
//
// let str = 'hello';
// str = 1;
// const str1 = str + 'hello';
//
// let boolean = true;
// const numOne = +boolean;
// const strOne = `${boolean}22`;
//
// let nul = null;
// const nul1 = +nul;
// nul = 2;
// nul = 'str';
//
// let bInt = 23n;
// bInt = 2;
// const bIntOne = typeof bInt;
//
// let und = undefined;
// const und1 = und < 1;
// und = 1;
//
// let symbol = Symbol('5');
// const symbolOne = typeof symbol;
// symbol = 1;
// symbol = '4';
// symbol = {};



// 4 - Сделать сложение: строка с каждым типом данных; числа с каждым типом данных.

//
//  let strOne = "Hello" + 2;
//  let srtTwo = "Hello" + true;
//  let strThree = "Hello" + undefined;
//  let strFour = "Hello" + null;
//  let strFive = "Hello" + 4242n;
//  let strSix = "Hello" + {a: 1};
//  let strSeven = "Hello" + Symbol("id");
//  let strEight = "Hello" + 'Word';
//
// let numOne = 2 + "Hello";
// let numTwo = 2 + true;
// let numThree = 2 + undefined;
// let numFour = 2 + null;
// let numFive = 2 + 4242n;
// let numSix = 2 + {a: 1};
// let numSeven = 2 + Symbol("id");
// let numEight = 2 + 4;




// 5 - Слелать отнимание: строка с каждым типом данных; числа с каждым типом данных.

// let strOne = "Hello" - 2;
// let srtTwo = "Hello" - true;
// let strThree = "Hello" - undefined;
// let strFour = "Hello" - null;
// let strFive = "Hello" - 4242n;
// let strSix = "Hello" - {a: 1};
// let strSeven = "Hello" - Symbol("id");
// let strEight = "Hello" - 'Word';
//
// let numOne = 2 - "Hello";
// let numTwo = 2 - true;
// let numThree = 2 - undefined;
// let numFour = 2 - null;
// let numFive = 2 - 4242n;
// let numSix = 2 - {a: 1};
// let numSeven = 2 - Symbol("id");
// let numEight = 2 - 4;

//
// 6 - Задача (Условный оператор)
// Пользователь вводит логин и пароль.
//     Если логин и пароль совпадают с указанными ниже, (для проверки login: 'kykold' password: '1234asdQQ')
// то выводится «Добро пожаловать». Если не совпадают –
//  то «Ошибка входа».

// let userName = prompt('Введите логин');
// let password = prompt('Введите пароль');
// if (userName === 'kykold' && password === '1234asdQQ' ) {
//     alert("Добро пожаловать мистер Stark")
// } else {
//     alert("Тут пускают только куколдов")
// }


//
// 7 - Задача (Условный оператор)
// Пользователь вводит год рождения. Программа показывает количество
// лет и если лет больше или равно 16, то пишет – «добро пожаловать»,
// если нет – «вход воспрещен».
//
//
// let yearOfBirth = +prompt("Введите год рождения");
//  let year = 2022;
//  let subtraction = year - yearOfBirth;
//  if ( subtraction >= 16) {
//      alert(`Вам ${subtraction} лет Входи разрешен`)
//  } else {
//      alert(`Вам ${subtraction} лет Домой нахуй`)
//  }



// 8 - Задача (Условный оператор)
// Создайте программу, которая выводит надбавку за стаж.
//     Пользователь вводит стаж работы, а программа пишет ему надбавку.

// let moneyPlus = +prompt("Введите свой стаж работы");
//  if ( moneyPlus  <= 5) {
//      alert("Вам не положина надбавка")
//  } else if (moneyPlus  <= 10) {
//      alert("Ваша надбавка 10% к ЗП")
// } else  {
//      alert("Ваша надбавка 15% к ЗП")
// }




//
// 9 - Задача (Условный оператор и свитч кейс)
// Пользователь вводит число, показывает день недели в зависимости от числа (1 = 'Monday', 2 = 'Tuesday', и так далее)
// 9.1 Решить на иф елсах
// 9.2 Решить на свитч кейсе
// 9.3 Решить на тернарном операторе

// let day = +prompt("Введите день недели");
//     if ( day === 1) {
//         alert('Monday')
//     } else if ( day === 2) {
//         alert("Tuesday")
//     } else if ( day === 3) {
//         alert("Wednesday")
//     } else if ( day === 4) {
//         alert("Thursday")
//     }else if ( day === 5) {
//         alert("Friday")
//     } else if ( day === 6) {
//         alert("Saturday")
//     } else if ( day ===7) {
//         alert("Sunday")
//     } else
//         alert("В неделе всего 7 дней");


// let day = +prompt("Ведите день недели");
//
// let week = (day === 1) ? "Monday" :
//          (day === 2 ) ? "Tuesday" : ( day === 3) ? "Wednesday" :
//                  ( day === 4) ? "Thursday" : ( day === 5) ? "Friday" : ( day === 6) ? "Saturday" :
//                              ( day === 7 ) ? "Sunday" : "В неделе всего 7 дней";
//     alert(week);
//

//
// let day = +prompt("Введите день недели");
//
// switch (day) {
//
//     case 1 :
//        alert ('Monday');
//         break;
//     case  2 :
//         alert("Tuesday");
//         break;
//     case  3 :
//         alert("Wednesday");
//         break;
//     case  4 :
//         alert("Thursday");
//         break;
//     case  5 :
//         alert("Friday");
//         break;
//     case  6 :
//         alert("Saturday");
//         break;
//     case  7 :
//         alert("Sunday");
//         break;
// }


//
// 10 - Задача (Условный оператор)
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//     1, если значение больше нуля,
//     -1, если значение меньше нуля,
//     0, если значение равно нулю.

// let num = +prompt ("Веедите любой число ");
//     if ( num > 0 ) {
//         alert(1)
//     } else if ( num < 0 ) {
//         alert(-1)
//     } else if ( num === 0) {
//         alert(0)
//     }

//
// 11 - Задача (Тернарный оператор)
// Перепишите if..else с использованием нескольких операторов '?'.
//
//     let message =
//
//
// if (login == 'Сотрудник') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }
//
// let login = prompt("Ведите сообщение");
//  let message =  ( login == 'Сотрудник') ? 'Привет' : ( login == 'Директор') ? 'Здраствуйте' : ( login =='') ? 'Нет логина' : 'Нужно написать кто вы!';
//  alert(message);


// 12 - Задача (Условный оператор)
// В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90.
// Пользователь вводит номер квартиры. Программа должна указать в каком подъезде находится данная квартира.

// let building = +prompt("Введите номер квартиры");
//
// let numHome = ( building >=1 && building <=20 ) ? "Ваша квартира в первом подьезде" :
//                               ( building >=21 && building <= 48) ? "Ваша квартира во втором подьезде" :
//                                            ( building >=49 && building <= 90 ) ? "Ваша квартира в третьем подьезде" : "Тут нет такой квартиры";
// alert(numHome);


// 13 - Задача (Условный оператор)
// Напишите if..else, соответствующий следующему switch:
//
//     switch (browser) {
//         case 'Edge':
//             alert( "You've got the Edge!" );
//             break;
//
//         case 'Chrome':
//         case 'Firefox':
//         case 'Safari':
//         case 'Opera':
//             alert( 'Okay we support these browsers too' );
//             break;
//
//         default:
//             alert( 'We hope that this page looks ok!' );
//     }

// let yourBrowser = prompt('Введите свой браузер');
//     if ( yourBrowser === 'Edge') {
//         alert("You've got the Edge!")
//     } else if ( yourBrowser === 'Chrome' || yourBrowser === 'Firefox' || yourBrowser === 'Safari' || yourBrowser === 'Opera' ) {
//         alert('Okay we support these browsers too')
//     } else alert('We hope that this page looks ok!');
//

//
//     14 - Задача (свитч кейс)
//     Переписать условия "if" на "switch"
//     важность: 4
//     Перепишите код с использованием одной конструкции switch:
//
//         const number = +prompt('Введите число между 0 и 3', '');
//
//         if (number === 0) {
//             alert('Вы ввели число 0');
//         }
//
//         if (number === 1) {
//             alert('Вы ввели число 1');
//         }
//
//         if (number === 2 || number === 3) {
//             alert('Вы ввели число 2, а может и 3');
//         }

//
// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//     case 0 :
//         alert("Вы ввели число 0");
//         break;
//     case 1 :
//         alert("Вы ввели число 1");
//         break;
//     case 2 :
//     case 3 :
//         alert("Вы ввели числов 2, а может 3");
//         break;
//
// }
//