document.getElementById('load').style.display='none';
// const key=906085e45b2637bd8bb9c994319d73fd;
const loadWeather = () => {
    document.getElementById('load').style.display='block';
    const city = document.getElementById('city').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=906085e45b2637bd8bb9c994319d73fd`)
        .then(res => res.json())
        .then(data => displayWeather(data));
        document.getElementById('city').value='';
}

 const displayWeather = data =>{
    const icon =data.weather[0].icon;
     const info=document.getElementById('weather');
    //  info.textContent='';
     info.innerHTML=`
    <img class="infoT" src='http://openweathermap.org/img/wn/${icon}@2x.png'>
    <h3 class="zoom">${data.weather[0].description.toUpperCase()}<h3>
     <h2 class="text-bold zoom">${(data.main.temp)}<sup>o</sup>C</h2>
    <p class="infoT">Feels Like : ${data.main.feels_like}<sup>o</sup>C | Max : ${data.main.temp_max}<sup>o</sup>C | Min : ${data.main.temp_min}<sup>o</sup>C</p>
    <p class="zoom"><small>${data.name},${data.sys.country}</small></p>
     `;
     let lat = data.coord.lat;
     let lon = data.coord.lon;
     console.log(lat,lon);
     getDatafor7days(lat, lon);
     document.getElementById('load').style.display='none';
 }
let input = document.getElementById("city");
input.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button-search").click();
    }
});
// Weather for 7 days Data for future work
const getDatafor7days = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=906085e45b2637bd8bb9c994319d73fd`;
    try {
      let res = await fetch(url);
      let data = await res.json();
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };
