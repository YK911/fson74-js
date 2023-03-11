/*|*****************************************
  |********** Прототипи та класи ***********
  |***************************************** */

/**
  |============================
  | Завдання 1

  | Напишіит функцію-конструктор Account, яка створює об'єкт з властивостями login та email.
  | В prototype функції-конструктора додайте метод getInfo(),
  | який виводить в консоль значення полів login і email об'єкта який його викликав.
  |============================
*/
// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: "Mangozedog",
//   email: "mango@dog.woof",
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

/**
  |============================
  | Завдання 2

  | Напишіть функцію-конструктор Storage, яка при виклику отримуватиме один агрумент
  | у вигляді початкового масиву товарів і записуватиме їх у властивість items.
  | Додайте наступні методи до функції-конструктора Storage:
  | getItems() - повертає масив поточних товарів
  | addItem(item) - приймає та додає новий товар до масиву items
  | removeItem(item) - приймає товар і, якщо він є, видаляє його з масиву items
  |============================
*/

// const storage = new Storage(["🍏", "🍌", "🥭", "🍉"]);

// const items = storage.getItems();
// console.table(items); // ["🍏", "🍌", "🥭", "🍉"]

// storage.addItem("🫐");
// console.table(storage.items); // ["🍏", "🍌", "🥭", "🍉", "🫐"]

// storage.removeItem("🥭");
// console.table(storage.items); // ["🍏", "🍌", "🫐", "🍉"]

/**
  |============================
  | Завдання 3

  | Напишіть клас Client який створює об'єкт з ​​властивостями login email
  | Оголосіть приватні властивості #login #email,
  | доступи до яких зробіть через геттер та сеттер
  |============================
*/

// const client = new Client("mango", "mango@gmail.com");
// console.log(client.getClientData); // {login: 'mango', email: 'mango@gmail.com'}

// client.changeEmail = "tango@gmail.com";
// console.log(client.getClientData.email); // 'tango@gmail.com'

/**
  |============================
  | Завдання 4

  | Напишіть клас Notes, який управляє колекцією нотаток у властивості items.
  | Нотатка - це об'єкт із властивостями text і priority.
  | Додай класу статичний метод Priopity, який буде повертати об'єкт із пріоритетами.
  | Додай методи addNote(note), removeNote(text), updatePriority(text, newPriority)
  |============================
*/

// const firstNote = new Notes();

// firstNote.addNote({ text: "Купити фрукти", priority: Notes.Priority().LOW });
// firstNote.addNote({ text: "Прибрати в кімнаті", priority: Notes.Priority().LOW });
// console.log(firstNote.items); // [{text: 'Купити фрукти', priority: 'low'}, {text: 'Прибрати в кімнаті', priority: 'low'}]

// firstNote.updatePriority({ text: "Купити фрукти", newPriority: Notes.Priority().HIGHT });
// console.log(firstNote.items); // [{text: 'Купити фрукти', priority: 'hight'}, {text: 'Прибрати в кімнаті', priority: 'low'}]

/**
  |============================
  | Завдання 5

  | Напишіть клас Car із зазначеними властивостями і методами.
  |============================
*/
// class Car {
//   /*
//    * Додай статичний метод `getSpecs(car)`,
//    * який приймає об'єкт-машину як параметр і виводить
//    * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
//    */

//   /*
//    * Конструктор отримує об'єкт налаштувань.
//    *
//    * Додай властивості майбутнього екземпляра класу:
//    *  speed - поточна швидкість, початкова 0
//    *  price - ціна автомобіля
//    *  maxSpeed - максимальна швидкість
//    *  isOn - заведений автомобіль, значення true або false. Спочатку false
//    *  distance - загальний кілометраж, спочатку 0
//    */
//   constructor() {
//   }

//   /*
//    * Додай геттер і сеттер для властивості price,
//    * який буде працювати з властивістю ціни автомобіля.
//    */

//   /*
//    * Додай код для того, щоб завести автомобіль
//    * Записує у властивість isOn значення true
//    */

//   /*
//    * Додай код для того, щоб заглушити автомобіль
//    * Записує у властивість isOn значення false,
//    * і скидає поточну швидкість в 0
//    */

//   /*
//    * Додає до властивості speed отримане значення,
//    * за умови, що результуюча швидкість
//    * не більше, ніж значення властивості maxSpeed
//    */

//   /*
//    * Забирає від властивості speed отримане значення,
//    * за умови, що результуюча швидкість не менше нуля
//    */

//   /*
//    * Додає в поле distance кілометраж (hours * speed),
//    * але тільки в тому випадку, якщо машина заведена!
//    */

// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000