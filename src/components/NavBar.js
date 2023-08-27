import { NavLink } from "react-router-dom";
import "../App.css";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faPersonShelter } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className="navbar-container">
      <nav >
      
        <ul >
          <li >
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li >
            <NavLink to="/about" className="nav-link">
              About 
            </NavLink>
          </li>
          <li >
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
  
    </div>
  );
}

export default NavBar;
