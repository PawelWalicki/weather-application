import { createContext } from "react";

type SearchBarContextType = {
    location: {selected: string, found: string},
    setLocation: Function,
    locationDetected: {lon: string, lat:string}
    setLocationDetected: Function
}

export const SearchBarContext = createContext<SearchBarContextType>({location: {selected: "Warsaw", found:"Warsaw"}, setLocation: () => {}, locationDetected: {lon: "21.0118", lat: "52.2298"}, setLocationDetected: () => {}})