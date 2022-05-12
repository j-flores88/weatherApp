const dayOneIcon = document.getElementById('dayOneIcon');
const dayOneWeather = document.getElementById('dayOneWeather');
const dayOneDegrees = document.getElementById('dayOneDegrees');

const dayTwoIcon = document.getElementById('dayTwoIcon');
const dayTwoWeather = document.getElementById('dayTwoWeather');
const dayTwoDegrees = document.getElementById('dayTwoDegrees');

const dayThreeIcon = document.getElementById('dayThreeIcon');
const dayThreeWeather = document.getElementById('dayThreeWeather');
const dayThreeDegrees = document.getElementById('dayThreeDegrees');

import { getWeatherIcon } from "./getWeatherIcon";
import { getForecastIcons } from "./getForecastIcons";

export const getForecast = async(location) => {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=3891df82bc1b5cf3040f45ec220c6d43&units=imperial&cnt=3`);
        const localWeather = await response.json()
        const { list } = localWeather

        let iconOne = getForecastIcons(list[0].weather[0].id);
        let iconTwo = getForecastIcons(list[1].weather[0].id);
        let iconThree = getForecastIcons(list[2].weather[0].id);

        console.log(list[1])

        dayOneIcon.innerHTML = `
            <img src="${iconOne}" width="50px">
        `
        dayOneWeather.innerHTML = `
            <h5>${list[0].weather[0].description.toUpperCase()}</h5>
        `
        dayOneDegrees.innerHTML = `
            <h5>${Math.round(list[0].main.temp_max)}°/${Math.round(list[0].main.temp_min)}</h5>
        `

        dayTwoIcon.innerHTML = `
            <img src="${iconTwo}" width="50px">
        `
        dayTwoWeather.innerHTML = `
            <h5>${list[1].weather[0].description.toUpperCase()}</h5>
        `
        dayTwoDegrees.innerHTML = `
            <h5>${Math.round(list[1].main.temp_max)}°/${Math.round(list[1].main.temp_min)}</h5>
        `

        dayThreeIcon.innerHTML = `
            <img src="${iconThree}" width="50px">
        `
        dayThreeWeather.innerHTML = `
            <h5>${list[2].weather[0].description.toUpperCase()}</h5>
        `
        dayThreeDegrees.innerHTML = `
            <h5>${Math.round(list[2].main.temp_max)}°/${Math.round(list[2].main.temp_min)}</h5>
        `
    } catch(err) {
        throw new Error(err)
    }
};