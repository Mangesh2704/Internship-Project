import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"; 

const Login = () => {
  // State variables for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check email and password here
    console.log("Email:", email);
    console.log("Password:", password);
    // Add your authentication logic here
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-heading">Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
        <br />
        <span>Not registered yet? </span>
        <Link to="/signup">Sign Up</Link>
      </form>
    </div>
  );
};

export default Login;
