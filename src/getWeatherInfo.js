export const getWeatherInfo = async(location) => {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=3891df82bc1b5cf3040f45ec220c6d43&units=imperial`);
        const localWeather = await response.json()
        const { name, weather, wind, main } = localWeather
        console.log(localWeather)
    } catch(err) {
        throw new Error(err)
    }
};