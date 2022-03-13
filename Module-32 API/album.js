function album() {
    fetch('https://jsonplaceholder.typicode.com/albums').
    then(res=>res.json())
    .then(album=>displayAlbum(album));
}

function displayAlbum(album) {
    const albumContainer = document.getElementById("AlbumContainer");
    for(element of album){
        const div = document.createElement("div");
        div.innerHTML=`<h3>${element.userId}</h3>
        <h4>${element.id}</h4>
        <p>${element.title}</p>
        `
        div.classList.add("album");
        albumContainer.appendChild(div);
    }
}