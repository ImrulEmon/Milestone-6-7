document.getElementById("users").style.display="none";

const loadUser = () => {
    fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => displayUser(data.results[0]));
        
        // .then(data => console.log(data.results[0].picture.thumbnail,data.results[0].location));
}

const displayUser=(user)=>{
    console.log(user);
    const users = document.getElementById('users');
    users.textContent='';
    const div = document.createElement('div');
    document.getElementById("users").style.display="block";
    div.innerHTML=`
    <img src="${user.picture.large}" class="img-fluid w-25 rounded-circle my-5" alt="...">
    <div class="card-body">
      <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
      <p class="card-text">${user.email}</p>
    </div>
    <ul class="list-group list-group-flush hover-shadow">
      <li class="list-group-item">${user.location.city}</li>
      <li class="list-group-item">${user.location.coordinates.latitude},${user.location.coordinates.longitude}</li>
      <li class="list-group-item">${user.location.country}</li>
      <li class="list-group-item">${user.location.postcode}</li>
      <li class="list-group-item">${user.location.state}</li>
      <li class="list-group-item">${user.location.street.name} | ${user.location.street.number}</li>
      <li class="list-group-item">${user.location.timezone.description} | ${user.location.timezone.offset}</li>
      
    </ul>
    `
    users.appendChild(div);
}


