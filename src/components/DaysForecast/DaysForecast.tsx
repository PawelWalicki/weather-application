import { useContext, useEffect, useState } from "react"
import "./DaysForecast.css"
import { WeatherContext } from "../../context/WeatherContext"
import { getDDMMfromDate, kelvinToCelcius } from "../../utils/converters"
import { ForecastEntryType } from "../../types/ForecastEntry"
export function DaysForecast() {
    const { forecast } = useContext(WeatherContext)
    const [daysForecast, setDaysForecast] = useState<ForecastEntryType[]>([])

    useEffect(() => {
        if (forecast.list) {
            setDaysForecast(forecast.list.filter((e: ForecastEntryType) => e.dt_txt.includes("12:00:00")))
        }
    }, [forecast])

    return (
        <div className="days df">
            <p className="title-days">5 Days Forecast</p>
            { 
                daysForecast.map((day: ForecastEntryType, index: number) => {

                    return (
                        <div key={index} className="days-forecast"> 
                            <div><img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} /></div>
                            <div>{Math.floor(kelvinToCelcius(day.main.temp))} °C</div>
                            <div>{getDDMMfromDate(day.dt_txt)}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}