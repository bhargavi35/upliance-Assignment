import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { login, user } = useAuth();
  const navigate = useNavigate();

  // Redirect to home if already logged in
  if (user) {
    navigate("/"); // Redirect to home if user is already logged in
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("userData"));

    // Check if user exists in localStorage
    if (savedUser && savedUser.email === email && savedUser.phone === phone) {
      login(savedUser); // Use context to login the user
      navigate("/"); // Redirect to home after successful login
    } else {
      alert("User not found. Please sign up first!"); // Show warning if user doesn't exist
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          type="email"
        />
        <TextField
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
          required
          type="tel"
        />
        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>
      </Stack>
    </form>
  );
}

export default LoginForm;
