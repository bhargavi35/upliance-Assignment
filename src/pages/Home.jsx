import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Box, Typography, Paper } from "@mui/material";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Redirect to login form if the user is not logged in
  useEffect(() => {
    if (!user) {
      navigate("/form");
    }
  }, [user, navigate]);

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
        sx={{
          p: 4,
          borderRadius: 3,
          textAlign: "center",
          // maxWidth: 500,
          width: "80%",
          position: "relative",
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight="bold">
          React Project Assignment
        </Typography>
        {/* Logout Button */}
        {user && (
          <Button
            onClick={logout}
            variant="contained"
            color="error"
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
            }}
          >
            Logout
          </Button>
        )}

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {user ? (
            <>
              <Typography variant="h5" gutterBottom>
                Welcome, {user.name}!
              </Typography>
              <Button component={Link} to="/dashboard" variant="contained">
                Dashboard
              </Button>
              <Button component={Link} to="/counter" variant="contained">
                Counter
              </Button>
              <Button
                component={Link}
                to="/editor"
                variant="contained"
                color="success"
              >
                Rich Text Editor
              </Button>
            </>
          ) : (
            <>
              <Button component={Link} to="/form" variant="contained">
                Sign Up
              </Button>
            </>
          )}
        </Box>
      </Paper>
    </Box>
  );
}

export default Home;
