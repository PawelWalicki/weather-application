import { useContext } from "react"
import { WeatherContext } from "../context/WeatherContext"

export function CurrentAirQualityValue() {
    const {weather} = useContext(WeatherContext)
    console.log(weather)
    return (
        <div>
            CurrentAirQualityValue
            
        </div>
    )
}