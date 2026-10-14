import { Link } from "react-router-dom";
import sigil from "../assets/Candle-white.svg";
import "../styles/Header.css";

// Define an array of navigation links with their names and paths
const navLinks = [
    { label: "Home", path: "/" },
    { label: "Art", path: "/art" },
    { label: "Novel", path: "/novel" },
    { label: "AI", path: "/ai" }
];

function Header() {

    return (
        // Header template with navigation links
        <nav className="header navbar" data-bs-theme="light">
            <div className="container-fluid">
                <Link to="/">
                    <img src={sigil} alt="Candle Emblem" width={50} id="header_logo"/>
                </Link>

                <ul className="menu navbar-nav flex-row gap-4">
                    {navLinks.map((item) => (
                        <li key={item.label} className="nav-item">
                            <Link to={item.link} className="nav-link">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>

    );
}

export default Header;