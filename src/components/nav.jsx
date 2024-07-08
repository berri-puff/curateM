import { Link} from "react-router-dom"

const Navigation = () =>{
    return <nav>
        <Link to="/uk">UK Region</Link>
        <Link to="/us">USA Region</Link>
        <Link to="/favourites">Favourites</Link>
        <Link to="/exhibits">Exhibits</Link>
        <input type="text" />
    </nav>
}

export default Navigation