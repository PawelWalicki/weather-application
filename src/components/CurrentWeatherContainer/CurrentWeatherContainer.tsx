import { CurrentAirQualityContainer } from "../CurrentAirQualityContainer/CurrentAirQualityContainer"
import { CurrentWeatherCondition } from "../CurrentWeatherCondition/CurrentWeatherCondition"

export function CurrentWeatherContainer() {
    return (
        <div>
            <CurrentWeatherCondition/>
            <CurrentAirQualityContainer/>
        </div>

    )
}