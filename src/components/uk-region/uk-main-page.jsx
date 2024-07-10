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
  console.log(ukArtworks, 'in the page container')
    return (
        <article>
           <h1>this page will contain all the uk artworks only, calling on the V&A api so far, to add Fitzwilliam later on</h1>
        </article>
    
    )
    
}

export default UKRegion