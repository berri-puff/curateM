import { useState, useContext, useEffect } from "react"
import { FavouriteContext } from "../../context/faves-context"
import { useParams } from "react-router-dom"

const USSingleArt = () =>{
    const [usSingleArtwork, setUsSingleArtwork] = useState([])
    const {faves, setFaves} = useContext(FavouriteContext)
    const usID = useParams()
    console.log(usID, 'art iddd')
    return <h1>
        This will contain one single us art piece and their information 
    </h1>
}

export default USSingleArt