import React from "react";
import "./styles/LoginPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import {
  faGoogle,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function LoginPage() {
  <>
    <section>
      <div className="wrapper">
        <form>
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
            <input type="password" placeholder="Password" required />
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
    </section>
  </>;
}

export default LoginPage;
