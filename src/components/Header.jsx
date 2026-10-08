import { Link } from "react-router-dom";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Art", path: "/art" },
    { name: "Novel", path: "/novel" },
    { name: "AI", path: "/ai" }
];

function Header() {

    return (
        // Header template with navigation links
        <header className="navbar container-fluid">
            <h1 className="navbar-brand">
                <Link to="/" className="nav-link">Candles</Link>
            </h1>
            <nav>
                <ul className="nav">
                    {navLinks.map((link) => (
                        <li className="nav-item" key={link.name}>
                            <Link to={link.path} className="nav-link">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;