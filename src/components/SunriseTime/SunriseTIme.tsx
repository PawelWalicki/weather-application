import { useContext } from "react"
import { WeatherContext } from "../../context/WeatherContext"
import { getHoursAndMuntesFromTimestamp } from "../../utils/converters"



export function SunriseTime() {
    const {forecast} = useContext(WeatherContext)
    return (

        <div>
            <div>Sunrise</div>
            <div>{forecast.city && getHoursAndMuntesFromTimestamp(forecast.city.sunrise)} </div>
            <div>Sunset</div>
            <div>{forecast.city && getHoursAndMuntesFromTimestamp(forecast.city.sunset)} </div>
        </div>
    )

}