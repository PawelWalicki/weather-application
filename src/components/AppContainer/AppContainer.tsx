import { CurrentAirQualityContainer } from "../CurrentAirQualityContainer/CurrentAirQualityContainer"
import { CurrentWeatherCondition } from "../CurrentWeatherCondition/CurrentWeatherCondition"
import { CurrentWeatherContainer } from "../CurrentWeatherContainer/CurrentWeatherContainer"
import { DaysForecast } from "../DaysForecast/DaysForecast"
import { HourlyForecast } from "../HourlyForecast/HourlyForecast"
import { SearchBar } from "../SearchBar/SearchBar"
import "./AppContainer.css"

export const AppContainer = () => {
    return (
        <div >
            <div className="container">
                <div className="header">
                    <SearchBar />
                </div>
                <div className="main">
                    <div className="current-weather">
                        <CurrentWeatherCondition />
                    </div>
                    <CurrentWeatherContainer />
                    <CurrentAirQualityContainer />
                    <DaysForecast />
                    <HourlyForecast />
                </div>
            </div>
        </div>
    )
}

