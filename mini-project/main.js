/*  Users   */
let usersDiv = document.getElementById("users");
let url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((users) => users.json())
  .then((users) => {
    if (usersDiv)
      for (const user of users) {
        let divUser = document.createElement("div");
        divUser.classList = "user-card";
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
        a.href = `user-details.html?id=${user.id}`;
        a.innerText = "Детальніше...";

        usersDiv.append(divUser);
        divUser.append(userId, userName, a);
      }
  });

/* User  */
let userDiv = document.getElementById("user");

const currentURL = window.location.href;
let urlUser = new URL(currentURL);
const idUser = urlUser.searchParams.get("id");

if (idUser)
  fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)
    .then((response) => response.json())
    .then((user) => {
      if (userDiv) {
        for (let item in user) {
          let li = document.createElement("li");
          if (item === "address") {
            li.innerText = `${item} : ${user[item].street}, ${user[item].suite}, ${user[item].city}, ${user[item].zipcode}`;
          } else if (item === "company") {
            li.innerText = `${item} : ${user[item].name}, ${user[item].catchPhrase}, ${user[item].bs}`;
          } else {
            li.innerText = `${item} : ${user[item]}`;
          }

          userDiv.append(li);
        }
        let postsLink = document.createElement("button");
        postsLink.innerText = "Post of current user";
        userDiv.append(postsLink);

        postsLink.onclick = function () {
            if (showPosts.style.visibility === "visible")
             { showPosts.style.visibility = "hidden"}
             else{showPosts.style.visibility = "visible";}
        };

        let showPosts = document.createElement("div");
        showPosts.classList = "show-posts";
        userDiv.append(showPosts);

        //отримання постів
        function getPosts() {
          fetch(`https://jsonplaceholder.typicode.com/users/${idUser}/posts`)
            .then((response) => response.json())
            .then((posts) => {
              if (userDiv)
                for (let post in posts) {
                  let postLink = document.createElement("a");
                  postLink.href = `post-details.html?id=${user.id}&idPost=${posts[post].id}`;
                  postLink.innerText =
                    posts[post].title.charAt(0).toUpperCase() +
                    posts[post].title.slice(1);

                  showPosts.append(postLink);
                }
            });
        }

        getPosts();
      }
    });

/* Post  */
const idPost = urlUser.searchParams.get("idPost");
let postWraper = document.getElementById("post");

function getComments() {
  fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`)
    .then((response) => response.json())
    .then((comments) => {
      let commentsWraper = document.createElement("div");
      commentsWraper.classList = "comments";
      postWraper.append(commentsWraper);

      for (let comment in comments) {
        let commentDiv = document.createElement("div");
        commentDiv.classList = "comment";

        let commentTitle = document.createElement("h3");
        commentTitle.classList = "comment-title";
        commentTitle.innerText =
          comments[comment].name.charAt(0).toUpperCase() +
          comments[comment].name.slice(1);

        let commentBody = document.createElement("p");
        commentBody.classList = "comment-body";
        commentBody.innerText = comments[comment].body;

        let commentEmail = document.createElement("span");
        commentEmail.classList = "comment-email";
        commentEmail.innerText = comments[comment].email;
        commentEmail.addEventListener("click", function () {
          window.location.href = "mailto:" + comments[comment].email;
        });

        commentsWraper.append(commentDiv);
        commentDiv.append(commentTitle, commentBody, commentEmail);
      }
    });
}

if (idUser)
  fetch(`https://jsonplaceholder.typicode.com/users/${idUser}/posts`)
    .then((response) => response.json())
    .then((posts) => {
      if (postWraper)
        for (let post in posts) {
          if (idPost == posts[post].id) {
            let postTitle = document.createElement("h1");
            postTitle.innerText = posts[post].title;

            let postBody = document.createElement("p");
            postBody.classList = "post-body";
            postBody.innerText =
              posts[post].body.charAt(0).toUpperCase() +
              posts[post].body.slice(1);

            postWraper.append(postTitle, postBody);
            getComments();
          }
        }
    });

/* Comments */
