import React from "react";
import "../styles/auth.css";

const Signup = ({ onNavigate }) => {
  return (
    <div className="auth-container">
      {/* Left Side */}
      <div className="auth-left">
        <h1>Every big idea starts with a small step</h1>
      </div>

      {/* Right Side */}
      <div className="auth-right">
        <div className="auth-card">
          <h2>Sign Up</h2>

          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <input type="password" placeholder="Confirm Password" />

          <button className="signup-btn">Sign Up</button>

          <p>
            Already have an account?{" "}
            <span onClick={() => onNavigate("login")}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
