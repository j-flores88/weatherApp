export const getForecast = async(location) => {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=3891df82bc1b5cf3040f45ec220c6d43&units=imperial&cnt=5`);
        const localWeather = await response.json()
        const { list } = localWeather
        console.log(list)
    } catch(err) {
        throw new Error(err)
    }
};