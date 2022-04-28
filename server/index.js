//importaciones
import { connectDB } from "./database/db.js";
import { PORT } from "./config/config.js";
import { app } from "./app.js";

//conexion con la base de datos
connectDB();

//ejecucion del servidor
app.listen(PORT);
console.info(`El servidor esta ejecutandose en el puerto: ${PORT}`);
