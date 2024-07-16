import { useState, useContext, useEffect } from "react"
import { FavouriteContext } from "../../context/faves-context"
import { useParams } from "react-router-dom"
import { getSingleUsWork } from "../../../utils/api"
import { ExhibitContext } from "../../context/exhibit-context"

const USSingleArt = () =>{
    const [usSingleArtwork, setUsSingleArtwork] = useState([])
    const {faves, setFaves} = useContext(FavouriteContext)
    const {exhibit, setExhibit} = useContext(ExhibitContext)
 const {artId} = useParams()
 console.log(artId, 'in the us singel')
useEffect(()=>{
getSingleUsWork(artId).then((result) =>{
    setUsSingleArtwork(result.data)
    console.log(usSingleArtwork)
})
}, [])
    return <h1>
        This will contain one single us art piece and their information 
    </h1>
}

export default USSingleArt