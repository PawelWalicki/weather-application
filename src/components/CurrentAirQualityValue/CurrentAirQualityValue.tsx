import { useContext } from "react"
import { WeatherContext } from "../../context/WeatherContext"

export function CurrentAirQualityValue() {
    const {airQuality} = useContext(WeatherContext)
    
    
    return (
        <div>
            <div>CO</div>
            {/* <div>{airQuality.list && airQuality.list.components[0]}</div> */}
            
        </div>
    )
}