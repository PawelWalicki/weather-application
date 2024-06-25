import { useContext } from "react"
import { CurrentAirQualityValue } from "../CurrentAirQualityValue/CurrentAirQualityValue"
import "./CurrentAirQualityContainer.css"
import { WeatherContext } from "../../context/WeatherContext"
import { SunriseTime } from "../SunriseTime/SunriseTIme"
import { kelvinToCelcius } from "../../utils/converters"

export function CurrentAirQualityContainer() {
    const {weather} = useContext(WeatherContext)

    return (
        <div className="air-quality">
            <div>Feels like</div>
            <div>{weather.main && Math.floor(kelvinToCelcius(weather.main.feels_like))}*C</div>
            <div>Temp Max</div>
            <div>{weather.main && Math.floor(kelvinToCelcius(weather.main.temp_max))}*C</div>
            <div>Temp Min</div>
            <div>{weather.main && Math.floor(kelvinToCelcius(weather.main.temp_min))}*C</div>
            <div>Pressure</div>
            <div>{weather.main && weather.main.pressure}</div>
            <div>Wind Speed</div>
            <div>{weather.wind && weather.wind.speed}</div>
            <SunriseTime/>
            <CurrentAirQualityValue/>
        </div>

    )
}