import { useContext, useState } from "react"
import { SearchBarContext } from "../../context/SearchBarContext"
import "./SearchBar.css"

export function SearchBar() {
    const { location, setLocation, setLocationDetected, locationDetected } = useContext(SearchBarContext)
    const [inputValue, setInputValue] = useState<string>("")
    return (
        <div className="search-bar">
            
                <input className="input" value={inputValue} onChange={(event) => setInputValue(event.target.value)} placeholder="Search..."></input>
            
            <div className="button-box">
                <button className="button" onClick={() => setLocation((prev: any) => ({ ...prev, selected: inputValue }))}>Search</button>
                <button className="button" onClick={() => {
                    navigator.geolocation.getCurrentPosition((p) => setLocationDetected({ lon: p.coords.longitude, lat: p.coords.latitude }))
                    setInputValue("")
                }
                }>Current Location</button>
            </div>
        </div>
    )
}
