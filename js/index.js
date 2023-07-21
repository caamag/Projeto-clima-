
const apiKey = '331ea25b55ce5979a86c81ef9841cc83'; 
const countryAPI = 'https://flagsapi.com/'; 



const countryInput = document.querySelector('#country-input'); 
const countryBtn = document.querySelector('.country-btn'); 
const cityName = document.querySelector('#city'); 
const temperature = document.querySelector('#temperature span'); 
const descriptionWeather = document.querySelector('.description'); 
const weatherIcon = document.querySelector('#description-img'); 
const wind = document.querySelector('.wind-txt span'); 
const humidity = document.querySelector('.humidity-description span'); 




 async function getWeaherAPI (city) {

    const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`; 

    const res = await fetch(APIUrl); 
    const data = await res.json(); 

    console.log(data);

    return data; 

}


async function showWeatherData (city) {

    const data = await getWeaherAPI(city); 

    cityName.innerHTML = data.name; 
    temperature.innerHTML = data.main.temp;
    humidity.innerHTML = data.main.humidity; 
    wind.innerHTML = data.wind.speed; 


}




countryBtn.addEventListener('click', (e) => {

    e.preventDefault(); 

    const inputValue = countryInput.value; 

    if (!inputValue) {
        alert('Campo vazio. Digite o nome do local...'); 
    } else {
        showWeatherData(inputValue); 
    }

})


