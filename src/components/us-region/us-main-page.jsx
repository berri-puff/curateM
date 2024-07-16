import { useEffect, useState } from "react"
import { getUsArtworks } from "../../../utils/api"
import { Link } from "react-router-dom"

const USRegion = () =>{
    const [usArtworks, setUsArtworks] = useState([])
    const [artCategory, setArtCategory] = useState([])

    useEffect(()=>{
        getUsArtworks().then((results)=>{
            setUsArtworks(results.data)
        })
    }, [])

    let startingNum = 20
    const moreArtworks = () =>{
       getUsArtworks(startingNum).then(({data})=>{
      
setUsArtworks(data) 
       })
   startingNum = startingNum + 10 
console.log(startingNum, 'in main after setting ') }

return (
    <article>
         <h1>This is the us region all pages with drop down category selection </h1>

         {usArtworks.map((artwork) =>{
           const imageUrl = artwork?.alternate_images[0]?.print?.url
            return (
                  <Link key={artwork.id} to={`us/${artwork.id}`}>
             <ol>
                   <li>{artwork.title}</li>
                   {imageUrl?  <img src={imageUrl} width={200} height="auto"></img>: <h3>No image</h3>}
                  

                   <li>By: {artwork.creators[0].description}</li>
                </ol>
        
            </Link>
            )
            
         })}
          <button aria-label="load more work" onClick={()=>{moreArtworks()}}>More</button>
               
    </article>
   )
}

export default USRegion