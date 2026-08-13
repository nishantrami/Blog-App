import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <span className="logo-icon">✍️</span>
                    <span className="logo-text">InkFlow<span className="logo-dot">.</span></span>
                </Link>
                <div className="nav-actions">
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) => `nav-links ${isActive ? 'active' : ''}`}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/createPost"
                                className={({ isActive }) => `nav-links ${isActive ? 'active' : ''}`}
                            >
                                Create Post
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
