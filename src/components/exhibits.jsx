import { useContext } from "react"
import { ExhibitContext } from "../context/exhibit-context"

const Exhibits = () =>{
    const {exhibit, setExhibit} = useContext(ExhibitContext)
    return <h1>This is the exhibits page where users can hopefully have their saved artworks temporarily hosted here {exhibit}</h1>
}

export default Exhibits