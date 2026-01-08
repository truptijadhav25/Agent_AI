// src/pages/Landing.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Landing.css"; // same CSS file

const Landing = () => {
  const navigate = useNavigate();

  const goToChat = () => navigate("/chat");
  const goToLogin = () => navigate("/login");
  const goToSignup = () => navigate("/signup");

  return (
    <div className="login-container"> {/* use existing CSS */}
      <div className="login-card">
        <h1 className="login-title">Business Chatbot System</h1>
        <p className="login-subtitle">
          Smart chatbot to interact with customers and generate business leads.
        </p>

        <div className="button-group" style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="signin-btn" onClick={goToChat}>
            Start Chat
          </button>
          <button className="google-btn" onClick={goToLogin}>
            Admin Login
          </button>
          <button className="google-btn" onClick={goToSignup}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
