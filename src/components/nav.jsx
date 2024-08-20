import { Link } from "react-router-dom";
import { PiPaintBrushHouseholdFill } from "react-icons/pi";


const Navigation = () => {
  return (
    <nav id="nav-bar" className="navbar" aria-label="menu" role="navigation">
      <div id='nav-items'className="navbar-item is-hoverable p-3">
       Navigation <PiPaintBrushHouseholdFill />
        
        <div className="navbar-dropdown">
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
