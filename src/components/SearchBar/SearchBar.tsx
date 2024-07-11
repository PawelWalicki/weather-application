import { useContext, useState } from "react"
import { SearchBarContext } from "../../context/SearchBarContext"
import "./SearchBar.css"

export function SearchBar () {
    const {location, setLocation} = useContext(SearchBarContext)
    const [inputValue, setInputValue] = useState<string>("") 
    const [currentPosition, setCurrentPosition] = useState<any>("")
    return(        
        <div className="search-bar">            
            <input className="input" value={inputValue} onChange={(event)=> setInputValue(event.target.value)}></input>
            <button className="button" onClick={() => setLocation((prev:any) => ({...prev, selected: inputValue}))}>Search</button>
            <button onClick={()=>navigator.geolocation.getCurrentPosition((p) => setCurrentPosition(p))}>Localization</button>
        </div>
    )
}