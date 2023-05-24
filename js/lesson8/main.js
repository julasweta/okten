/*
- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)

- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
*/

//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}

let user1 = new User(5, "Olena", "Lisna", "lfderr@ukr.net", "0977452255");
let user2 = new User(2, "Ihor", "Pulupenko", "fkkddk@gmail.com", "0987112455");
let user4 = new User(4, "Iryna", "Polupko", "polupko@gmail.com", "0967123027");
const users = [user1, user2, user4];
console.log(user1);
console.log(user2);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const userPositive = users.filter((item) => item.id % 2 === 0);
console.log(userPositive);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const userSort = users.sort((a, b) => a.id - b.id);
console.log(userSort);

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
  constructor(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
  }
}
/*  clients  */
let cl1 = new Client(1, "Olena", "Lisna", "lfderr@ukr.net", "0977452255", [
  { id: 1, name: "Футболка", price: 100 },
  { id: 2, name: "Джинси", price: 200 },
]);
let cl2 = new Client(2, "Ihor", "Pulupenko", "fkkddk@gmail.com", "0987112455", [
  { id: 1, name: "Футболка", price: 100 },
  { id: 2, name: "Джинси", price: 200 },
  { id: 3, name: "Кросівки", price: 150 },
  { id: 4, name: "Рюкзак", price: 80 },
]);
let cl3 = new Client(3, "Iryna", "Polupko", "polupko@gmail.com", "0967123027", [
  { id: 1, name: "Футболка", price: 100 },
  { id: 2, name: "Джинси", price: 200 },
  { id: 4, name: "Рюкзак", price: 80 },
]);
let cl4 = new Client(
  4,
  "Mykola",
  "Kovalenko",
  "kovalenko@gmail.com",
  "0998765432",
  [{ id: 4, name: "Рюкзак", price: 80 }]
);
let cl5 = new Client(
  5,
  "Anna",
  "Vasylchenko",
  "annavas@gmail.com",
  "0971234567",
  [
    { id: 1, name: "Футболка", price: 100 },
    { id: 2, name: "Джинси", price: 200 },
    { id: 3, name: "Кросівки", price: 150 },
    { id: 4, name: "Рюкзак", price: 80 },
  ]
);
let cl6 = new Client(
  6,
  "Petro",
  "Ivanіv",
  "ivanovpetro@gmail.com",
  "0987654321",
  [
    { id: 1, name: "Футболка", price: 100 },
    { id: 2, name: "Джинси", price: 200 },
  ]
);
let cl7 = new Client(
  7,
  "Natalia",
  "Semen",
  "semenova@gmail.com",
  "0965432167",
  [
    { id: 1, name: "Футболка", price: 100 },
    { id: 2, name: "Джинси", price: 200 },
    { id: 3, name: "Кросівки", price: 150 },
    { id: 4, name: "Рюкзак", price: 80 },
  ]
);
let cl8 = new Client(
  8,
  "Volodymyr",
  "Zhuk",
  "volzhuk@gmail.com",
  "0999999999",
  [{ id: 3, name: "Кросівки", price: 150 }]
);
let cl9 = new Client(
  9,
  "Olga",
  "Petrenko",
  "petrenko@gmail.com",
  "0976543210",
  [
    { id: 1, name: "Футболка", price: 100 },
    { id: 2, name: "Джинси", price: 200 },
    { id: 3, name: "Кросівки", price: 150 },
    { id: 4, name: "Рюкзак", price: 80 },
  ]
);
let cl10 = new Client(
  10,
  "Serhiy",
  "Kovalchuk",
  "serhiykovalchuk@gmail.com",
  "0987654321",
  [
    { id: 1, name: "Футболка", price: 100 },
    { id: 2, name: "Джинси", price: 200 },
  ]
);

let clients = [cl1, cl2, cl3, cl4, cl5, cl6, cl7, cl8, cl9, cl10];
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const clientsSortOrder = clients.sort(
  (a, b) => a.order.length - b.order.length
);
console.log(clientsSortOrder);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//   -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//   -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//   -- changeYear (newValue) - змінює рік випуску на значення newValue
//   -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, brand, year, maxSpeed, engine, drive, info) {
  model;
  brand;
  year;
  maxSpeed;
  this.engine = engine;
  this.drive = function () {
    return `їдемо зі швидкістю ${maxSpeed} на годину`;
  };
  this.info = function () {
    return `
          Модель - ${model}
          Бренд- ${brand}
          Рік - ${year}
          Макс швидкість - ${maxSpeed}
          Об'єм двигуна - ${engine}`;
  };

  this.increaseMaxSpeed = function (newSpeed) {
    return newSpeed + maxSpeed;
  };
  this.changeYear = function (newValue) {
    return newValue + year;
  };
  this.addDriver = function (driver) {
    return driver;
  };
}
let car1 = new Car("Civic", "Honda", 2020, 200, 2.0);
let car2 = new Car("Accord", "Honda", 2018, 180, 1.5);
let car3 = new Car("Camry", "Toyota", 2021, 220, 2.5);
let car4 = new Car("Corolla", "Toyota", 2019, 190, 1.8);
let car5 = new Car("3 Series", "BMW", 2022, 250, 3.0);

console.log(car3.drive());
console.log(car1.info());
console.log(car2.increaseMaxSpeed(125));
console.log(car5.changeYear(1));
console.log(car1.addDriver("Mukola"));

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function Cinderella(name, age, footSize) {
  this.name = name;
  this.age = age;
  this.footSize = footSize;
}

let cinderellas = [
  new Cinderella("Анна", 20, 34),
  new Cinderella("Марія", 18, 35),
  new Cinderella("Олександра", 22, 36),
  new Cinderella("Вікторія", 25, 37),
  new Cinderella("Юлія", 19, 38),
  new Cinderella("Софія", 21, 39),
  new Cinderella("Емма", 24, 40),
  new Cinderella("Катерина", 23, 41),
  new Cinderella("Дарія", 20, 42),
  new Cinderella("Наталія", 26, 43),
];

//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
function Prince(name, age,  shoesFind) {
 this.name = name;
 this.age= age;
 this.shoesFind = shoesFind;
}
let prince1 = new Prince("Oleg", 19,  36);
console.log(prince1);

//За допомоги циклу знайти яка попелюшка повинна бути з принцом.
const findChinderella = cinderellas.find(item => item.footSize === prince1.shoesFind);
console.log(findChinderella);

//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
/*  не зроблено  */ 
/* ****************   */ 

//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}

let user7 = new User(1, "John", "Doe", "john.doe@example.com", "1234567890");
console.log(user7);
let users2 = []
users2.push(new User(1, "John", "Doe", "johndoe@example.com", "1234567890"));
users2.push(new User(2, "Jane", "Smith", "janesmith@example.com", "9876543210"));
users2.push(new User(3, "Alex", "Johnson", "alexjohnson@example.com", "5555555555"));
users2.push(new User(4, "Emily", "Brown", "emilybrown@example.com", "1231231234"));
users2.push(new User(5, "Michael", "Davis", "michaeldavis@example.com", "7897897890"));
users2.push(new User(6, "Olivia", "Wilson", "oliviawilson@example.com", "4564564567"));
users2.push(new User(7, "William", "Taylor", "williamtaylor@example.com", "2223334444"));
users2.push(new User(8, "Sophia", "Thomas", "sophiathomas@example.com", "9998887777"));
users2.push(new User(9, "Liam", "Robinson", "liamrobinson@example.com", "7777777777"));
users2.push(new User(10, "Ava", "Walker", "avawalker@example.com", "1112223333"));

console.log(users2);