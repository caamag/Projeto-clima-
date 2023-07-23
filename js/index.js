
const apiKey = '331ea25b55ce5979a86c81ef9841cc83'; 



const countryInput = document.querySelector('#country-input'); 
const countryBtn = document.querySelector('.country-btn'); 
const cityName = document.querySelector('#city'); 
const temperature = document.querySelector('#temperature span'); 
const descriptionWeather = document.querySelector('.description'); 
const weatherIcon = document.querySelector('#description-img'); 
const wind = document.querySelector('.wind-txt span'); 
const humidity = document.querySelector('.humidity-description span'); 

const minTemp = document.querySelector('#min span'); 
const maxTemp = document.querySelector('#max span');







//Get API

async function getWeaherAPI (city) {

    const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`; 

    const res = await fetch(APIUrl); 
    const data = await res.json(); 

    console.log(data);

    return data; 

}


async function showWeatherData (city) {


    try{
    const data = await getWeaherAPI(city); 

    cityName.innerHTML = data.name; 
    temperature.innerHTML = parseInt(data.main.temp);
    humidity.innerHTML = data.main.humidity; 
    wind.innerHTML = data.wind.speed; 

    minTemp.innerHTML = data.main.temp_min; 
    maxTemp.innerHTML = data.main.temp_max; 

    descriptionWeather.innerHTML = data.weather[0].description;

    weatherIcon.style.display = 'block';
    weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`); 
    }catch (e) {
        alert('Erro ao localizar cidade. Digite corretamente!'); 
    }

}



//Listener button
countryBtn.addEventListener('click', (e) => {

    e.preventDefault(); 

    const inputValue = countryInput.value; 

    if (!inputValue) {
        alert('Campo vazio. Digite o nome do local...'); 
    } else {
        showWeatherData(inputValue); 
    }

})




//date 

const date = document.querySelector('.date-days');
const weekDay = document.querySelector('.day-week');  

function getDayweek () {

    const dataAtual = new Date(); 
    const dateFormat = dataAtual.toLocaleDateString(); 

    date.innerHTML = dateFormat;

    const week = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']; 
    const dayWeek = dataAtual.getDay();

    if (dayWeek === 1) {
        weekDay.innerHTML = week[0]; 
    } else if (dayWeek === 2) {
        weekDay.innerHTML = week[1]
    } else if (dayWeek === 3) {
        weekDay.innerHTML = week[2]
    } else if (dayWeek === 4) {
        weekDay.innerHTML = week[3]
    } else if (dayWeek === 5) {
        weekDay.innerHTML = week[4]
    } else if (dayWeek === 6) {
        weekDay.innerHTML = week[5]
    } else if (dayWeek === 0) {
        weekDay.innerHTML = week[6]
    } else {
        return; 
    }

}

getDayweek(); 
