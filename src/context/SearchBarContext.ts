import { createContext } from "react";

type SearchBarContextType = {
    location: String,
    setLocation: Function
}

export const SearchBarContext = createContext<SearchBarContextType>({location: "Warsaw", setLocation: () => {}})