import { useContext } from "react"
import { kelvinToCelcius } from "../../utils/converters"
import { WeatherContext } from "../../context/WeatherContext"
import "./OverallWeatherContainer.css"


export function OverallWeatherContainer() {
    const { weather } = useContext(WeatherContext)
    return (
        <div className="overall-weather ">
            <div className="temp-overall">
                <div className="temp-feels">
                    <div>Feels like</div>
                    <div>{weather.main && Math.floor(kelvinToCelcius(weather.main.feels_like))}°C</div>
                </div>
                <div  className="temp-other">
                    <div>
                        <div>Temp Max</div>
                        <div>{weather.main && Math.floor(kelvinToCelcius(weather.main.temp_max))}°C</div>
                    </div>
                    <div>
                        <div>Temp Min</div>
                        <div>{weather.main && Math.floor(kelvinToCelcius(weather.main.temp_min))}°C</div>
                    </div>

                </div>
            </div>
            <div className="rest-overall">
                <div>
                    <img className="pressure-img" src="/pressure.png"/>
                    <div>Pressure</div>
                    <div>{weather.main && weather.main.pressure} hPa</div>
                </div>
                <div>
                    <img className="wind-img" src="/wind.png"/>
                    <div>Wind Speed</div>
                    <div>{weather.wind && weather.wind.speed} km/h</div>
                </div>
            </div>
        </div>
    )
}