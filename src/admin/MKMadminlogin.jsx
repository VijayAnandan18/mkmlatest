import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getApps, initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons from react-icons
import "./MKMadminlogin.css";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuI4z1Eq1Na-a7pRapholyTmRfC9D-pkY",
  authDomain: "mkmthangamaligai-a4e5c.firebaseapp.com",
  projectId: "mkmthangamaligai-a4e5c",
  storageBucket: "mkmthangamaligai-a4e5c.firebasestorage.app",
  messagingSenderId: "999444851582",
  appId: "1:999444851582:web:177cf17fb7103257c9212f",
  measurementId: "G-R7ZSYLF51Y"
};

// Initialize Firebase only if not already initialized
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const db = getFirestore(app);

const MKMadminlogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const docRef = doc(db, "login", "6LTTeORSPCii7YOOlgWu"); // Firestore document reference
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const { username: storedUsername, password: storedPassword } = docSnap.data();

        if (username === storedUsername && password === storedPassword) {
          navigate("/mkmadmin"); // Redirect to admin page
        } else {
          setError("Invalid username or password.");
        }
      } else {
        setError("Login credentials not found.");
      }
    } catch (error) {
      setError("Error connecting to the server. Please try again later.");
    }
  };

  return (
    <div className="login-container-mkmadmin" style={{ backgroundImage: "url(/assets/contactbg.jpg)" }}>
      <div className="login-form-mkmadmin">
        <img src="assets/spinnerbg.png" style={{ width: "270px", height: "60px" }} alt="Logo" />
        <h2 className="login-heading-mkmadmin">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group-mkmadmin">
            <label className="label-mkmadmin">Username</label>
            <input
              type="text"
              className="input-mkmadmin"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group-mkmadmin">
            <label className="label-mkmadmin">Password</label>
            <div className="password-wrapper">
              <input
                type={passwordVisible ? "text" : "password"}
                className="input-mkmadmin"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="password-visibility-icon"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>
          {error && <p className="error-message-mkmadmin">{error}</p>}
          <button type="submit" className="login-btn-mkmadmin">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default MKMadminlogin;
