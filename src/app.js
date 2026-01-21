import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import healthCheckRoute from "./routes/healthCheck.routes.js";
const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://locahost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.get("/", (req, res) => {
  res.send("Hello ankit here");
});
app.get("/User", (req, res) => {
  res.send("User is here");
});

app.use("/api/v1/healthCheck/", healthCheckRoute);
export default app;
