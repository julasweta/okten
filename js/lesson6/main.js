/* 
- Знайти та вивести довижину настипних стрінгових значень
    'hello world', 'lorem ipsum', 'javascript is cool'
- Перевести до великого регістру наступні стрінгові значення
      'hello world', 'lorem ipsum', 'javascript is cool'
- Перевести до нижнього регістру настипні стрінгові значення
      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
    let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]

==========================
- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 -- відсортувати його за спаданням за monthDuration
 -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
 -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
 =========================
 описати колоду карт (від 6 до туза без джокерів)
 - знайти піковий туз
 - всі шістки
 - всі червоні карти
 - всі буби
 - всі трефи від 9 та більше

{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
    value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}

=========================

Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}
=========================
взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
--написати пошук всіх об'єктів, в який в modules є sass
--написати пошук всіх об'єктів, в який в modules є docker
*/

// - Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
let lengthString = (str) => str.length;
console.log(lengthString("hello world"));
console.log(lengthString("lorem ipsum"));
console.log(lengthString("javascript is cool"));

//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
let upperString = (str) => str.toUpperCase();
console.log(upperString("hello world"));
console.log(upperString("lorem ipsum"));
console.log(upperString("javascript is cool"));

//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let lowerString = (str) => str.toLowerCase();
console.log(lowerString("HELLO WORLD"));
console.log(lowerString("LOREM IPSUM"));
console.log(lowerString("JAVASCRIPT IS COOL"));

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str1 = " dirty string   ";
let res = str1.replace("   ", "").replace(" ", "");
console.log(res);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str2 = "Ревуть воли як ясла повні";
let stringToarray = (str) => str.split(" ");
let arr = stringToarray(str2);
console.log(arr);

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrNumber = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let numberToString = arrNumber.map((item) => "" + item);
console.log(numberToString);

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let sortNums = (arr, action) =>
  action === "ascending"
    ? arr.sort((a, b) => a - b)
    : arr.sort((a, b) => b - a);
let nums = [11, 21, 3];
console.log(sortNums(nums, "ascending")); // [3,11,21]
console.log(sortNums(nums, "descending")); // [21,11,3]

//- є масив
let coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];
//-- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let sortMonthDuration = coursesAndDurationArray.sort(
  (a, b) => b.monthDuration - a.monthDuration
);
console.log(sortMonthDuration);

let filterDuring = coursesAndDurationArray.filter(
  (item) => item.monthDuration > 5
);
console.log(filterDuring);

let changeId = coursesAndDurationArray.map((item, index) => {
  return { id: index + 1, ...item };
});
console.log(changeId);

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
/*
{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
    value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}
*/
let deck = [
  { cardSuit: "spade", value: "6", color: "black" },
  { cardSuit: "spade", value: "7", color: "black" },
  { cardSuit: "spade", value: "8", color: "black" },
  { cardSuit: "spade", value: "9", color: "black" },
  { cardSuit: "spade", value: "10", color: "black" },
  { cardSuit: "spade", value: "ace", color: "black" },
  { cardSuit: "spade", value: "jack", color: "black" },
  { cardSuit: "spade", value: "queen", color: "black" },
  { cardSuit: "spade", value: "king", color: "black" },
  { cardSuit: "diamond", value: "6", color: "red" },
  { cardSuit: "diamond", value: "7", color: "red" },
  { cardSuit: "diamond", value: "8", color: "red" },
  { cardSuit: "diamond", value: "9", color: "red" },
  { cardSuit: "diamond", value: "10", color: "red" },
  { cardSuit: "diamond", value: "ace", color: "red" },
  { cardSuit: "diamond", value: "jack", color: "red" },
  { cardSuit: "diamond", value: "queen", color: "red" },
  { cardSuit: "diamond", value: "king", color: "red" },
  { cardSuit: "heart", value: "6", color: "red" },
  { cardSuit: "heart", value: "7", color: "red" },
  { cardSuit: "heart", value: "8", color: "red" },
  { cardSuit: "heart", value: "9", color: "red" },
  { cardSuit: "heart", value: "10", color: "red" },
  { cardSuit: "heart", value: "ace", color: "red" },
  { cardSuit: "heart", value: "jack", color: "red" },
  { cardSuit: "heart", value: "queen", color: "red" },
  { cardSuit: "heart", value: "king", color: "red" },
  { cardSuit: "clubs", value: "6", color: "black" },
  { cardSuit: "clubs", value: "7", color: "black" },
  { cardSuit: "clubs", value: "8", color: "black" },
  { cardSuit: "clubs", value: "9", color: "black" },
  { cardSuit: "clubs", value: "10", color: "black" },
  { cardSuit: "clubs", value: "ace", color: "black" },
  { cardSuit: "clubs", value: "jack", color: "black" },
  { cardSuit: "clubs", value: "queen", color: "black" },
  { cardSuit: "clubs", value: "king", color: "black" },
];

const spadesAces = deck.filter(
  (card) => card.cardSuit === "spade" && card.value === "ace"
);
console.log(spadesAces);

const all_6 = deck.filter((item) => item.value === "6");
console.log(all_6);

const all_red = deck.filter((item) => item.color === "red");
console.log(all_red);

const all_diamond = deck.filter((item) => item.cardSuit === "diamond");
console.log(all_diamond);

const all_clubs = deck.filter(
  (item) =>
    item.cardSuit === "clubs" &&
    (item.value > 9 ||
      item.value === "ace" ||
      item.value === "jack" ||
      item.value === "queen" ||
      item.value === "king" ||
      item.value === "joker")
);
console.log(all_clubs);

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
/* 
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}
*/
let obj = {
  spades: [],
  diamonds: [],
  hearts: [],
  clubs: [],
};

const sortDeck = deck.reduce((acc, item) => {
  if (item.cardSuit === "spade") {
    acc.spades.push(item);
  } else if (item.cardSuit === "diamond") {
    acc.diamonds.push(item);
  } else if (item.cardSuit === "heart") {
    acc.hearts.push(item);
  } else if (item.cardSuit === "clubs") {
    acc.clubs.push(item);
  }
  return acc;
}, obj);

console.log(sortDeck);


//взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
//--написати пошук всіх об'єктів, в який в modules є sass
//--написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let isSass = coursesArray.filter(item => item.modules.includes('sass'));
console.log(isSass);

let isDocker = coursesArray.filter(item => item.modules.includes('docker'));
console.log(isDocker);


