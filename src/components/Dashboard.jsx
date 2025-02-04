// import React from "react";
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
// import { Line } from "react-chartjs-2";

// // ✅ Register necessary Chart.js components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May"],
//   datasets: [
//     {
//       label: "Users",
//       data: [10, 20, 30, 25, 35],
//       borderColor: "blue",
//       backgroundColor: "rgba(0, 0, 255, 0.2)",
//       fill: true,
//     },
//   ],
// };

// const options = {
//   responsive: true,
//   maintainAspectRatio: false,
// };

// function Dashboard() {
//   return (
//     <div style={{ height: "400px", width: "600px", margin: "auto" }}>
//       <Line data={data} options={options} />
//     </div>
//   );
// }

// export default Dashboard;

// **************
import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Box, Paper, Typography } from "@mui/material";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Users",
      data: [10, 20, 30, 25, 35],
      borderColor: "blue",
      backgroundColor: "rgba(0, 0, 255, 0.2)",
      fill: true,
      tension: 0.4, // Smooth curve
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

function Dashboard() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current;
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

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
          maxWidth: 700,
          width: "90%",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Dashboard
        </Typography>
        <Box sx={{ height: 400 }}>
          <Line ref={chartRef} data={data} options={options} />
        </Box>
      </Paper>
    </Box>
  );
}

export default Dashboard;
