import { useContext, useState } from "react"
import { SearchBarContext } from "../../context/SearchBarContext"



export function SearchBar () {
    const {location, setLocation} = useContext(SearchBarContext)
    const [inputValue, setInputValue] = useState<string>("") 
    return(        
        <div className="searchBard">            
            <input className="input" value={inputValue} onChange={(event)=> setInputValue(event.target.value)}></input>
            <button className="button" onClick={() => setLocation(inputValue)}>Search</button>
        </div>
    )
}