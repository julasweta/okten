/*Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
==========================
є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
==========================
Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
=========================
зробити масив на 100 об'єктів та дві кнопки prev next
при завантажені сторінки з'являються перші 10 об'єктів.
При натисканні next виводяться настпні 10 об'єктів
При натисканні prev виводяться попередні 10 об'єктів




- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".


- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
(Додатковачастина для завдання)

*** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
при перезавантаженні сторінки до значаення додається по 10грн, але !!!
 зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
 При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
 */

// /*Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
//та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form1 = document.forms.form1;
let divForm1 = document.getElementById("div-form1");

let obj = {};
form1.onclick = function (e) {
  e.preventDefault();
  obj[form1.name.getAttribute("name")] = form1.name.value;
  obj[form1.surname.getAttribute("name")] = form1.surname.value;
  obj[form1.age.getAttribute("name")] = form1.age.value;
  console.log(obj);

  let txt = "";

  for (let inp in obj) {
    txt += `${inp} - ${obj[inp]} `;
  }
  divForm1.innerHTML = txt;
};

//є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
/*
let plusNumber = document.getElementById("plus-number");

document.addEventListener("DOMContentLoaded", function () {
  let getStorage = localStorage.getItem("number");
  if (getStorage) {
    let reverseNumber = JSON.parse(getStorage);
    localStorage.setItem("number", reverseNumber + 1);
    plusNumber.innerText = getStorage;
  } else {
    localStorage.setItem("number", 1);
    plusNumber.innerText = getStorage;
  }
});

let clearButton = document.getElementById("clear");
clearButton.onclick = function () {
  localStorage.clear();
};

*/

//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
//в масив sessions зберігається інформація про дату та час відвідування сторінки.
//Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю
//інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом
//структуру під кожну сессію
/*
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // Місяці в JavaScript починаються з 0, тому додаємо 1
const day = today.getDate();
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

const nowTime = `${hours < 10 ? "0" + hours : hours}:${
  minutes < 10 ? "0" + minutes : minutes
}:${
  seconds < 10 ? "0" + seconds : seconds
}`;

const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
  day < 10 ? "0" + day : day
}`;

let sessions = document.getElementById('sessions');

document.addEventListener("DOMContentLoaded", function () {
  let parseSessions = JSON.parse(localStorage.getItem("sessions"));
  if (parseSessions) {
    console.log(typeof parseSessions);
    parseSessions.push({ data: formattedDate, time: nowTime });
    localStorage.setItem("sessions", JSON.stringify(parseSessions));
  } else {
    localStorage.setItem("sessions", JSON.stringify([{ data: formattedDate, time: nowTime }]));
  }

parseSessions?.map(item => {
  let divSesion = document.createElement("div");
  divSesion.innerHTML = `data: ${item.data}, time: ${item.time}`;

  console.log(divSesion);
  sessions.append(divSesion);
}) 

});


let clearButton2 = document.getElementById("clear2");
clearButton2.onclick = function () {
  localStorage.clear();
};
*/

// зробити масив на 100 об'єктів та дві кнопки prev next
//при завантажені сторінки з'являються перші 10 об'єктів.
//При натисканні next виводяться настпні 10 об'єктів
//При натисканні prev виводяться попередні 10 об'єктів

let arr100 = [];

for (let i = 1; i <= 100; i++) {
  arr100.push({ id: i, title: `title${i}` });
}

let divarr100 = document.getElementById("arr100");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < 10; i++) {
    let item100 = document.createElement("div");
    item100.innerText = `data: ${arr100[i].id}, title: ${arr100[i].title}`;

    divarr100.append(item100);
  }
});

let count = 10;

next.onclick = function (){
    divarr100.innerHTML = "";
    for (let i = count; i < count+10; i++) {
      let item100 = document.createElement("div");
      if(arr100[i]){
      item100.innerText = `data: ${arr100[i].id}, title: ${arr100[i].title}`;
      divarr100.append(item100);}
    }
    if(count<=100)
      count = count + 10;
}

prev.onclick = function () {
    divarr100.innerHTML = '';
  for (let i = count; i > count-10; i--) {
    let item100 = document.createElement("div");
       if(arr100[i]){
    item100.innerText = `data: ${arr100[i].id}, title: ${arr100[i].title}`;
    divarr100.append(item100);}
  
  }
  if(count>0)
    count = count - 10;
};


// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let divHideText = document.getElementById('text');
let buttonHide = document.getElementById('hide-text');

buttonHide.onclick = function(){
  divHideText.style.visibility = "hidden";
}

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
let buttonCheckAge = document.getElementById('check-age');
let formAge = document.forms.formAge;

buttonCheckAge.onclick = function(e){
  e.preventDefault();
if(formAge.age.value > 18){
  console.log('Вам більше 18');
}else{
  console.log('Вам менше 18');
}
}


//*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//(Додатковачастина для завдання)
let buttonCreateTable = document.getElementById("createTable");
let newTable = document.getElementById("newTable");
let formTable = document.forms.table;

  let table = document.createElement("table");
   newTable.append(table);


buttonCreateTable.onclick =function (e){
e.preventDefault();
table.innerHTML = '';
for (let i = 1; i <= formTable.row.value; i++) {
  let tr = document.createElement("tr");
  

   for (let j = 1; j <= formTable.column.value; j++) {
     let td = document.createElement("td");
     td.style.border = '2px solid gray'
     td.innerHTML = formTable.textTable.value +' ' + ' row ' + i + ' column '+ j;
     tr.append(td);
   }
     table.append(tr);
}
 
}
