/* POST */ 
const currentURL = window.location.href;
let urlUser = new URL(currentURL);
const idUser = urlUser.searchParams.get("id");
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

fetch(`https://jsonplaceholder.typicode.com/users/${idUser}/posts`)
  .then((response) => response.json())
  .then((posts) => {
    for (let post in posts) {
      if (idPost == posts[post].id) {
        let postTitle = document.createElement("h1");
        postTitle.innerText = posts[post].title;

        let postInfo = document.createElement("div");
        postInfo.classList = "post-info";
        let infoUser = document.createElement("a");
        infoUser.href = `../user/user-details.html?id=${posts[post].userId}`;
        let infoPost = document.createElement("span");
        infoUser.innerText = "Back to UserId - " + posts[post].userId;
        infoPost.innerText = "Post № - " + posts[post].id;
        postInfo.append(infoUser, infoPost);

        let postBody = document.createElement("p");
        postBody.classList = "post-body";
        postBody.innerText =
          posts[post].body.charAt(0).toUpperCase() + posts[post].body.slice(1);

        postWraper.append(postTitle, postInfo, postBody);
        
        getComments();
      }
    }
  });
