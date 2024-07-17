import { CurrentAirQualityValue } from "../CurrentAirQualityValue/CurrentAirQualityValue"
import "./CurrentAirQualityContainer.css"
import { OverallWeatherContainer } from "../OverallWeatherContainer/OverallWeatherContainer"
import { TimeOfSunrise } from "../TimeOfSunrise/TimeOfSunrise"


export function CurrentAirQualityContainer() {
    

    return (
        <div className="air-quality aq">
            <OverallWeatherContainer/>
            <TimeOfSunrise/>
            <CurrentAirQualityValue/>
        </div>

    )
}