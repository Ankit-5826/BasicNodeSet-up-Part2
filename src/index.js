import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/DBConnection.js";

// Env Path setting
dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error in db `, error);
    process.exit(1)
  });
