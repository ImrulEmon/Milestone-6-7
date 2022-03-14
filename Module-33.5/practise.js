const loadComment =()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data=>displayComment(data))
}

const displayInfo= info =>{
    const infoBox=document.getElementById('CommentInfo').innerText=info;
    // const p = document.createElement('p');
    // p.innerText=info;
    // infoBox.appendChild(p);
}

const loadInfo=id=>{
    console.log(id);
    const url = `https://jsonplaceholder.typicode.com/comments?id=${id}`;
   fetch(url)
   .then(res=>res.json())
   .then(data=>displayInfo(data[0].body));
}



const displayComment = comments =>{
    const commentBox = document.getElementById('commentBox');
    comments.forEach(comment => {
        const div = document.createElement('div');
        div.onclick=function(){loadInfo(comment.id)};
        div.innerHTML=`
        ${comment.id} | ${comment.name} | ${comment.email} |  ${comment.postId}
        <button onclick="loadInfo(${comment.id})">Comment Info</button>
        `;
        div.classList.add("singleComment");
        commentBox.appendChild(div);
        //console.log(comment.name,comment.email);
    });
}


// document.getElementById("commentBox").addEventListener('click', function (event) {
//     if (event.target.className == 'singleComment') {
//         console.log(event.target.innerHTML);
//     }

// })