

// КАК РАБОТАЕТ КОЛЛБЕК С ФУНКЦИЯМИ
// Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);




// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest("Манго", function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Поли", function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });



// ЛОГИКА ПРИНЯТИЯ ЗВОНКОВ ТЕЛЕФОНА
// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall("Манго");




// ЗАСТАВЛЯЕМ РАБОТАТЬ С НЕОПРЕДЕЛЕННЫМ (n) КОЛЛИЧЕСТВОМ РАЗ
// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(6);



// МЕТОД ПЕРЕБОРА forEach
// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });





// СТРЕЛОЧНЫЕ ФУНКЦИИ 
// const numbers = [5, 10, 15, 20, 25];

// // Объявление функции
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// // Анонимная стрелочная функция
// numbers.forEach((number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// });





// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// makeMessage(('Royal Grand', makePizza));




// ПРИМЕР РАБОТЫ ИНЛАЙН ФУНКЦИИ КАК КОЛЛБЕКА (ЕСЛИ ОНА МАЛЕНЬКАЯ И 
// НУЖНА ТОЛЬКО КАК АРГУМЕНТ) 
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest("Mango", function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Poly", function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });




// ЕЩЕ 2 ТАКИХ ПРИМЕРА
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });

// makePizza("Ultracheese", function eatPizza (pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`)
// });





// function makeBet(betType, callback) {
//     console.log(`Your ${betType} is being prepared...`);
//     callback(betType);
// }

// makeBet("Bet 1.6", function badBet(betType) {
//     console.log(`${betType} is not a good one :(`);
// });

// makeBet("Bet 2.5", function goodBet(betType) {
//     console.log(`${betType} is you best option`);
// });







// ЛОГИКА ПРИНЯТИЙ ЗВОНКОВ ДЛЯ ТЕЛЕФОНОВ 
// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);







// МЕТОД ПЕРЕБОРА forEach 
// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });




// СКЛАДЫВАЕМ ВСЕ ЧИСЛА С ПОМОЩЬЮ forEach
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

// // Классический for
//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

// // Перебирающий forEach
//   orderedItems.forEach(function (elem) {
//     totalPrice += elem;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 95, 44]));







// ДОСТАЕМ САМЫЕ БОЛЬШИЕ ЧИСЛА С ПОМОЩЬЮ forEach
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

// // Классический for
// //   for (let i = 0; i < numbers.length; i += 1) {
// //     if (numbers[i] > value) {
// //       filteredNumbers.push(numbers[i]);
// //     }
// //   }
//     // Перебирающий forEach
//     numbers.forEach(function (element) {
//         if (element > value) {
//             filteredNumbers.push(element)
//         }
//     });

//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));




// ВЫВОДИМ ОБЩИЕ ЧИСЛА ИЗ ДВУХ МАССИВОВ В НОВЫЙ МАССИВ
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
    
// // // Классический for
//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

// // // Перебирающий forEach
//   firstArray.forEach(function (elem) {
//     if (secondArray.includes(elem)) {
//       commonElements.push(elem)
//     }
//   })

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([2, 9, 6], [3, 9, 12]));






// Обычное объявление функции
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Тоже самое как стрелочная функция
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };


// console.log(arrowAdd(2, 4, 6));




// =====================================================================================




// ПРИМЕРЫ РЕФАКТОРИНГА КОДА С ПОМОЩЬЮ СТРЕЛОЧНЫХ ФУНКЦИЙ

// БЫЛО
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// СТАЛО
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([2, 9, 22]));






// БЫЛО
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// }


// // СТАЛО
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// }




// БЫЛО
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
// }



// // СТАЛО
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
// }



// ==== = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 


// МЕТОД map


// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригинальный массив не изменился
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]





// ПРИМЕР ИСПОЛЬЗОВАНИЯ map ВМЕСТЕ С ПЕРЕБОРОМ
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);






// ВЫБИРАЕМ В ОТДЕЛЬНЫЙ МАССИВ ТОЛЬКО НАЗВАНИЯ КНИГ

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map(book => book.title);

// console.log(titles);






// МЕТОД flatMap
// нужен, что бы разгладить массив в один большой массив


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap(genre => genre.genres);
// console.log(genres);






// const users = [
    
//         {
//             name: "Moore Hensley",
//             email: "moorehensley@indexia.com",
//             eyeColor: "blue",
//             friends: ["Sharron Pace"],
//             isActive: false,
//             balance: 2811,
//             skills: ["ipsum", "lorem"],
//             gender: "male",
//             age: 37,
//         },
//         {
//             name: "Sharlene Bush",
//             email: "sharlenebush@tubesys.com",
//             eyeColor: "blue",
//             friends: ["Briana Decker", "Sharron Pace"],
//             isActive: true,
//             balance: 3821,
//             skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//             gender: "female",
//             age: 34,
//         },
//         {
//             name: "Ross Vazquez",
//             email: "rossvazquez@xinware.com",
//             eyeColor: "green",
//             friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//             isActive: false,
//             balance: 3793,
//             skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//             gender: "male",
//             age: 24,
//         },
//         {
//             name: "Elma Head",
//             email: "elmahead@omatom.com",
//             eyeColor: "green",
//             friends: ["Goldie Gentry", "Aisha Tran"],
//             isActive: true,
//             balance: 2278,
//             skills: ["adipisicing", "irure", "velit"],
//             gender: "female",
//             age: 21,
//         },
//         {
//             name: "Carey Barr",
//             email: "careybarr@nurali.com",
//             eyeColor: "blue",
//             friends: ["Jordan Sampson", "Eddie Strong"],
//             isActive: true,
//             balance: 3951,
//             skills: ["ex", "culpa", "nostrud"],
//             gender: "male",
//             age: 27,
//         },
//         {
//             name: "Blackburn Dotson",
//             email: "blackburndotson@furnigeer.com",
//             eyeColor: "brown",
//             friends: ["Jacklyn Lucas", "Linda Chapman"],
//             isActive: false,
//             balance: 1498,
//             skills: ["non", "amet", "ipsum"],
//             gender: "male",
//             age: 38,
//         },
//         {
//             name: "Sheree Anthony",
//             email: "shereeanthony@kog.com",
//             eyeColor: "brown",
//             friends: ["Goldie Gentry", "Briana Decker"],
//             isActive: true,
//             balance: 2764,
//             skills: ["lorem", "veniam", "culpa"],
//             gender: "female",
//             age: 39,
//         },
//     ];
// const getUserNames = users.flatMap(user => user.name);
// console.log(getUserNames);





// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const courses = students.flatMap(student => student.courses);
//  console.log(courses);
// // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]






// МЕТОД filter
// используется только для фильтрации массивов

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригинальный массив не изменился
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]




// ХОТИМ ОТОБРАТЬ УНИКАЛНЫЕ ПРЕДМЕТЫ С ПОМОЩЬЮ filter

// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// console.log(allCourses);
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// console.log(uniqueCourses);






// ХОТИМ ОТОБРАТЬ СТУДЕНТОВ ПО УСПЕВАЕМОСТИ 
// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Манго и Киви

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Аякс

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Массив объектов с именами Поли и Хьюстон








// СОРТИРУЕМ ЧИСЛА ПО ЧЕТНЫМ И НЕ ЧЕТНЫМ
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);






// СОРТИРУЕМ ПО ВСЕМ ЖАНРАМ И УНИКАЛЬНЫМ ЖАНРАМ

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// const allGenres = books.flatMap(genre => genre.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, books) => books.indexOf(genre) === index
// );

// console.log(allGenres);
// console.log(uniqueGenres);
// console.log(books);






// ОТБИРАЕМ ПО 2 КРИТЕРИЯМ - РЕЙТИНГ И АВТОР 

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(rate => rate.rating >= MIN_RATING);
// const booksByAuthor = books.filter(guy => guy.author === AUTHOR);

    
// console.log(topRatedBooks);
// console.log(booksByAuthor);









// МЕТОД find()
// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const newPoint = colorPickerOptions.find(option => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
// colorPickerOptions.find(option => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
// colorPickerOptions.find(option => option.label === "white"); // undefined

// console.log(newPoint);





// МЕТОД every()

// Все элементы больше либо равны нулю? - да
// const one = [1, 2, 3, 4, 5].every(value => value >= 0); // true

// // Все элементы больше либо равны нулю? - нет
// const two = [1, 2, 3, -10, 4, 5].every(value => value >= 0); // false

// console.log(one);
// console.log(two);


// // МЕТОД some()

// // Есть хотя бы один элемент больше либо равный нулю? - да
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Есть хотя бы один элемент больше либо равный нулю? - да
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Есть хотя бы один элемент меньше нуля? - нет
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Есть хотя бы один элемент меньше нуля? - да
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true



// РАБОТА С МАССИВОМ ОБЪЕКТОВ С ПОМОЩЬЮ every() и some()

const fruits = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "grapes", amount: 50 },
];

// every вернет true только если всех фруктов будет больше чем 0 штук
const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

// some вернет true если хотябы одного фрукта будет больше чем 0 штук
const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true







// ПРОВЕРЯЕМ НА ЧЕТНОСТЬ И НЕ ЧЕТНОСТЬ С ПОМОЩЬЮ every()

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every(numb => numb % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(numb => numb % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(numb => numb % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(numb => numb % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(numb => numb % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(numb => numb % 2 !== 0);






// ХОТТИМ УЗНАТЬ ВСЕ ЛИ ПОЛЬЗОВАТЕЛИ АКТИВНЫ С ПОМОЩЬЮ every()

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const isEveryUserActive = (users) => {
//     const activeUser = users.every(user => user.isActive)
//   return activeUser;
// };






// МЕТОД some()

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const anyElementInFirstIsEven = firstArray.some(num => num % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(num => num % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(num => num % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(num => num % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(num => num % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(num => num % 2 !== 0);


// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);









// МЕТОД reduce()

// const total = [2, 7, 3, 22, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); 




// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдем по всем элементам коллекции и добавим значения свойства tags
// // к аккумулятору, начальное значение которого укажем пустым массивом [].
// // На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// // Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// // для сбора тегов из коллекции
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));





// ПОДСЧИТЫВАЕМ ОБЩЕЕ И СРЕДНЕЕ КОЛЛИЧЕСТВО ПРОВЕДЕННОГО ВРЕМЕНИ В ИГРЕ 
// ПРИ ПОМОЩИ reduce()
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // console.log(playtimes);
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
// return previousValue + number
// }, 0);
// console.log(totalPlayTime);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;






// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed
// }, 0);
// console.log(totalAveragePlaytimePerGame);






// ПОДСЧИТЫВАЕМ ОБЩИЙ БАЛЛАНС ПОЛЬЗОВАТЕЛЕЙ С ПОМОЩЬЮ reduce()
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]


// const calculateTotalBalance = users => users.reduce((total, user) =>
//     total + user.balance, 0)

// console.log(calculateTotalBalance(users));








// МЕТОД sort()

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort();

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log(releaseDates);
// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);







const students = [
  { name: "Манго", score: 83 },
  { name: "Поли", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Киви", score: 94 },
];

const inAscendingScoreOrder = [...students].sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = [...students].sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);

// console.log(inAscendingScoreOrder);
// console.log(inDescendingScoreOrder);
// console.log(inAlphabeticalOrder);





// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((lowestRate, highestRate) => lowestRate.rating - highestRate.rating);

// const sortedByDescentingRating = [...books].sort((lowestRate, highestRate) => highestRate.rating - lowestRate.rating);


// console.log(books);
// console.log(sortedByAuthorName);


// function sum(a, b) {
//     const total = a + b;
//     return total;

// }
// console.log(sum(2, 9786756));







// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = [...books]
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//     .map((book) => book.author)
//     .sort((a, b) => a.localeCompare(b));

// console.log(names);





// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]


// const getNamesSortedByFriendCount = users =>
//     [...users]
//         .sort((a, b) => a.friends.length - b.friends.length)
//         .map(user => user.name);

//         console.table(users);
//         console.table(getNamesSortedByFriendCount(users));
        





// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]


// const getSortedFriends = users =>
//     [...users]
//         .flatMap(user => user.friends)
//         .filter((friend, index, array) => array.indexOf(friend) === index)
//         .sort((a, b) => a.localeCompare(b));


// console.log(users);
// console.table(users);

// console.log(getSortedFriends(users));
// console.table(getSortedFriends(users));




