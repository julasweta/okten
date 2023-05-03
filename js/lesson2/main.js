/* Масиви та об'єкти:
- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


Логічні розгалуження:
    - Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).
- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
    - Користувач вводить або має два числа.
        Потрібно знайти та вивести максимальне число з тих двох .
        Також потрібно врахувати коли введені рівні числа.

    - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
        за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


    - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

 */

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr1 = [1, [2, 3, 4], 3, 4, 5, 6, 7, 8, 9, "10"];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let bock1 = {
  title: "Кобзар",
  pageCount: 246,
  genre: "Поезія",
};

let bock2 = {
  title: "Тигролови",
  pageCount: 234,
  genre: "Роман",
};

let bock3 = {
  title: "Маруся",
  pageCount: 186,
  genre: "Роман",
};

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1_2 = {
  title: "The Great Gatsby",
  pageCount: 180,
  genre: "Fiction",
  authors: [
    {
      name: "F. Scott Fitzgerald",
      age: 44,
    },
  ],
};

let book2_2 = {
  title: "1984",
  pageCount: 328,
  genre: "Dystopian Fiction",
  authors: [
    {
      name: "George Orwell",
      age: 46,
    },
  ],
};

let book3_2 = {
  title: "The Hitchhiker's Guide to the Galaxy",
  pageCount: 224,
  genre: "Science Fiction",
  authors: [
    {
      name: "Douglas Adams",
      age: 49,
    },
  ],
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
users = [
  {
    name: "John Smith",
    username: "johnsmith",
    password: "password1",
  },
  {
    name: "Jane Doe",
    username: "janedoe",
    password: "password2",
  },
  {
    name: "Bob Johnson",
    username: "bobjohnson",
    password: "password3",
  },
  {
    name: "Mary Brown",
    username: "marybrown",
    password: "password4",
  },
  {
    name: "David Lee",
    username: "davidlee",
    password: "password5",
  },
  {
    name: "Sarah Adams",
    username: "sarahadams",
    password: "password6",
  },
  {
    name: "Mike Wilson",
    username: "mikewilson",
    password: "password7",
  },
  {
    name: "Emily Davis",
    username: "emilydavis",
    password: "password8",
  },
  {
    name: "Alex Brown",
    username: "alexbrown",
    password: "password9",
  },
  {
    name: "Tom Johnson",
    username: "tomjohnson",
    password: "password10",
  },
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

/* --------      Логічні розгалуження: ----------- */
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 2;
if (x !== 0) {
  console.log("Вірно");
} else {
  console.log("Невірно");
}
x = 1;
if (x !== 0) {
  console.log("Вірно");
} else {
  console.log("Невірно");
}
x = 0;
if (x !== 0) {
  console.log("Вірно");
} else {
  console.log("Невірно");
}
x = -3;
if (x !== 0) {
  console.log("Вірно");
} else {
  console.log("Невірно");
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число (в першу, другу, третю или четверту частину години).
let time = 49;
if (time > 0 && time <= 15) {
  console.log("Перша четверть години");
} else if (time >= 16 && time <= 30) {
  console.log("Друга четверть години");
} else if (time >= 31 && time <= 45) {
  console.log("Третя четверть години");
} else {
  console.log("Четверта четверть години");
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 11;
if (day > 0 && day <= 10) {
  console.log("Перша декада");
} else if (day >= 11 && day <= 20) {
  console.log("Друга декада");
} else {
  console.log("Третя декада");
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
let today = prompt("Введіть день");
switch (today) {
  case "понеділок":
    console.log("Monday");
    break;
  case "вівторок":
    console.log("Tuesday.");
    break;
  case "середа":
    console.log("Wednesday");
    break;
  case "четвер":
    console.log("Thursday");
    break;
  case "пятниця":
    console.log("Friday");
    break;
  case "субота":
    console.log("Saturday");
    break;
  case "неділя":
    console.log("Sunday");
    break;
}

//   - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let numb1 = 5;
let numb2 = 1;
if (numb1 > numb2 || numb1 === numb2) {
  console.log(numb1);
} else {
  console.log(numb2);
}

//   - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"
//         якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x2 = 2 === 3;
if (x2 === false) {
  x2 = "default";
}
console.log(x2);

//  - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//  За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];

if (coursesAndDurationArray[0].monthDuration > 5) {
  console.log("Супер");
}
if (coursesAndDurationArray[1].monthDuration > 5) {
  console.log("Супер");
}
if (coursesAndDurationArray[2].monthDuration > 5) {
  console.log("Супер");
}
if (coursesAndDurationArray[3].monthDuration > 5) {
  console.log("Супер");
}
if (coursesAndDurationArray[4].monthDuration > 5) {
  console.log("Супер");
}
if (coursesAndDurationArray[5].monthDuration > 5) {
  console.log("Супер");
}
