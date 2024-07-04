import { CurrentAirQualityValue } from "../CurrentAirQualityValue/CurrentAirQualityValue"
import "./CurrentAirQualityContainer.css"
import { OverallWeatherContainer } from "../OverallWeatherContainer/OverallWeatherContainer"
import { SunriseTime } from "../SunriseTime/SunriseTime"


export function CurrentAirQualityContainer() {
    

    return (
        <div className="air-quality">
            <OverallWeatherContainer/>
            <SunriseTime/>
            <CurrentAirQualityValue/>
        </div>

    )
}