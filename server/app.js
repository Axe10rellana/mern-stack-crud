//importaciones
import express from "express";
import fileUpload from "express-fileupload";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import postRoutes from "./routes/posts.routes.js";

//variables
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);
app.use(express.static(join(__dirname, "../client/build")));

//routes
app.use(postRoutes);
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "../client/build/index.html"));
});

export { app };
