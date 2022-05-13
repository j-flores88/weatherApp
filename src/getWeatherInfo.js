const todayDiv = document.getElementById('today');
const todaysDegreeDiv = document.getElementById('todaysDegree');
const iconDiv = document.getElementById('iconDiv');

import { getWeatherIcon } from "./getWeatherIcon";

export const getWeatherInfo = async(location) => {
    let currentWeatherIcon;
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=3891df82bc1b5cf3040f45ec220c6d43&units=imperial`);
        const localWeather = await response.json()
        let { name, weather, wind, main } = localWeather;
        currentWeatherIcon = getWeatherIcon(weather[0].id);

        iconDiv.innerHTML = `
            <img src="${currentWeatherIcon}">
        `
        todayDiv.innerHTML = `
            <h1>${name.toUpperCase()}</h1>
            <h4>${weather[0].description.toUpperCase()}</h4>
        `
        todaysDegreeDiv.innerHTML = `
            <h1>${Math.round(main.temp)}°</h1>
            <h4>${Math.round(main.temp_max)}°/${Math.round(main.temp_min)}°</h4>
        `
    } catch(err) {
        throw new Error(err)
    }

};