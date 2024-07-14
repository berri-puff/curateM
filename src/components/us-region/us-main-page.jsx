import { useEffect, useState } from "react"
import { getUsArtworks } from "../../../utils/api"

const USRegion = () =>{
    const [usArtworks, setUsArtworks] = useState([])
    const [artCategory, setArtCategory] = useState([])

    useEffect(()=>{
        getUsArtworks().then((results)=>{
            setUsArtworks(results.data)
        })
    }, [])
    console.log(usArtworks[0])
    return <h1>This is the us region all pages with drop down category selection </h1>
}

export default USRegion