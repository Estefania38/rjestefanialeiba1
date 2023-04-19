import "./Navbar.css";
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar">
            <h1 className="navbar-logo">PUMA</h1>
            <p className="navbar-link">Calzado</p>
            <p className="navbar-link">Indumentaria</p>
            <Link className="seeCarrito" to={"/Cart"}>🛒</Link>
            </nav>
        </div>        
    );
};

export default Navbar;