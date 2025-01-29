import express from "express";
import usuarioRouter from "./routers/usuarioRoutes";
import libroRouter from "./routers/libroRoutes";
import historialRouter from "./routers/historialRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api", usuarioRouter);
app.use("/api", libroRouter);
app.use("/api", historialRouter);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
