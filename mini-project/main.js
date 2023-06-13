/*  Users   */
let usersDiv = document.getElementById("users");
let url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((users) => users.json())
  .then((users) => {
    for (const user of users) {
      let userCard = document.createElement("div");
      userCard.classList = "user-card";
      let userId = document.createElement("div");
      userId.classList = "user-id";
      userId.innerText = "id - " + user.id;

      let userName = document.createElement("div");
      userName.classList = "user-name";
      userName.innerText = "Name - " + user.name;

      let userLink = document.createElement("a");
      userLink.classList = "user-link";

      let a = document.createElement("a");
      a.classList = "user-details-link";
      a.href = `./user/user-details.html?id=${user.id}`;
      userCard.appendChild(userId);
      userCard.appendChild(userName);

      let detailsText = document.createTextNode("Детальніше...");
      userCard.appendChild(detailsText);

      usersDiv.append(a);
      a.append(userCard);
    }
  });

/* Footer  */
const footer = document.createElement("footer");
const p = document.createElement("p");
const span = document.createElement("span");

p.textContent = "© ";
span.textContent = new Date().getFullYear();
p.appendChild(span);
p.textContent += " Всі права захищені.";
footer.appendChild(p);

let container = document.getElementsByClassName("container");
container[0].append(footer);
