import { createContext } from "react";

type WeatherContextType = {
    weather: any,
    airQuality: Object,
    forecast: Object,
}

export const WeatherContext = createContext<WeatherContextType>({weather: {}, airQuality: {}, forecast: {}})