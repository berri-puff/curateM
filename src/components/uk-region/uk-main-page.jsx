import { useState, useEffect } from "react"
import { getsRandomUKArtworks } from "../../../utils/api"

const UKRegion = () => {
    const [ukArtworks, setUkArtworks] = useState([])
    const [artCategory, setArtCategory] = useState([])
    const [nextPageClick, setNextPageClick] = useState([false])
    const [previousePageClick, setPreviousPAgeClick] = useState([false])
    useEffect(()=>{
        getsRandomUKArtworks().then((results)=>{
            setUkArtworks(results)
        })
    }, [])

const toNextPage = () =>{
    console.log('clicky click on the next button')
}
const previousPage = () =>{
    console.log("last page off we go!")
}

    return (
        <article>
           <h1>this page will contain all the uk artworks only, calling on the V&A api so far, to add Fitzwilliam later on</h1>
            <h2>When clicking on the image, takes to the single arts page, css when hovered over, display some of the core infromation</h2>
           {ukArtworks.map((artwork)=>{
               return <ol key={artwork.systemNumber}>
                <p>{artwork["_primaryTitle"]}</p>
                <img src={artwork["_images"][  "_primary_thumbnail"]}></img>
                <li >Type: {artwork.objectType}</li>
                <p>By: {artwork["_primaryMaker"]["name"]}</p>
                {/* <p>{artwork["_primaryDate"]}</p> */}
                <p>{artwork["_currentLocation"].displayName}</p>
                </ol>
           })}
          <button aria-label="next page button" onClick={toNextPage}>Next</button>
          <button aria-label="previous page button" onClick={previousPage}>Previous</button>
        </article>
    
    )
    
}

export default UKRegion