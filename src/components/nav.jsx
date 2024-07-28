import { Link } from "react-router-dom";
import { PiPaintBrushHouseholdFill } from "react-icons/pi";


const Navigation = () => {
  return (
    <nav className="navbar" aria-label="menu" role="navigation">
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">Navigation <PiPaintBrushHouseholdFill />
        </a>
        <div className="navbar-dropdown">
          <Link to="/uk" aria-hidden="true" className="navbar-item">
            UK Region
          </Link>
          <Link to="/us" aria-hidden="true" className="navbar-item">
            USA Region
          </Link>
          <Link to="/exhibits" aria-hidden="true" className="navbar-item">
            Exhibits
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
