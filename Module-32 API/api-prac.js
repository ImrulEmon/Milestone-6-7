
    function loadUsers(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => displayUsers(users));
    }

    function displayUsers(users) {
        const ul = document.getElementById("users");
        ul.innerText='';
        for(const user of users){
            const li = document.createElement('li');
            li.innerText=`Name : ${user.name} | Phone : ${user.phone} | Website : ${user.website}`;
            li.classList.add('li');
            ul.appendChild(li);
           // console.log()
        }
    }
    function loadPosts(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => displayPosts(posts));
    }

    function displayPosts(posts) {
        const ul = document.getElementById("users");
        ul.innerText='';
        for(const post of posts){
            const li = document.createElement('li');
            li.innerText=`Name : ${post.title} | ID : ${post.id}`;
            li.classList.add('li');
            ul.appendChild(li);
            console.log()
        }
    }

    //  
    //  loadUsers()