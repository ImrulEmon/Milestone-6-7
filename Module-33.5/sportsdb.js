const loadClubs=()=>{
    const country = document.getElementById("countryName").value;
    const url =`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=${country}`;
    fetch(url)
    .then(res=>res.json())
    .then(clubs=>displayClubs(clubs.teams))
}

const displayClubs=clubs=>{
    const searchResult = document.getElementById("searchResult");
    searchResult.textContent='';
    clubs.forEach(club => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div class="card h-100">
        <img src="${club.strTeamBadge}" class="card-img-top img-fluid my-4 w-50 mx-auto" alt="...">
        <div class="card-body">
          <h5 class="card-title">${club.strTeam}</h5>
          <p class="card-text">Formed Year : ${club.intFormedYear}</p>
          <p class="card-text">League : ${club.strLeague}</p>
          <p class="card-text">Stadium : ${club.strStadium}</p>
          <p class="card-text">Location : ${club.strStadiumLocation}</p>
        </div>
      </div>
        `;
        searchResult.appendChild(div);
        console.log(club)
    });
}

//Enter Event
var input = document.getElementById("countryName");
    input.addEventListener("keypress", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button-search").click();
      }
    });