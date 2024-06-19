import { useContext } from "react"
import { WeatherContext } from "../../context/WeatherContext"
import { SearchBarContext } from "../../context/SearchBarContext"
import "./CurrentWeatherCondition.css"

export function CurrentWeatherCondition() {
    const { weather } = useContext(WeatherContext)
    const { location } = useContext(SearchBarContext)


    return (
        <div className="condition-box">
            <div>{location}</div>
            <div className="temp-day">{Math.floor(weather.main?.temp - 273)} *C</div>
            <div>{weather.weather && weather.weather[0].main}</div>
            <img src={weather.weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
        </div>
    )
}


 

