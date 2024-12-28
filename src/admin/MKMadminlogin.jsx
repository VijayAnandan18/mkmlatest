import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // to navigate after login
import { firebaseApp } from "../firebaseConfig"; // import firebase config
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./MKMadminlogin.css"; // import CSS for styling

const MKMadminlogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory(); // to redirect after successful login

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const correctUsername = "mkmthangamaligai";
    const correctPassword = "mkm@123";
    
    // Check if username and password match
    if (username === correctUsername && password === correctPassword) {
      // If credentials are correct, redirect to another page (e.g., dashboard)
      history.push("/dashboard");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default MKMadminlogin;
