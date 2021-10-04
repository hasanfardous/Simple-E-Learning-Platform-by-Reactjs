import logo from '../../assets/elearning-logo.jpg';
import { NavLink } from "react-router-dom";
import './Header.css';

function Header() {
    const selected = {
        backgroundColor: 'black',
        color: 'gold'
    };

  return (
    <div className="header">
      <img src={logo} alt="elearning logo" />
        <nav>
        <ul>
            <li>
              <NavLink to="/home" activeStyle={selected}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={selected}>About</NavLink>
            </li>
            <li>
              <NavLink to="/services" activeStyle={selected}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeStyle={selected}>Contact</NavLink>
            </li>
        </ul>
        </nav>
    </div>
    );
  }
  
export default Header;