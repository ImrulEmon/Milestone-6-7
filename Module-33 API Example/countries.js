const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => displayCountries(countries))
}

const displayCountries = countries => {
    const countryContainer = document.getElementById('countryContainer');
    for (const country of countries) {
        // const language = JSON.stringify(country.languages).replace(/[^a-zA-Z0-9:, ]/g, '');
        const p = document.createElement('p');
        p.innerHTML = `${country.name.common} | 
        ${country.capital} | ${country.region} |
         | 
        <button onclick="loadCountryDetail('${country.name.common}')">Details</button>
        `;
        p.classList.add("country");
        countryContainer.appendChild(p);
        //console.log(country.region)
    };
}

const loadCountryDetail = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayInfo(data[0]));
}


const displayInfo = country => {
    const info = document.getElementById("info");
    info.innerHTML = `<img width='200px' src="${country.flags.png}">
    <p>Population : ${country.population} | ${country.subregion} | ${country.startOfWeek}</p>
    `;
}


document.getElementById("countryContainer").addEventListener('click', function (event) {
    if (event.target.tagName == 'P') {
        event.target.style.fontWeight = "bold";
        event.target.style.backgroundColor = "Green";


    }

})
document.getElementById("countryContainer").addEventListener('dblclick', function (event) {
    if (event.target.tagName == 'P') {
        event.target.style.fontWeight = "normal";
        event.target.style.backgroundColor = "white";

    }

})