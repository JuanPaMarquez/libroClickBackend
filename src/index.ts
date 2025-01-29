import express from "express";
import usuarioRouter from "./routers/usuarioRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api", usuarioRouter);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
