import { Suspense, useEffect, useState } from 'react';
import './App.css';
import { WeatherContext } from './context/WeatherContext';
import { SearchBarContext } from './context/SearchBarContext';
import { AppContainer } from './components/AppContainer/AppContainer';

const API_KEY = process.env.REACT_APP_API_KEY
function App() {
  const [weather, setWeather] = useState({})
  const [airQuality, setAirQuality] = useState({})
  const [forecast, setForecast] = useState({})
  const [location, setLocation] = useState({selected: "Warsaw", found: "Warsaw"})
  const [locationDetected, setLocationDetected] = useState({lon: "21.0118", lat: "52.2298"})
  // state: airQuality
  // state: forecast

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


  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location.selected}&appid=${API_KEY}`)
        const json = await response.json()
        if(json.cod !== 200){
          alert("City not found")
          throw Error("City not found")
        } else {
          setLocation((prev:any) => ({...prev, found: location.selected}))
          return json
        }
      } catch (err){
        console.log(err)
      }
    }

    const fetchData = async () => {
      try {
        const weather = await fetchWeather()
        const airQuality = await fetchAirQuality(weather.coord.lon, weather.coord.lat)
        const forecastData = await fetchForecastData(weather.coord.lon, weather.coord.lat)
        setWeather(weather)
        setAirQuality(airQuality)
        setForecast(forecastData)  
      } catch(err) {
        console.log(err)
      }
      }

    fetchData()

  }, [location.selected])

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lon=${locationDetected.lon}&lat=${locationDetected.lat}&appid=${API_KEY}`)
        const json = await response.json()
        if(json.cod !== 200){
          alert("City not found")
          throw Error("City not found")
        } else {
          setLocation((prev:any) => ({found:json.name, selected:json.name}))
          return json
        }
      } catch (err){
        console.log(err)
      }
    }

    const fetchData = async () => {
      try {
        const weather = await fetchWeather()
        const airQuality = await fetchAirQuality(weather.coord.lon, weather.coord.lat)
        const forecastData = await fetchForecastData(weather.coord.lon, weather.coord.lat)
        setWeather(weather)
        setAirQuality(airQuality)
        setForecast(forecastData)  
      } catch(err) {
        console.log(err)
      }
      }

    fetchData()

  }, [locationDetected])

  return (
    
    <Suspense fallback={<Loading/>}>

      <WeatherContext.Provider value={{weather: weather, forecast: forecast, airQuality}}>
        <SearchBarContext.Provider value={{location, setLocation, locationDetected, setLocationDetected}}>
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
