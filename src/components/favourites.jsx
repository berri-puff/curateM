import { useContext, useState } from "react"
import { FavouriteContext } from "../context/faves-context"


const Favourites = () =>{
    const { faves } = useContext(FavouriteContext)
    return <h1>This is favourite artwork page which will contain {faves}
    </h1>
}

export default Favourites