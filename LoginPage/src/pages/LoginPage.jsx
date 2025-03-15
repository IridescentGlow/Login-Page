import React, { useContext } from "react"
import { Link } from "react-router-dom";
import "./styles/LoginPage.css";
import { AuthContext } from "./AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import {
  faGoogle,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function LoginPage() {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <>
      <section>
        {isLoggedIn ? (
          <div className="wrapper">
            <h1 className="logged-in">You are now logged in</h1>
            <nav className="nav">
              <ul className="nav-list">
                <Link to="/Home" className="nav-link">
                  Home
                </Link>
                <Link to="/about" className="nav-link">
                  About
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </ul>
            </nav>
          </div>
        ) : (
          <div className="wrapper">
            <form onSubmit={handleLogin}>
              <h1>Login</h1>
              <div className="login-options">
                <a>
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a>
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
              <div className="input-box">
                <input type="text" placeholder="Username" required />
                <FontAwesomeIcon className="icon" icon={faUser} />
              </div>
              <div className="input-box">
                <input pattern=".{6,}" title="Password must be atleast 6 characters long!" type="password" placeholder="Password" required />
                <FontAwesomeIcon className="icon" icon={faKey} />
              </div>

              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#">Forgot password?</a>
              </div>
              <button type="submit">login</button>

              <div className="register-link">
                <p>
                  Don't have an account? <a href="#">Register now!</a>
                </p>
              </div>
            </form>
          </div>
        )}
      </section>
    </>
  );
}

export default LoginPage;
