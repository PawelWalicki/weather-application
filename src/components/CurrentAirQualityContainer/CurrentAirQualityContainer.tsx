import { CurrentAirQualityValue } from "../CurrentAirQualityValue/CurrentAirQualityValue"
import "./CurrentAirQualityContainer.css"

export function CurrentAirQualityContainer() {
    return (
        <div className="air-quality">
            <div>CurrentAirQualityContainer</div>
            <CurrentAirQualityValue/>
        </div>

    )
}