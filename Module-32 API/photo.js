function photo(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(photos=>displayphotos(photos));
}

function displayphotos(photos){
   const photoContainer= document.getElementById("photoContainer");
   for(const photo of photos){
       const div=document.createElement('div');
       div.innerHTML=`<img src="${photo.thumbnailUrl}">
       <div class="mpx">
       <h4>ID : ${photo.id}</h4>
       <h4>Title : ${photo.title}"</h4>
       </div> 
       `
       div.classList.add("photo");
       photoContainer.appendChild(div);
   }
}