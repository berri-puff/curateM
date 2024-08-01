import { Link} from "react-router-dom"
import { GiWoodFrame } from "react-icons/gi";
import Navigation from "./nav";


const Header = ()=>{
    return (
        <section className="level">
              <Link to="/">
        <h1 id="main-title" className="has-text-centered level-left"> <GiWoodFrame />
        Curate'M</h1>
    </Link>
    <Navigation className="level-right"/>
        </section>
      
)
}

export default Header

