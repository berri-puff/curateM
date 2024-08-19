import { Link } from "react-router-dom";
import { PiPaintBrushHouseholdFill } from "react-icons/pi";


const Navigation = () => {
  return (
    <nav id="nav-bar" className="navbar" aria-label="menu" role="navigation">
      <div className="navbar-item is-hoverable">
        <a id="nav-items">Navigation <PiPaintBrushHouseholdFill />
        </a>
        <div id="nav-background"className="navbar-dropdown">
          <Link to="/uk" aria-hidden="true" id="nav-items"className="navbar-item">
            UK Region
          </Link>
          <Link to="/us" aria-hidden="true" id="nav-items" className="navbar-item">
            USA Region
          </Link>
          <Link to="/exhibits" aria-hidden="true" id="nav-items" className="navbar-item">
            Exhibits
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
