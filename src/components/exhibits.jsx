import { useContext } from "react"
import { ExhibitContext } from "../context/exhibit-context"

const Exhibits = () =>{
    const {exhibit} = useContext(ExhibitContext)
    console.log(exhibit, 'showing in the exhibit page')

    if (exhibit.length === 0) {
        return (
            <>
                 <h1>All your temporary artwork will be shown here, it is currently empty though! </h1>
                 <p>Start exploring artworks!</p>
            </>
       )
    }
    else return (
    <article>
        <h1>Your very own curated exhibit!</h1>
        {exhibit.map((artwork) =>{
            if (artwork.hasOwnProperty("systemNumber")) {

                return (<article>
                   {artwork.images.length !=0 ?  <img src={`https://framemark.vam.ac.uk/collections/${artwork.images[0]}/full/600,400/0/default.jpg`} alt={artwork.physicalDescription ? <p>{artwork.physicalDescription}</p> : <p>No description given</p>}></img> : <p>placeholder insert here</p>}  
                   <p>© Victoria and Albert Museum, London</p>
                   <p>ID: {artwork.systemNumber}</p>
                   <p>Found in V&A Museum Collection, on shelf {artwork.galleryLocations[0].shelf}, box {artwork.galleryLocations[0].box}, in case {artwork.galleryLocations[0].case} </p>
                   <p>Contact  <a target="blank" href="https://www.vam.ac.uk/info/contact-us">Victoria and Albert Museum</a> regarding their pieces</p>
                     </article>)
            }
            else {
                
                return (
                    <article>
                         <img src={artwork.images.web.url} alt="No description given"></img>
                         <p>The Cleveland Museum of Art Open Access API</p>
                         <p>ID: {artwork.id}</p>
                         <p>Found in Cleveland Museum of Art, {artwork.department}, {artwork.currentLocation}</p>
                         <p>Contact <a target="blank" href="https://www.clevelandart.org/contact-us">Cleveland Museum of Art </a> regarding their pieces</p>
                    </article>
                )
            }
        })}
    </article>
    )
}

export default Exhibits