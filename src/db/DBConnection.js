import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
let DBString = process.env.DBString;
console.log(DBString);

const connectDB = async () => {
  try {
    await mongoose.connect(DBString);
    console.log("DB Connected Successfully");
  } catch (error) {
    console.error("Connection fail error ", error);
    process.exit(1);
  }
};

export default connectDB;
