import { useContext } from "react"
import { WeatherContext } from "../../context/WeatherContext"
import { getHoursAndMinutesFromTimestamp } from "../../utils/converters"



export function SunriseTime() {
    const {forecast} = useContext(WeatherContext)
    return (

        <div>
            <div>Sunrise</div>
            <div>{forecast.city && getHoursAndMinutesFromTimestamp(forecast.city.sunrise)} </div>
            <div>Sunset</div>
            <div>{forecast.city && getHoursAndMinutesFromTimestamp(forecast.city.sunset)} </div>
        </div>
    )

}