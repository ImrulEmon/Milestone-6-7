function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => displayPosts(posts));
}
function displayPosts(posts) {
    const loadPosts = document.getElementById("posts");
    posts.innerText='';
    for(const post of posts){
        const div = document.createElement('div');
        div.innerHTML=`
        <h4>${post.id}</h4>
        <h3>${post.title.toUpperCase()}</h3>
        <p style="padding: 0 2%;">${post.body}</p>
       
        `
        div.classList.add('post');
        loadPosts.appendChild(div);
       // console.log(post);
    }
}

function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method : 'POST',
        body: JSON.stringify({
            title : 'My Post',
            body :"It is written by me",
            userId :3
        }),
        headers:{
            'Content-type' : 'application/json; charset = UTF-8',
        }
    
})
.then(res => res.json())
.then(post => console.log(post));
}

addAPost();