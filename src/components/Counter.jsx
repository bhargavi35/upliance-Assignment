import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button, Box, Typography, Paper } from "@mui/material";

function Counter() {
  const [count, setCount] = useState(0);

  const backgroundSpring = useSpring({
    backgroundColor: `rgba(0, 100, 255, ${count / 10})`,
  });

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
        elevation={4}
        sx={{ p: 4, borderRadius: 3, textAlign: "center", minWidth: 320 }}
      >
        <animated.div
          style={{ ...backgroundSpring, padding: "20px", borderRadius: "10px" }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Counter: {count}
          </Typography>
          <Box mt={2} display="flex" gap={2} justifyContent="center">
            <Button
              onClick={() => setCount(count + 1)}
              variant="contained"
              color="primary"
            >
              +
            </Button>
            <Button
              onClick={() => setCount(count - 1)}
              variant="contained"
              color="secondary"
            >
              -
            </Button>
            <Button
              onClick={() => setCount(0)}
              variant="contained"
              color="error"
            >
              Reset
            </Button>
          </Box>
        </animated.div>
      </Paper>
    </Box>
  );
}

export default Counter;
