import { useEffect, useState } from "react"
import { getUsArtworks } from "../../../utils/api"
import { Link } from "react-router-dom"

const USRegion = () =>{
    const [usArtworks, setUsArtworks] = useState([])
    const [artCategory, setArtCategory] = useState([])
    const [minimum, setMinimum] = useState(0)
    const [maximum, setMaximum] = useState(19)
    const [error, setError] = useState([null])
    const [loading, setLoading] = useState(false)
  
    useEffect(()=>{
        setLoading(true)
        getUsArtworks().then((results)=>{
            setUsArtworks(results.data)
            setLoading(false)
        }).catch((err) =>{
            console.log(err)
            setLoading(false)
            setError(err)
        })
    }, [])

  
 const filteredArtworks = usArtworks.filter((artwork, index) => index >= minimum && index <= maximum);
    const handleNextBatchBtn = () =>{
    setMinimum((currentMin)=> currentMin += 20)
    setMaximum((currentMax)=> currentMax += 20)
  

}
const handlepreviousBatchBtn = () =>{
    setMinimum((currentMin)=> currentMin -= 10)
    setMaximum((currentMax)=> currentMax -= 10)
}

if (loading) {
    return <h1>Currently Loading</h1>
}
else if (error && usArtworks.length === 0) {
return <h1>opps, something went wrong, {error.message}</h1>
}
else {


return (
    <article>
         <h1>This is the us region all pages with drop down category selection </h1>
        
         {filteredArtworks.map((artwork) =>{
           const imageUrl = artwork?.alternate_images[0]?.print?.url
            return (
                  <Link key={artwork.id} to={`/us/${artwork.id}`}>
             <ol>
                   <li>{artwork.title}</li>
                   {imageUrl?  <img src={imageUrl} width={200} height="auto"></img>: <h3>No image</h3>}
                  

                <li>By  {artwork.creators.length !=0? <span>{artwork.creators[0].description}</span> : <span>Unknown</span>}</li>
                </ol>
        
            </Link>
            )
            
         })}
       
          <button aria-label="previous batch" onClick={()=>{handlepreviousBatchBtn()}}>Previous</button>
            <button aria-label="Next batch" onClick={()=>{handleNextBatchBtn()}}>Next</button>      
    </article>
   )
}
}

export default USRegion