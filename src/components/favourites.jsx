import { useContext, useState } from "react"
import { FavouriteContext } from "../context/faves-context"


const Favourites = () =>{
    const { faves } = useContext(FavouriteContext)

console.log(faves, 'anything?')
    return <h1>This is favourite artwork page which will contain
    </h1>
}

export default Favourites