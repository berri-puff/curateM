import { useState, useEffect, useContext } from "react"
import { FavouriteContext } from "../../context/faves-context"
import { useParams } from "react-router-dom"
import { getsUkArtworkById } from "../../../utils/api"
const UKSingleArt = () =>{
    const [ukSingleArtwork, setUkSingleArtwork] = useState([])
    const {faves, setFaves} = useContext(FavouriteContext)
    const [artCategory, setArtCategory] = useState([])
    //use params here to get the artwork id 

const {artId} = useParams()

useEffect(() =>{
    getsUkArtworkById(artId).then((result)=>{
setUkSingleArtwork(result)
console.log(ukSingleArtwork)
    }).catch((error) =>{

    })
}, [])

    return <h1>This will contain a single piece of art once user clicks on it/interacts
        may also have some suggested art via artist names 
        {faves}
    </h1>
}

export default UKSingleArt