import { useContext, useEffect, useState } from "react"
import "./HourlyForecast.css"
import { WeatherContext } from "../../context/WeatherContext"
import { ForecastEntryType } from "../../types/ForecastEntry"
import { getHourFromDate, kelvinToCelcius } from "../../utils/converters"
export function HourlyForecast() {
    const { forecast } = useContext(WeatherContext)
    const [hourlyForecast, sethourlyForecast] = useState<ForecastEntryType[]>([])
    useEffect(() => { // forecast {} =>> forecast.list == undefined
        if (forecast.list) {
            sethourlyForecast(forecast.list.slice(0, 8)) // <0, 8)
        }
    }, [forecast])

    return (
        <div className="hourly hf">
            <p className="hourly-title">Hourly Forecast</p>
            <div  className="hourly-container">
                {
                    hourlyForecast.map((hour: ForecastEntryType, index: number) => {
                        return (
                            <div key={index} className="hourly-box">
                                <div>{getHourFromDate(hour.dt_txt)}</div>
                                <img className="hourly-icon" src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`} />
                                <div>{Math.floor(kelvinToCelcius(hour.main.temp))} °C </div>
                                <img className="wind-img" src="/wind.png"/>
                                <div>{hour.wind.speed} km/h</div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}