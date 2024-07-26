import { useContext } from "react"
import { WeatherContext } from "../../context/WeatherContext"
import "./CurrentAirQualityValue.css"

export function CurrentAirQualityValue() {
    const { airQuality } = useContext(WeatherContext)

    // 
    return (
        <div className="air-value">
             <p className="air-title">Air Quality</p>
            <div className="quality-item">
                <div className="quality-title">CO</div>
                <div className="quality-value">{airQuality.list && airQuality.list[0].components.co}</div>
            </div>
            <div className="quality-item">
                <div className="quality-title">NO2</div>
                <div className="quality-value">{airQuality.list && airQuality.list[0].components.no2}</div>
            </div>
            <div className="quality-item">
                <div className="quality-title">O3</div>
                <div className="quality-value">{airQuality.list && airQuality.list[0].components.o3}</div>
            </div>
            <div className="quality-item">
                <div className="quality-title">SO2</div>
                <div className="quality-value">{airQuality.list && airQuality.list[0].components.so2}</div>
            </div>
            <div className="quality-item">
                <div className="quality-title">PM2.5</div>
                <div className="quality-value">{airQuality.list && airQuality.list[0].components.pm2_5}</div>
            </div>
            <div className="quality-item">
                <div className="quality-title">PM10</div>
                <div className="quality-value">{airQuality.list && airQuality.list[0].components.pm10}</div>
            </div>
            <div className="quality-item item-aqi">
                <div className="quality-title">AQI</div>
                <div className="quality-value">{airQuality.list && airQuality.list[0].main.aqi}</div>
            </div>

        </div>
    )
}