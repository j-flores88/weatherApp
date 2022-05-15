import { getForecast } from "./getForecast";
import { getWeatherInfo } from "./getWeatherInfo";

const submitBtn = document.getElementById('submit');
const input = document.getElementById('input');
const chkBox = document.querySelector("input[name=checkbox]");

chkBox.addEventListener('change', function () {
    let currentCity;

    if(input.value === '') {
        currentCity = 'reno'
    } else {
        currentCity = input.value.trim()
    }

    if(this.checked) {
        getWeatherInfo(currentCity, 'metric');
        getForecast(currentCity, 'metric')
    } else {
        getWeatherInfo(currentCity, 'imperial');
        getForecast(currentCity, 'imperial');
    }
})


submitBtn.addEventListener('click', () => {
    if(!chkBox.checked) {
        getWeatherInfo(input.value.trim(), 'imperial');
        getForecast(input.value.trim(), 'imperial');
    } else if (chkBox.checked) {
        getWeatherInfo(input.value.trim(), 'metric');
        getForecast(input.value.trim(), 'metric');
    }
});

getWeatherInfo('reno', 'imperial');
getForecast('reno', 'imperial')