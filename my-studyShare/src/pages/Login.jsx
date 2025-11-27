

import React from "react";
import "../styles/auth.css";

const Login = ({ onNavigate }) => {
  return (
    <div className="auth-container">
      {/* Left Side */}
      <div className="auth-left">
        <h1>Every big idea starts with a small step</h1>
      </div>

      {/* Right Side */}
      <div className="auth-right">
        <div className="auth-card">
          <h2>Login</h2>

          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />

          <button className="login-btn">Login</button>

          <p>
            Don’t have an account?{" "}
            <span onClick={() => onNavigate("signup")}>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
