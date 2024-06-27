import { Suspense, useEffect, useState } from 'react';
import './App.css';
import { WeatherContext } from './context/WeatherContext';
import { SearchBarContext } from './context/SearchBarContext';
import { AppContainer } from './components/AppContainer/AppContainer';

const API_KEY = "142da968d1acb42c1be437f8aec5abbf"
function App() {
  const [weather, setWeather] = useState({})
  const [airQuality, setAirQuality] = useState({})
  const [forecast, setForecast] = useState({})
  const [location, setLocation] = useState("Warsaw")
  // state: airQuality
  // state: forecast

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`)
        const json = await response.json()
        return json
      } catch (err){
        console.log(err)
      }
    }

    const fetchAirQuality = async (lon:any, lat:any) => {
      try {
        const airQuality = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        const json = await airQuality.json()
        return json
      } catch (err) {
        console.log(err)
      }
    }

    const fetchForecastData = async (lon:any, lat:any) => {
      try {
        const forecastData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        const json = await forecastData.json()
        return json
      } catch (err) {
        console.log(err)
      }
    }

    const fetchData = async () => {
      const weather = await fetchWeather()
      const airQuality = await fetchAirQuality(weather.coord.lon, weather.coord.lat)
      const forecastData = await fetchForecastData(weather.coord.lon, weather.coord.lat)
      setWeather(weather)
      setAirQuality(airQuality)
      setForecast(forecastData)
    }

    fetchData()

  }, [location])
  return (
    
    <Suspense fallback={<Loading/>}>

      <WeatherContext.Provider value={{weather: weather, forecast: forecast, airQuality}}>
        <SearchBarContext.Provider value={{location, setLocation}}>
           <div className="App">
          <AppContainer/>
          </div>
        </SearchBarContext.Provider>
     
      </WeatherContext.Provider>
    </Suspense>
    
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}


export default App;
