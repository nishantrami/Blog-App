import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    };

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
                                to="/home"
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
                        {isLoggedIn ? (
                            <li className="nav-item">
                                <a
                                    onClick={handleLogout}
                                    className="nav-links"
                                    style={{ cursor: 'pointer' }}
                                >
                                    Logout
                                </a>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => `nav-links ${isActive ? 'active' : ''}`}
                                >
                                    Login
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
