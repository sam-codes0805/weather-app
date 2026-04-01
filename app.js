let searchbtn = document.querySelector(".search-button");
let cityname;
const url = 'https://api.weatherstack.com/current?access_key=1509944f5b115b0521e6b0c800c06bb0&query=';


let loc = document.querySelector(".location");
let date = document.querySelector(".datetime");
let temp = document.querySelector(".temp");
let weather = document.querySelector(".weather");

searchbtn.addEventListener("click", async () => {
    let city = document.querySelector(".search-bar").value;
    console.log(city);
    cityname = city;
    let finalurl = `${url}${cityname}`;

    async function fetchApi() {
        const response = await fetch(finalurl);
        const result = await response.json();
        return result;
    }

    let Data = await fetchApi();
    console.log(Data);

    loc.innerText = `${Data.location.name}, ${Data.location.country}`;
    date.innerText = `${Data.location.localtime}, observed at ${Data.current.observation_time}`;
    temp.innerText = `${Data.current.temperature}°C`;
    weather.innerText = `${Data.current.weather_descriptions[0]}`;

});















// ///       1509944f5b115b0521e6b0c800c06bb0     ///





// async function fetchApi() {
//     const response = await fetch(url);
//     const result = await response.json();
//     console.log(result.current.temperature);
//     return result;
// }
// let Data = fetchApi();