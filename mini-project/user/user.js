/* User  */
const currentURL = window.location.href;
let urlUser = new URL(currentURL);
const idUser = urlUser.searchParams.get("id");
let userDiv = document.getElementById("user");


  fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)
    .then((response) => response.json())
    .then((user) => {
      console.log(user);
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
        postsLink.classList = "post-link";
        postsLink.innerText = "Post of current user";
        userDiv.append(postsLink);

        postsLink.onclick = function () {
          if (showPosts.style.visibility === "visible") {
            showPosts.style.visibility = "hidden";
          } else {
            showPosts.style.visibility = "visible";
          }
        };

        let showPosts = document.createElement("div");
        showPosts.classList = "show-posts";
        userDiv.append(showPosts);

        /* Post Comments */

        //отримання постів
        function getPosts() {
          fetch(`https://jsonplaceholder.typicode.com/users/${idUser}/posts`)
            .then((response) => response.json())
            .then((posts) => {
              if (userDiv)
                for (let post in posts) {
                  let postLink = document.createElement("a");
                  postLink.href = `../post/post-details.html?id=${user.id}&idPost=${posts[post].id}`;
                  postLink.innerText =
                    posts[post].title.charAt(0).toUpperCase() +
                    posts[post].title.slice(1);

                  showPosts.append(postLink);
                }
            });
        }

        getPosts();
      
    });

const idPost = urlUser.searchParams.get("idPost");
let postWraper = document.getElementById("post");
