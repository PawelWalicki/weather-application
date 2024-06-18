import { CurrentWeatherContainer } from "../CurrentWeatherContainer/CurrentWeatherContainer"
import { SearchBar } from "../SearchBar/SearchBar"

export const AppContainer = () => {
    return (
        <div>
            <SearchBar />
            <CurrentWeatherContainer />
        </div>
    )
}