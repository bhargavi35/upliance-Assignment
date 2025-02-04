import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Stack } from "@mui/material";
import { useAuth } from "../context/AuthContext";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/"); // Redirect to home if already logged in
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { email, phone, name };
    localStorage.setItem("userData", JSON.stringify(newUser));
    login(newUser);
    navigate("/"); // Redirect to home after successful signup
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
        />
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
          Sign Up
        </Button>
      </Stack>
    </form>
  );
}

export default SignupForm;
