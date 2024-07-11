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
{ukSingleArtwork.accessionYear}
<p>By: {ukSingleArtwork.artistMakerPerson.length != 0? <span>{ukSingleArtwork.artistMakerPerson[0].name["text"]}</span> : <span>Unknown</span>}</p>

<h3>About: </h3>
{ukSingleArtwork.summaryDescription? <p>{ukSingleArtwork.summaryDescription}</p> : <p>{ukSingleArtwork.briefDescription}</p> }

<h3>History: </h3>
{ukSingleArtwork.objectHistory != "" ? <p>{ukSingleArtwork.objectHistory}</p> : null}
Made in {ukSingleArtwork.placesOfOrigin.length != 0 ? <span>{ukSingleArtwork.placesOfOrigin[0].place["text"]}</span> : <span>Unknown</span>}
   <p>This artwork was recorded on <span>{ukSingleArtwork.recordCreationDate}</span> in V7A Collection system.</p>

   <h3>Want to find it? </h3>
   <p>It is currently kept in Victoria and Albert Museum</p>
   <ul>
   <li>BOX: {ukSingleArtwork.galleryLocations[0].box}</li>
   <li>CASE: {ukSingleArtwork.galleryLocations[0].case}</li>
   <li>SHELF: {ukSingleArtwork.galleryLocations[0].shelf}</li>
   </ul>
   </article>

    )
    
}

export default UKSingleArt