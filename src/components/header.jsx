import { Link} from "react-router-dom"
import { GiWoodFrame } from "react-icons/gi";


const Header = ()=>{
    return <Link to="/">
        <h1 id="main-title" className="has-text-centered"> <GiWoodFrame />
        Curate'M</h1>
    </Link>
}

export default Header

