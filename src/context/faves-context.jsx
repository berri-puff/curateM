import { useState, createContext, useContext } from "react";

export const FavouriteContext = createContext()

export const FavouriteProvider = (props) =>{
    const [faves, setFaves] = useState([])
return (
    <FavouriteContext.Provider value={{faves, setFaves}}>
        {props.children}
    </FavouriteContext.Provider>)
}

