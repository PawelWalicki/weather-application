import { createContext } from "react";

type WeatherContextType = {
    weather: any,
    airQuality: any,
    forecast: any,
}

export const WeatherContext = createContext<WeatherContextType>({weather: {}, airQuality: {}, forecast: {}})