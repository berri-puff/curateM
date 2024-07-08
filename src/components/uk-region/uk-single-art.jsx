import { useState, useEffect, useContext } from "react"
import { FavouriteContext } from "../../context/faves-context"
const UKSingleArt = () =>{
    const [ukSingleArtwork, setUkSingleArtwork] = useState([])
    const {faves, setFaves} = useContext(FavouriteContext)
    //use params here to get the artwork id 
    return <h1>This will contain a single piece of art once user clicks on it/interacts
        may also have some suggested art via artist names 
        {faves}
    </h1>
}

export default UKSingleArt