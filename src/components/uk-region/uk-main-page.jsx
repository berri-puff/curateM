import { useState, useEffect } from "react"
import { getsUKArtworks } from "../../../utils/api"

const UKRegion = () => {
    const [ukArtworks, setUkArtworks] = useState([])
    const [artCategory, setArtCategory] = useState([])
    useEffect(()=>{
        getsUKArtworks().then((results)=>{
            setUkArtworks(results)
        })
    }, [])
  
    return (
        <article>
           <h1>this page will contain all the uk artworks only, calling on the V&A api so far, to add Fitzwilliam later on</h1>
           <p>Notes: Essential information from the results:</p>
           <ul>
            <li>accessionNumber</li>
            <li>ArtistMakerPerson, [0], - association = id, text, -name = id, text</li>
            <li>briefDescription</li>
            <li>Categories</li>
            <li>collectionCode?</li>
            <li>GalleryLocations array</li>
            <li>images</li>
            <li>physicalDescription?</li>
            <li>placeOfOrigin array</li>
            <li>productionDates?</li>
            <li>recordcreation</li>
            <li>summaryDescription</li>
            <li>systemNumber</li>
            <li>techniques array </li>
            <li>titles array, [0], title, type</li>

           </ul>
           {ukArtworks.map((artwork)=>{
               return <li key={artwork.systemNumber}>{artwork["_primaryTitle"]}</li>
           })}
        </article>
    
    )
    
}

export default UKRegion