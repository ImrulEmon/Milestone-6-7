function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(respose => respose.json())
        .then(json => console.log(json));
}
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => displayUsers(users)
            /*users.forEach(user => 
            console.log(`${user.name} | ${user.username}`))*/);
}
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => displayPosts(posts));
}

function displayUsers(users) {
    const ul = document.getElementById("users");
   for(const user of users){
       console.log(user.name);
       const li = document.createElement('li');
       li.classList.add("li");
       li.innerText= `Name : ${user.name} | Email : ${user.email}`;
       ul.appendChild(li);
   }
}
function displayPosts(posts) {
    const ul = document.getElementById("users");
   for(const post of posts){
       console.log(post.title);
       const li = document.createElement('li');
       li.classList.add("li");
       li.innerText= `POst Title : ${post.title}`;
       ul.appendChild(li);
   }
}