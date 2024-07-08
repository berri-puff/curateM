import { useState, createContext, useContext } from "react";

export const FavouriteContext = createContext()

export const FavouriteProvider = (props) =>{
    const [faves, setFaves] = useState([1,2,3])
return (
    <FavouriteContext.Provider value={{faves, setFaves}}>
        {props.children}
    </FavouriteContext.Provider>)
}

