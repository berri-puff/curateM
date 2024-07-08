import { useState, useContext, useEffect } from "react"
import { FavouriteContext } from "../../context/faves-context"

const USSingleArt = () =>{
    const [usSingleArtwork, setUsSingleArtwork] = useState([])
    const {faves, setFaves} = useContext(FavouriteContext)
    return <h1>
        This will contain one single us art piece and their information 
    </h1>
}

export default USSingleArt