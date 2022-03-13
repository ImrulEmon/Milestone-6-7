function comment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(comments=>displayComments(comments));
}

function displayComments(comments){
   const commentContainer= document.getElementById("commentContainer");
   for(const comment of comments){
       const div=document.createElement('div');
       div.innerHTML=`<h4>postId : ${comment.postId}</h4>
       <h5>Id : ${comment.id}</h5>
       <p>Name : ${comment.name}</p>
       <p>Email : ${comment.email}</p>
       <p style="padding-right:5%">Body: ${comment.body}</p>
       `
       div.classList.add("comment");
       commentContainer.appendChild(div);
   }
}