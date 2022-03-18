const loading = document.getElementById('loading');

const loadDrink = () => {
    loading.style.display="block";
    document.getElementById('info').textContent='';
    const searchText = document.querySelector('#searchText').value;
     url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
     document.querySelector('#searchText').value='';
    fetch(url)
        .then(res => res.json())
        .then(data => displayDrink(data.drinks));
}

displayDrink = drinks => {
    const searchResult = document.getElementById('searchResult');
    searchResult.textContent='';
    drinks.forEach(drink => {
      const div = document.createElement('div');
      div.classList.add('col');
        div.innerHTML=`
        <div class="card h-100">
        <img src="${drink.strDrinkThumb}" class="mx-auto card-img-top img-fluid w-50 rounded-circle my-4" alt="...">
        <div class="card-body">
          <h5 class="card-title">${drink.strDrink}</h5>
          <p class="card-text">${drink.strAlcoholic} | ${drink.strCategory}</p>
        </div>
        <button class="btn btn-success" onclick="moreInfo(${drink.idDrink})">More Info</button>
      </div>
        `;
        searchResult.appendChild(div);
        // console.log(drink);
    });
    loading.style.display="none";
}

const moreInfo = id =>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMoreInfo(data.drinks[0]))
}

const displayMoreInfo=drink=>{
    console.log(drink);
    const info = document.getElementById('info');
    info.innerHTML=`
    <div class="row g-0">
              <div class="col-md-4 m-auto">
                <img id="info-img" src="${drink.strDrinkThumb}" class="rounded-3 img-fluid p-2" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-primary">${drink.strDrink}</h5>
                  <p class="card-text">${drink.strInstructions}</p>
                  <p class="card-text"><small class="text-muted">${drink.strGlass}</small></p>
                </div>
              </div>
            </div>
    `
}

const elem = document.getElementById("searchText");

elem.addEventListener("keypress", (event)=> {
    if (event.keyCode === 13) { 
      event.preventDefault();
      document.getElementById("button-search").click();
    }
  });