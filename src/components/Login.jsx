import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    // Static email and password
    const staticEmail = "admin@gmail.com";
    const staticPassword = "admin@123";

    const [credentials, setCredentials] = useState({
        email: staticEmail,
        password: staticPassword,
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Static validation
        if (credentials.email === staticEmail && credentials.password === staticPassword) {
            localStorage.setItem("isLoggedIn", "true");
            navigate("/home");
        } else {
            alert(`Please use the static credentials: ${staticEmail} / ${staticPassword}`);
        }
    };

    return (
        <div className="form-container-simple">
            <form onSubmit={handleSubmit} className="form-card-simple">
                <h2 className="form-title-simple">Login</h2>

                <input
                    type="email"
                    name="email"
                    className="form-input-simple"
                    value={credentials.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                />

                <input
                    type="password"
                    name="password"
                    className="form-input-simple"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                />

                <button type="submit" className="form-button-simple">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
