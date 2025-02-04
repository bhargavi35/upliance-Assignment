import React, { useState } from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SignupForm from "./SignupForm"; // Import Signup Form
import LoginForm from "./LoginForm"; // Import Login Form

function UserForm() {
  const [isLogin, setIsLogin] = useState(true); // To toggle between Login and Signup
  const navigate = useNavigate();

  const handleSwitchForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "#1a1a1a",
      }}
    >
      <Paper
        elevation={3}
        sx={{ p: 4, borderRadius: 3, maxWidth: 400, width: "90%" }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
        >
          {isLogin ? "Login" : "Sign Up"}
        </Typography>

        {/* Render either Signup or Login form based on the state */}
        {isLogin ? <LoginForm /> : <SignupForm />}
      
        {/* Showing Login and Sign Up text side by side */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
            marginTop: 2,
          }}
        >
          <Typography
            onClick={handleSwitchForm}
            sx={{
              cursor: "pointer",
              fontWeight: isLogin ? "bold" : "normal",
              color: isLogin ? "primary.main" : "text.secondary",
            }}
          >
            Login
          </Typography>
          <Typography
            onClick={handleSwitchForm}
            sx={{
              cursor: "pointer",
              fontWeight: !isLogin ? "bold" : "normal",
              color: !isLogin ? "primary.main" : "text.secondary",
            }}
          >
            Sign Up
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default UserForm;
