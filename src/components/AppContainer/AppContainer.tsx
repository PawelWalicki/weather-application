import { CurrentWeatherContainer } from "../CurrentWeatherContainer/CurrentWeatherContainer"
import { DaysForecast } from "../DaysForecast/DaysForecast"
import { HourlyForecast } from "../HourlyForecast/HourlyForecast"
import { SearchBar } from "../SearchBar/SearchBar"
import "./AppContainer.css"

export const AppContainer = () => {
    return (
        <div >
            <div className="container">
                <SearchBar />
                <CurrentWeatherContainer />
                <DaysForecast />
                <HourlyForecast />
            </div>
        </div>
    )
}