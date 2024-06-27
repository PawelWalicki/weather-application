import { useContext } from "react"
import { WeatherContext } from "../../context/WeatherContext"

export function CurrentAirQualityValue() {
    const {airQuality} = useContext(WeatherContext)
    
    // 
    return (
        <div>
            <div className="title">CO</div>
            <div>{airQuality.list && airQuality.list[0].components.co}</div>
            <div className="title">NO2</div>
            <div>{airQuality.list && airQuality.list[0].components.no2}</div>
            <div className="title">O3</div>
            <div>{airQuality.list && airQuality.list[0].components.o3}</div>
            <div className="title">SO2</div>
            <div>{airQuality.list && airQuality.list[0].components.so2}</div>
            <div className="title">PM2.5</div>
            <div>{airQuality.list && airQuality.list[0].components.pm2_5}</div>
            <div className="title">PM10</div>
            <div>{airQuality.list && airQuality.list[0].components.pm10}</div>
            <div className="title">AQI</div>
            <div>{airQuality.list && airQuality.list[0].main.aqi}</div> 
            
        </div>
    )
}