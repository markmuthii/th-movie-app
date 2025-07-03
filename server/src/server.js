// 1. Routing

// 2. Middleware

// Import express
import express from "express";
// Import cors
import cors from "cors";

// Instantiate express
const app = express();

// Configure cors
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Setup routes (root/home/index route)
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Hello from the API!!!",
  });
});

// Start the server
app.listen(3005);
