const loadCountries=()=>{
    // const url = `https://restcountries.com/v3.1/all`;
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res=>res.json())
    .then(data=>displayCountries(data));
}
const displayCountries = countries =>{
    // console.log(countries[0]);
    const container = document.getElementById('countries');
    const countryHtml = countries.map(country => getCountryHTML(country));
    container.innerHTML = countryHtml.join(' ');
    console.log(countryHtml[0]);
}
const getCountryHTML = country => {
    const {capital,flag}=country;
    return `
        <div class='country'>
            <h3>${country.name.common}</h3>
            <h4>Capital : ${capital} </h4>
            <img title='${flag}' src="${country.flags.png}">
        </div>
    `
}
loadCountries();