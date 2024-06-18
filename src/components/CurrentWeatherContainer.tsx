import { CurrentAirQualityContainer } from "./CurrentAirQualityContainer"
import { CurrentWeatherCondition } from "./CurrentWeatherCondition"

export function CurrentWeatherContainer() {
    return (
        <div>
            <div>CurrentWeatherContainer</div>
            <CurrentWeatherCondition/>
            <CurrentAirQualityContainer/>
        </div>

    )
}