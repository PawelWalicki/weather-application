import { CurrentAirQualityValue } from "../CurrentAirQualityValue/CurrentAirQualityValue"
import "./CurrentAirQualityContainer.css"
import { OveralWeatherContainer } from "../OverallWeatherContainer/OverallWeatherContainer"
import { SunriseTime } from "../SunriseTime/SunriseTime"


export function CurrentAirQualityContainer() {
    

    return (
        <div className="air-quality">
            <OveralWeatherContainer/>
            <SunriseTime/>
            <CurrentAirQualityValue/>
        </div>

    )
}