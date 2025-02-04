import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box, Typography, Paper } from "@mui/material";

function RichTextEditor() {
  const [text, setText] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "#1a1a1a", 
        p: 2, 
      }}
    >
      <Paper
        elevation={6} 
        sx={{
          p: 4,
          borderRadius: 3,
          maxWidth: 800,
          width: "100%",
          bgcolor: "#fff", 
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
        }}
      >
        <Typography variant="h5" gutterBottom fontWeight="bold" color="#333">
          Rich Text Editor
        </Typography>
        <ReactQuill
          value={text}
          onChange={setText}
          style={{
            height: "100%", 
            maxHeight: "300px",
            border: "1px solid #ddd", 
            borderRadius: "10px",
            padding: "10px", 
            fontSize: "16px", 
            overflowY: "auto",
          }}
        />
      </Paper>
    </Box>
  );
}

export default RichTextEditor;
