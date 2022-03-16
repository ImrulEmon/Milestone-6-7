
// const key=906085e45b2637bd8bb9c994319d73fd;
const loadWeather = () => {
    const city = document.getElementById('city').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=906085e45b2637bd8bb9c994319d73fd`)
        .then(res => res.json())
        .then(data => displayWeather(data));
}


 const displayWeather = data =>{
    const icon =data.weather[0].icon;
     document.getElementById('weather').innerHTML=`
    <img src='http://openweathermap.org/img/wn/${icon}@2x.png'>
    <h3>${data.weather[0].description}<h3>
     <h2 class="text-bold">${data.main.temp}<sup>o</sup>C</h2>
    <p>Feels Like : ${data.main.feels_like}<sup>o</sup>C | Max : ${data.main.temp_max}<sup>o</sup>C | Min : ${data.main.temp_min}<sup>o</sup>C</p>
    <p><small>${data.name},${data.sys.country}</small></p>
     `;
    console.log(data.main.feels_like,data.main.temp,data.main.temp_max,data.main.temp_min);
     console.log(data.weather[0].main,data.weather[0].description);
     
 }
