// const pricePerBitcoin = 21000;
// const ownMoney = 990000;
// const canBuy = (ownMoney / pricePerBitcoin);
// console.log(canBuy);




// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("*")); // 'JavaScript*is*amazing'



// КАК СДЕЛАТЬ СЛАГ
// function slugify(title) {
//   // Change code below this line
//     return title.toLowerCase().split(' ').join('-');
// }
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));



// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   const allArray = firstArray.concat(secondArray);
//   const arrayLength = allArray.length;
//   if (arrayLength > maxLength) {
//     console.log(allArray.slice(0, maxLength));
//     return;
//   }

//     // Change code above this line
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)




// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// ПЕРЕБРАТЬ ВСЕ ПО ОЧЕРЕДИ
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// for (let i = 0; i < fruits.length; i += 1) { 
//   const fruit = fruits[i]; 
//   console.log(fruit);
// }

// НАЙТИ САМОЕ ДЛИННОЕ СЛОВО
// function findLongestWord(string) {
// const words = string.split(" ");
//   let longestWord = words[0];
//   for (let i = 0; i < words.length; i += 1) {
//     if (longestWord.length < words[i].length) {
//     longestWord = words[i];
//     } 
//   }
//   return longestWord;

// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))




// function filterArray(numbers, value) {
//    // Change code below this line
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//         newArray.push(numbers[i])
        
//     }
      
//   }
    
//   return newArray;
//   // Change code above this line
// }
// console.log(filterArray);





// ПРОВЕРИТЬ, ЕСТЬ ЛИ В МАССИВЕ ЭЛЕМЕНТ СО ЗНАЧЕНИЕМ VALUE
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit('plum'));
// console.log(checkFruit('bear'));
// console.log(checkFruit());




// НАЙТИ ОБЩИЕ ЭЛЕМЕНТЫ МАССИВА
// function getCommonElements(array1, array2) {
//   const newArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray
// }
// console.log(getCommonElements([1, 2, 3], [5, 6, 3])); //3



// КАК РАБОТАЕТ ЦИКЛ FOR OF
// const planets = ["Earth", "Mars", "Venus"];
// for (const planet of planets) {
//   console.log(planet);
// }


// ПОДСЧЕТ ОБЩЕЙ СУММЫ С ПОМОЩЬЮ ЦИКЛА FOR OF
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let newOrder of order) {
//     total += newOrder;
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); //138



// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number)




// ОСТАНАВЛИВАЕМ ЦИКЛ ПОСЛЕ НУЖНОГО ЗНАЧЕНИЯ 
// function fn() {
//   for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log("Нашли число 3, делаем возврат, прерывая цикл и функцию");
//       return i;
//     }
//   }

//   // Этот console.log не выполнится
//   console.log("Лог после цикла в теле функции");
// }

// const result = fn();
// console.log("Лог после выхода из функции");
// console.log(`Результат выполнения функции ${result}`);





// ОБЪЕКТЫ ОБЪЕКТЫ ОБЪЕКТЫ ОБЪЕКТЫ ОБЪЕКТЫ ОБЪЕКТЫ ОБЪЕКТЫ ОБЪЕКТЫ ОБЪЕКТЫ

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("драма");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ['historical prose', 'adventures', 'драма']




// // ✅ Логически и синтаксически сгруппированные сущности
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Это метод объекта
//   getBooks() {
//     console.log("Этот метод будет возвращать все книги - свойство books");
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     console.log("Этот метод будет добавлять новую книгу в свойство books");
//   },
// };

// // Вызовы методов
// bookShelf.getBooks();
// bookShelf.addBook("Новая книга");




//ДОСТУП К ОБЪЕКТУ ЧЕРЕЗ МЕТОД this
// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед точкой стоит объект bookShelf,
// // поэтому при вызове метода, this будет хранить ссылку на него.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}


// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']



// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }



// ПРОВЕРКА НА СОБСТВЕННЫЕ (МЕТОД hasOwnProperty()) И НЕ СОБСТВЕННЫЕ СВОЙСТВА (true или false)
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Если это не собственное свойство - ничего не делаем
// }



// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }


//СГЕНЕРИРОВАТЬ РАНДОМНЫЙ ID
// function generateID() {
//     return Math.random().toString().slice(3);
// }

// console.log(generateID());




// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

// console.log(product.image);




// Синтаксис вычисляемых свойств
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",


//   // Change code above this line
// };

// console.log(credentials);



// ПЕРЕБИРАЕМ ОБЪЕКТ
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }


// ПОДСТАВЛЯЕМ В МАССИВ ЗНАЧЕНИЯ ИЗ ОБЬЕКТА 
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// };

// console.log(keys);
// console.log(values);



//ПРОВЕРЯЕМ НА СОБСТВЕННЫЕ СВОЙСТВА ЧЕРЕЗ hasOwnProperty
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     if (apartment.hasOwnProperty(key)){
//     keys.push(key);
//     values.push(apartment[key]);
//     }
// }
// console.log(apartment);





//Пишем функцию которая считает и возвращает количество собственных 
//свойств объекта в параметре object, вместе с hasOwnProperty

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (const key in object) {
//   if (object.hasOwnProperty(key)) {
//     propCount += 1;
//   }
// }
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({ name: 'Mango', age: 2 }));


// Тоже самое только не учитывая собственные свойства 
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (const key in object) {
//   propCount += 1
// }
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({ name: 'Mango', age: 2 }));



// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }



// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for(const key of keys){
//     console.log(key)
//   }

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }



// CЧИТАЕМ СУММУ ЗАРПЛАТ СОТРУДНИКОВ 
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
// const values = Object.values(salaries);
//   for (const value of values) {
//   totalSalary += value;
// }
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 39, dildon: 8765, poppo: 245}));




// ПЕРЕБИРАЕМ ОБЬЕКТЫ С ОДИНАКОВЫМИ КЛЮЧАМИ 
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
// ];

// for (const book of books) {
//   // Объект книги
//   console.log(book);
//   // Название
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }


// ВЫВОДИМ В МАССИВ ОТДЕЛЬНО ПАРАМЕТРЫ В РАМКАХ ОДНОГО ОБЪЕКТА 
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// };
// console.log(colors);
// console.log(hexColors);
// console.log(rgbColors);



// ПОИСК ЦЕНЫ ПО ИМЕНИ ПРОДУКТА
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//  for (const key of products) {
//    if (key.name === productName) {
//      return key.price;
//    }  
//  }
// return null;
// }

// console.log(getProductPrice("Scanner"));





//  ВЫНОСИМ В МАССИВ ЗНАЧЕНИЯ СВОЙСТВ 
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let propertyValues = [];
  
// for (const product of products) {
//   const keys = Object.keys(product);
  
//   if (keys.includes(propName)) {
//     propertyValues.push(product[propName])
//   }
// }
//   return propertyValues;
// }

// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));






// ВЫЧИСЛЯЕМ ОБЩУЮ СУММУ ТОВАРА
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
// let totalPrice = 0;
//   for (const product of products) {
//      if (productName === product.name) {
//     totalPrice = product.price * product.quantity
//     }
//   }

//   return totalPrice;
// }

// console.log(calculateTotalPrice('Scanner'));


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: false,
//   rating: 8.38,
// };

// const accessType = book.public ? "публичном" : "закрытом";
// const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится в ${accessType} доступе.`;


// console.log(message);




// ДЕСТРУКТУРИЗАЦИЯ И ДОБАВЛЕНИЕ НОВЫХ СВОЙСТВ 
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday,
//   today,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   tomorrow
// } = highTemperatures

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(highTemperatures);






// ДЕСТРУКТУРИЗАЦИЯ С ПОМОЩЬЮ FOR OF
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
// ];
// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
// // ЕЩЕ ВАРИАНТ ДЕСТРУКТУРИЗАЦИИ, ЕСЛИ СВОЙСТВ НЕ МНОГО
// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }



// ЕЩЕ ВАРИАНТЫ РЕСТРУКТУРИЗАЦИИ НА ПРИМЕРЕ ПРОГНОЗА ПОГОДЫ 
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//     today: {
//         high: highToday,
//         low: lowToday,
//         icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
//     },
//     tomorrow: {
//         high: highTomorrow,
//         low: lowTomorrow,
//         icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//     }
// } = forecast;


// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// console.log(highToday);
// console.log(forecast.tomorrow);



// ВЫСЧИТЫВАЕМ СРЕДНЮЮ ТЕМПЕРАТУРУ ЗА СЕГОДНЯ И ЗАВТРА, И ВЫЗЫВАЕМ ЧЕРЕЗ КОНСОЛЬ
// function calculateMeanTemperature(forecast) {
//     const {
//         today: {
//             high: todayHigh,
//             low: todayLow
//         },
//         tomorrow: {
//             high: tomorrowHigh,
//             low: tomorrowLow
//         }
//     } = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }));




// РАСПЫЛЕНИЕ С ПОМОЩЬЮ ... Spread
// const temps = [14, -4, 25, 8, 11];

// // В консоли будет массив
// console.log(temps);
// console.log(Math.max(temps));
// // А сейчас уже нет
// console.log(...temps);
// console.log(Math.max(...temps));



// ИЩЕМ САМЫЙ БОЛЬШОЙ И МАЛЕНЬКИЙ АРГУМЕНТЫ С ПОМОЩЬЮ Math.max()/Math.min()
// ТУТ ЖЕ И ЮЗАЕМ ... SPREAD
// const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);








// ДЕЛАЕМ КОПИЮ МАССИВОВ С ПОМОЩЬЮ ... SPREAD 

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Тут начинаем создавать новый массив на основе старых (копия)
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);






// ТА ЖЕ ИСТОРИЯ И С ОБЪЕКТАМИ
// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); 



// ВАЖНА ПОСЛЕДОВАТЕЛЬНОСТЬ РАСПЫЛЕНИЯ, ТАК КАК ЗНАЧЕНИЯ МОГУТ МЕНЯТЬСЯ 
// И ПЕРЕЗАПИСЫВАТЬСЯ ВМЕСТО СТАРЫХ
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); 

// const fourth = { ...second, ...first };
// console.log(fourth);




// ТАКИМ ЖЕ ОБРАЗОМ ЗАМЕНЯЕМ СВОЙСТВА И НА ВЫХОДЕ ПОЛУЧАЕМ 
// НОВЫЙ ОБЪЕКТ С ОБНОВЛЕННЫМИ ДАННЫМИ 
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);


// ИСПОЛЬЗУЕМ ОПЕРАТОР  ... REST
// И ПИШЕМ ФУНКЦИЮ, КОТОРАЯ СЧИТАЕТ И ВОЗВРАЩАЕТ 
// СУММУ ПРОИЗВОЛЬНЫХ АРГУМЕНТОВ
// function add(...args) {
//   let argsNumber = 0;
//   for (const arg of args){
//       argsNumber += arg;
//   }
//   return argsNumber;
// }
// console.log(add(10, 45, 88));


// ПЕРЕДАЕМ ЗНАЧЕНИЯ, А ТЕ ЧТО ВСЕ ОСТАЛЬНЫЕ ДЕЛАЕМ ЧЕРЕЗ REST - УХОДЯТ В МАССИВ
// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);



// СЧИТАЕМ СУММУ АРГУМЕНТОВ, КОТОРЫЕ БОЛЬШЕ ПЕРВОГО АРГУМЕНТА
// function addOverNum(firstNum, ...args) {
//   let total = 0;

//   for (const arg of args) {
//       if (arg > firstNum) {
//       total += arg;
//     }
//   }
    
//   return total;
// }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));




// ИЩЕМ ТОЛЬКО ТЕ АРГУМЕНТЫ, ЧТО ЕСТЬ В МАССИВЕ
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args){
//     if (array.includes(arg)){
//       matches.push(arg)
//     }
//   }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));








// МЕТОДЫ И THIS
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     // return "Returning all books";
//     return this.books;
    
//   },
//   addBook(bookName) {
//     // return `Adding book ${bookName}`;
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`
//   }
// };
// //ТАК МЫ ВЫЗЫВАЕМ МЕТОДЫ 
// console.log(bookShelf.getBooks());
// console.log(bookShelf.removeBook("Pablo"));

// bookShelf.addBook("Жесткие какахи");
// bookShelf.addBook("Пенисы крокодайлов");
// console.log(bookShelf.getBooks());







// ЗАСТАВЛЕМ ЗАМЕНИТЬ СТАРЫЙ ЭЛЕМЕНТ МАССИВА НА НОВЫЙ
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//    let newIndex = this.books.indexOf(oldName);
//     this.books.splice(newIndex, 1, newName)
//   },
// };

// bookShelf.updateBook("Haze", "Dungeon chronicles");
// bookShelf.updateBook("The last kingdom", "Tarikoplata");
// console.log(bookShelf.books);




// // СОБИРАЕМ МАГАЗИН ЗЕЛИЙ
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // находим все зелья
//   getPotions() {
//     return this.potions;
//   },
//   // добавляем зелья
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
//   // убираем зелья
//   removePotion(potionName) {
//   const findIndex = this.potions.indexOf(potionName);
//     this.potions.splice(findIndex, 1)
//   },
//   // заменяем зелья
//   updatePotionName(oldName, newName) {
//     let newIndex = this.potions.indexOf(oldName);
//     this.potions.splice(newIndex, 1, newName);
//   }
// };

// console.log(atTheOldToad.getPotions());

// atTheOldToad.addPotion("Time machine");
// console.log(atTheOldToad.getPotions());

// atTheOldToad.removePotion("Speed potion");
// console.log(atTheOldToad.getPotions());

// atTheOldToad.updatePotionName("Stone skin", "Giant Penis")
// console.log(atTheOldToad.getPotions());






// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },
  
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if(potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//       this.potions.push(newPotion);
//     },
  
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i+=1) {
//       if (potionName === this.potions[i].name) {
//         this.potions.splice(i, 1);
//       }
//     }
// return `Potion ${potionName} is not in inventory!`;
//   },
  
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i+=1) {
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//       }
//     }
//   },
// };

// console.log(atTheOldToad.potions);

// console.log(atTheOldToad.getPotions());

// atTheOldToad.addPotion({ name: "Zapekanie", price: 420 });
// console.log(atTheOldToad.getPotions());

// atTheOldToad.addPotion({ name: "Speed potion", price: 460 });
// console.log(atTheOldToad.getPotions());








