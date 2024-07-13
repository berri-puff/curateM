import { useState, createContext, useContext } from "react";

export const ExhibitContext = createContext()

export const ExhibitProvider = (props) =>{
    const [exhibit, setExhibit] = useState([])
return (
    <ExhibitContext.Provider value={{exhibit, setExhibit}}>
        {props.children}
    </ExhibitContext.Provider>)
}
