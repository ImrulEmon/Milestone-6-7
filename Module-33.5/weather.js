
// const key=906085e45b2637bd8bb9c994319d73fd;
const loadWeather = () => {
    const city = document.getElementById('city').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=906085e45b2637bd8bb9c994319d73fd`)
        .then(res => res.json())
        .then(data => console.log(data));
}


 const displayWeather = data =>{
    console.log(data.main.feels_like)
     console.log(data.weather[0].main,data.weather[0].description);
 }
