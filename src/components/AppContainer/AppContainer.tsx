import { CurrentAirQualityContainer } from "../CurrentAirQualityContainer/CurrentAirQualityContainer"
import { CurrentWeatherCondition } from "../CurrentWeatherCondition/CurrentWeatherCondition"
import { DaysForecast } from "../DaysForecast/DaysForecast"
import { Footer } from "../Footer/Footer"
import { HourlyForecast } from "../HourlyForecast/HourlyForecast"
import { SearchBar } from "../SearchBar/SearchBar"
import "./AppContainer.css"

export const AppContainer = () => {
    return (
        <div >
            <div className="container">
                <div className="header hdr">
                    <SearchBar />
                </div>
                <div className="main">
                    <div className="current-weather cw">
                        <CurrentWeatherCondition />
                    </div>
                    <CurrentAirQualityContainer />
                    <DaysForecast />
                    <HourlyForecast />
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

