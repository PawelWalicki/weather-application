import { useContext } from "react"
import { WeatherContext } from "../../context/WeatherContext"
import { getHoursAndMinutesFromTimestamp } from "../../utils/converters"
import "./TimeOfSunrise.css"



export function TimeOfSunrise() {
    const {forecast} = useContext(WeatherContext)
    return (

        <div className="sun-time">
            <div>Sunrise</div>
            <img className="sun-img" src="/sunrise.png"/>
            <div>{forecast.city && getHoursAndMinutesFromTimestamp(forecast.city.sunrise)} </div>
            <div>Sunset</div>
            <img className="sun-img" src="/sunset.png"/>
            <div>{forecast.city && getHoursAndMinutesFromTimestamp(forecast.city.sunset)} </div>
        </div>
    )

}
