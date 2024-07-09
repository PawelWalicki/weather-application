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
            sethourlyForecast(forecast.list.slice(0, 8))
        }
    }, [forecast])

    return (
        <div className="hourly hf">
            <p>Hourly Forecast</p>
            <div  className="hourly-container">
                {
                    hourlyForecast.map((hour: ForecastEntryType) => {
                        return (
                            <div className="hourly-box">
                                <div>{getHourFromDate(hour.dt_txt)}</div>
                                <div><img src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`} /> </div>
                                <div>{Math.floor(kelvinToCelcius(hour.main.temp))} °C </div>
                                <img className="wind-img" src="/wind.png"/>
                                <div>{forecast.list[0].wind.speed} km/h</div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}