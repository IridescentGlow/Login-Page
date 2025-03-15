import { Link } from "react-router-dom";
import "./styles/LoginPage.css";
import { AuthContext } from "./AuthProvider";
import React, { useContext } from "react";

function Home() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      {isLoggedIn ? (
        <div className="welcome-back">
          <h3>Welcome Back!</h3>
        </div>
      ) : (
        <div></div>
      )}
      <div className="wrapper">
        <h1 className="logged-in">Home</h1>
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
    </>
  );
}

export default Home;
