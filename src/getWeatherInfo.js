const todayDiv = document.getElementById('today');
const todaysDegreeDiv = document.getElementById('todaysDegree');
const iconDiv = document.getElementById('iconDiv');
const sunSetRiseDiv = document.getElementById('sunSetRise')

import { getWeatherIcon } from "./getWeatherIcon";
import { getTimeStamp } from "./getTimeStamp";
import sunrise  from "./weather_icons/sunrise.png";
import sunset from "./weather_icons/sunset.png";
import verticle_line from "./weather_icons/verticle_line.png"

export const getWeatherInfo = async(location, units) => {
    let currentWeatherIcon;
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=3891df82bc1b5cf3040f45ec220c6d43&units=${units}`);
        const localWeather = await response.json()
        let { name, weather, sys, main, timezone } = localWeather;
        let sunriseTime = getTimeStamp(sys.sunrise, timezone)
        let sunsetTime = getTimeStamp(sys.sunset, timezone);
        currentWeatherIcon = getWeatherIcon(weather[0].id);

        console.log(timezone)

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
        sunSetRiseDiv.innerHTML = `
            <div class="col-4">
                <img src="${sunrise}" width="75px">
                <h5>${sunriseTime} AM</h5>
            </div>
            <div class="col-4">
                <h1>${Math.round(main.feels_like)}°</h1>
                <h5>FEELS LIKE</h5>
            </div>
            <div class="col-4">
                <img src="${sunset}" width="75px">
                <h5>${sunsetTime} PM</h5>
            </div>
        `
    } catch(err) {
        throw new Error(err)
    }

};