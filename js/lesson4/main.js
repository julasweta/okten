/*
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
- створити функцію яка обчислює та повертає площу кола з радіусом r
- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
- створити функцію яка приймає масив та виводить кожен його елемент
- створити функцію яка створює параграф з текстом. Текст задати через аргумент
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
- створити функцію яка повертає найменьше число з масиву
- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
*/

//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area(a, b) {
  return a * b;
}
console.log(area(2, 5));

//- створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(r) {
  return 3.14 * (r * r);
}
console.log(areaCircle(3));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaCylinder(h, r) {
  return 2 * 3.14 * (r * r) + 2 * 3.14 * r * h;
}
console.log(areaCylinder(2, 5));

//- створити функцію яка приймає масив та виводить кожен його елемент
function arrResult(arr) {
  for (let item in arr) {
    console.log(arr[item]);
  }
}
arrResult([2, 7, 8]);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write(
  `<div><b>- створити функцію яка створює параграф з текстом. Текст задати через аргумент</b></div>`
);
function p(text) {
  return `<p> ${text} </p>`;
}
document.write(
  p(
    "Тут творено функцію яка створює параграф з текстом. Текст задано через аргумент"
  )
);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write(
  `<div>- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий </div>`
);
function tagLI(text) {
  document.write("<ul>");

  for (let i = 0; i < 3; i++) {
    document.write(`<li>${text} ${i + 1}</li>`);
  }

  document.write("</ul>");
}

tagLI("ТЕГ LI");

//- створити функцію яка створює ul з трьома елементами li.
//Текст li задати через аргумент всім однаковий. Кількість
//li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write(
  `<div><b>- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)</b> </div>`
);
function tagLICount(text, count) {
  document.write("<ul>");

  for (let i = 0; i < count; i++) {
    document.write(`<li>${text} ${i + 1}</li>`);
  }

  document.write("</ul>");
}

tagLICount("ТЕГ LI Count", 5);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write(
  `<div><b>- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список </b></div>`
);

function list(arr) {
  document.write("<ul>");

  for (let i = 0; i < arr.length; i++) {
    document.write(`<li>${arr[i]}</li>`);
  }

  document.write("</ul>");
}
let arr = [5, "рядок", true];
list(arr);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
document.write(
  `<div><b>- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.</b></div>`
);
function listUser(arr) {
  for (let i = 0; i < arr.length; i++) {
    document.write("<ul>");
    document.write(`<li> id: ${arr[i].id}</li>`);
    document.write(`<li> name: ${arr[i].name}</li>`);
    document.write(`<li> age: ${arr[i].age}</li>`);
    document.write("</ul>");
  }
}

let arr2 = [
  {
    id: 1,
    name: "Vlad",
    age: 21,
  },
  {
    id: 2,
    name: "Olena",
    age: 25,
  },
];
listUser(arr2);

//- створити функцію яка повертає найменьше число з масиву

function numberMin(arr) {
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (res < arr[i]) {
      res = res;
    } else {
      res = arr[i];
    }
  }
  return res;
}
console.log(" найменше число - " + numberMin([0, 7, 2, 5, 18, 1]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
}

console.log(sum([1, 2, 11]));

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
  let res = arr;
  let res1 = res[index1];
  let res2 = res[index2];
  res[index1] = res2;
  res[index2] = res1;

  console.log(res);
}
swap([11, 22, 33, 44], 0, 1);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
  if (exchangeCurrency === "USD") {
    console.log("Cума для обміну в гривнях: " + sumUAH + "грн;");
    console.log(
      `Ви отримаєте в ${exchangeCurrency} - ${
        sumUAH * currencyValues[1].value
      } `
    );
  } else {
    console.log("Cума для обміну в гривнях: " + sumUAH + "грн;");
    console.log(
      `Ви отримаєте в ${exchangeCurrency} - ${
        sumUAH * currencyValues[0].value
      } `
    );
  }
}

exchange(
  10000,
  [
    { currency: "USD", value: 40 },
    { currency: "EUR", value: 42 },
  ],
  "USD"
);
