//importaciones
import mongoose from "mongoose";
import { MONGODB_URI } from "../config/config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.error(error);
  }
};

mongoose.connection.on("connected", () => {
  console.log(
    "Se ha connectado a la base de datos: ",
    mongoose.connection.db.databaseName
  );
});
