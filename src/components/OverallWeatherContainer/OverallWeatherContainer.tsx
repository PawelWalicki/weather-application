import { useContext } from "react"
import { kelvinToCelcius } from "../../utils/converters"
import { WeatherContext } from "../../context/WeatherContext"


export function OveralWeatherContainer() {
    const {weather} = useContext(WeatherContext)
    return (
        <div>
            <div>Feels like</div>
            <div>{weather.main && Math.floor(kelvinToCelcius(weather.main.feels_like))}°C</div>
            <div>Temp Max</div>
            <div>{weather.main && Math.floor(kelvinToCelcius(weather.main.temp_max))}°C</div>
            <div>Temp Min</div>
            <div>{weather.main && Math.floor(kelvinToCelcius(weather.main.temp_min))}°C</div>
            <div>Pressure</div>
            <div>{weather.main && weather.main.pressure}</div>
            <div>Wind Speed</div>
            <div>{weather.wind && weather.wind.speed}</div>
        </div>
    )
}