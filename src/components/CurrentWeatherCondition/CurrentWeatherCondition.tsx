import { useContext } from "react"
import { WeatherContext } from "../../context/WeatherContext"
import { SearchBarContext } from "../../context/SearchBarContext"
import "./CurrentWeatherCondition.css"

export function CurrentWeatherCondition() {
    const { weather } = useContext(WeatherContext)
    const { location } = useContext(SearchBarContext)


    return (
        <div className="condition-box">
            <div className="date-box">
                <div className="location">{location}</div>
                <div className="time">9:46</div>
                <div className="date">Monday, 12.06</div>
                <div className="temp-day">{Math.floor(weather.main?.temp - 273)} *C</div>
            </div>
            <div className="weather-box">
                <img className="weather-icon" src={weather.weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                <div className="weather">{weather.weather && weather.weather[0].main}</div>
            </div>
        </div>
    )
}




