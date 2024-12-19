import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import GoogleIcon from "../../albums/Group 1171276158.png";
import Group2 from "../../albums/Group 1171276168.png"; // Update this path if required
// social-media-feed\src\albums\Group 1171276168.png
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";

const LoginForm = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/homepage");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "2rem" }}>
      {/* Main Box */}
      <Box
        sx={{
          width: "360px",
          height: "360px",
          marginTop: "30rem", // Centering the box
          borderRadius: "63px 63px 0px 0px",
          backgroundColor: "#ffffff", // Light grey background
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px", // Adds spacing between items
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
        }}
      >
        <img
          src={Group2}
          alt="Media name"
          style={{ width: "286px", height: "62px", top: "539px", left: "37px" }}
        />

        {/* Google Button */}
        <Button
          variant="contained"
          sx={{
            width: "300px",
            height: "50px",
            borderRadius: "26px",
            backgroundColor: "black",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
          onClick={handleGoogleLogin}
        >
          {/* Google Icon */}
          <img
            src={GoogleIcon}
            alt="Google Icon"
            style={{ width: "18px", height: "18px", marginRight: "8px" }}
          />
          Continue with Google
        </Button>
      </Box>

      {/* Error Message */}
      {error && (
        <Typography
          color="error"
          sx={{ marginTop: "1rem", textAlign: "center" }}
        >
          {error}
        </Typography>
      )}
    </Container>
  );
};

export default LoginForm;
