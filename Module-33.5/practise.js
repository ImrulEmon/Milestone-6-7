const loadComment =()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data=>displayComment(data))
}


const displayComment = comments =>{
    const commentBox = document.getElementById('commentBox');
    comments.forEach(comment => {
        const p = document.createElement('p');
        p.innerHTML=`${comment.id} | ${comment.name} | ${comment.email}
        `;
        commentBox.appendChild(p);
        //console.log(comment.name,comment.email);
    });
}