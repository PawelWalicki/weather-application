import { useContext } from "react"
import { WeatherContext } from "../../context/WeatherContext"
import { getHoursAndMinutesFromTimestamp } from "../../utils/converters"
import "./TimeOfSunrise.css"



export function TimeOfSunrise() {
    const {forecast} = useContext(WeatherContext)
    return (

        <div className="sun-box">
            <div className="sun-headline">Sunrise</div>
            <img className="sun-img" src="/sunrise.png"/>
            <div className="sun-time">{forecast.city && getHoursAndMinutesFromTimestamp(forecast.city.sunrise)} </div>
            <div className="sun-headline">Sunset</div>
            <img className="sun-img" src="/sunset.png"/>
            <div className="sun-time">{forecast.city && getHoursAndMinutesFromTimestamp(forecast.city.sunset)} </div>
        </div>
    )

}
