import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/Login/Login";
import HomePage from "./Components/Login/HomePage/HomePage";
import Profile from "./Components/Profile/Profile";
import ProfileEdit from "./Components/Profile/ProfileEdit";
import FloatingButton from "./Generic Components/Card/FloatingButton/FloatingButton";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false); // Replace this with your auth logic

  return (
    <Router>
      {/* Render the FloatingButton only if the user is signed in */}
      {isSignedIn && <FloatingButton />}

      <Routes>
        {/* Route for Login Page */}
        <Route path="/" element={<LoginForm />} />

        {/* Route for Home Page */}
        <Route path="/homepage" element={<HomePage />} />

        {/* Route for Profile */}
        <Route path="/profile" element={<Profile />} />

        {/* Route for Profile Edit */}
        <Route path="/profileEdit" element={<ProfileEdit />} />
      </Routes>
    </Router>
  );
};

export default App;
