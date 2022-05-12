import cloudy from './weather_icons/cloudy.png'
import day_clear from './weather_icons/day_clear.png'
import day_partly_cloudy from './weather_icons/day_partly_cloudy.png'
import day_rain_light from './weather_icons/day_rain_light.png'
import lightning_storm from './weather_icons/lightning_storm.png'
import night_clear from './weather_icons/night_clear.png'
import night_partly_cloudy from './weather_icons/night_partly_cloudy.png'
import night_rain_light from './weather_icons/night_rain_light.png'
import rain_heavy from './weather_icons/rain_heavy.png'
import rain_lightning_showers from './weather_icons/rain_lightning_showers.png'
import snow_heavy from './weather_icons/snow_heavy.png'
import snow_light from './weather_icons/snow_light.png'
import tornado from './weather_icons/tornado.png'
import tsunami from './weather_icons/tsunami.png'
import winds_heavy from './weather_icons/winds_heavy.png'
import winds_light from './weather_icons/winds_light.png'
import nothing_found from './weather_icons/nothing_found.png'

export const getForecastIcons = (currWeatherId) => {


    if(currWeatherId >= 210 && currWeatherId <= 221) {
        return lightning_storm;
    } else if (currWeatherId >= 200 && currWeatherId <= 202) {
        return rain_lightning_showers
    } else if (currWeatherId >= 230 && currWeatherId <= 232) {
        return rain_lightning_showers
    } else if (currWeatherId >= 300 && currWeatherId <= 321) {
        return day_rain_light
    } else if (currWeatherId >= 500 && currWeatherId <= 531) {
        return rain_heavy
    } else if (currWeatherId === 602 || currWeatherId === 622) {
        return snow_heavy
    } else if (currWeatherId !== 602 && currWeatherId >= 600 && currWeatherId <= 621) {
        return snow_light
    } else if (currWeatherId === 781) {
        return tornado
    } else if (currWeatherId === 800) {
        return day_clear
    } else if (currWeatherId >= 801 && currWeatherId <= 802) {
        return day_partly_cloudy
    } else if (currWeatherId === 803 || currWeatherId === 804) {
        return cloudy
    } else {
        return nothing_found
    }

}