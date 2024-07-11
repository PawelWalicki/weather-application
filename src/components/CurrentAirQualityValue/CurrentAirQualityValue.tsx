import { useContext } from "react"
import { WeatherContext } from "../../context/WeatherContext"
import "./CurrentAirQualityValue.css"

export function CurrentAirQualityValue() {
    const { airQuality } = useContext(WeatherContext)

    // 
    return (
        <div className="air-value">
            <div className="quality-item">
                <div className="title">CO</div>
                <div className="value">{airQuality.list && airQuality.list[0].components.co}</div>
            </div>
            <div className="quality-item">
                <div className="title">NO2</div>
                <div className="value">{airQuality.list && airQuality.list[0].components.no2}</div>
            </div>
            <div className="quality-item">
                <div className="title">O3</div>
                <div className="value">{airQuality.list && airQuality.list[0].components.o3}</div>
            </div>
            <div className="quality-item">
                <div className="title">SO2</div>
                <div className="value">{airQuality.list && airQuality.list[0].components.so2}</div>
            </div>
            <div className="quality-item">
                <div className="title">PM2.5</div>
                <div className="value">{airQuality.list && airQuality.list[0].components.pm2_5}</div>
            </div>
            <div className="quality-item">
                <div className="title">PM10</div>
                <div className="value">{airQuality.list && airQuality.list[0].components.pm10}</div>
            </div>
            <div className="quality-item item-aqi">
                <div className="title">AQI</div>
                <div className="value">{airQuality.list && airQuality.list[0].main.aqi}</div>
            </div>

        </div>
    )
}