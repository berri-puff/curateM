import { useState, useEffect, useContext } from "react"
import { FavouriteContext } from "../../context/faves-context"
import { useParams } from "react-router-dom"
import { getsUkArtworkById } from "../../../utils/api"
const UKSingleArt = () =>{
    const [ukSingleArtwork, setUkSingleArtwork] = useState([])
    const {faves, setFaves} = useContext(FavouriteContext)
    const [artCategory, setArtCategory] = useState([])
    const [loadingState, setLoadingState] = useState([false])
    //use params here to get the artwork id 

const {artId} = useParams()

useEffect(() =>{
    setLoadingState(true)
    getsUkArtworkById(artId).then((result)=>{
setUkSingleArtwork(result)
setLoadingState(false)
    }).catch((error) =>{

    })
}, [])
console.log(ukSingleArtwork)

if (loadingState) {
    return <h1>Loading...</h1>
}else return ( <article>
        <h1>This will contain a single piece of art once user clicks on it/interacts
        may also have some suggested art via artist names 
        {faves}
      
    </h1>

{ukSingleArtwork.titles.length != 0? <h2>{ukSingleArtwork.titles[0].title} </h2>: <h2>Untitled Artwork</h2>}
    </article>
    )
    
}

export default UKSingleArt