import { getForecast } from "./getForecast";
import { getWeatherInfo } from "./getWeatherInfo";


const submitBtn = document.getElementById('submit');
const input = document.getElementById('input')

submitBtn.addEventListener('click', () => {
    getWeatherInfo(input.value.trim());
    getForecast(input.value.trim())
});

getWeatherInfo('reno');
getForecast('reno')