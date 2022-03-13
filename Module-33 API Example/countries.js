const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(countries=>displayCountries(countries))
}

const displayCountries=countries=>{
    const countryContainer = document.getElementById('countryContainer');
    for(const country of countries){
        const p = document.createElement('p');
        p.innerHTML=`${country.name.common} | 
        ${country.capital} | ${country.region}
        `;
        p.classList.add("country");
        countryContainer.appendChild(p);
        //console.log(country.region)
    }
}

document.getElementById("countryContainer").addEventListener('click',function(event) {
    if(event.target.tagName=='P'){
        event.target.style.fontWeight="bold";
        event.target.style.backgroundColor="Green";

        // font-weight: bold;
        //     background-color: black;
        //     color: white;
        //     transform: scale(1.1);
    }
    
})
document.getElementById("countryContainer").addEventListener('dblclick',function(event) {
    if(event.target.tagName=='P'){
        event.target.style.fontWeight="normal";
        event.target.style.backgroundColor="white";

        // font-weight: bold;
        //     background-color: black;
        //     color: white;
        //     transform: scale(1.1);
    }
    
})