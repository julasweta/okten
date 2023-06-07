/*зробити файл users.html
з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) 
отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
*/

let usersDiv = document.getElementById("users");
let url = "http://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((users) => users.json())
  .then((users) => {
    for (const user of users) {
      let li = document.createElement("li");
      li.innerText = user.id + " - " + user.name;
      let a = document.createElement("a");
      a.href = `user-details.html?id=${user.id}`;
      a.style.display = "block";
      usersDiv.appendChild(a);
      a.append(li);
    }
  });

let userDiv = document.getElementById("user");

const currentURL = window.location.href;
let url2 = new URL(currentURL);
const idUser = url2.searchParams.get("id");

fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)
  .then((response) => response.json())
  .then((user) => {
    for (let item in user) {
      let li = document.createElement("li");
      if (item === "address") {
        li.innerText = `${item} - ${user[item].street}, ${user[item].suite}, ${user[item].city}, ${user[item].zipcode}`;
      } else if (item === "company") {
        li.innerText = `${item} - ${user[item].name}, ${user[item].catchPhrase}, ${user[item].bs}`;
      } else {
        li.innerText = `${item} - ${user[item]}`;
      }
      userDiv.appendChild(li);
    }
  });

