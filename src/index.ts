import express from "express";
import usuarioRouter from "./routers/usuarioRoutes";
import libroRouter from "./routers/libroRoutes";
import historialRouter from "./routers/historialRoutes";

const app = express();
const cors = require('cors');
const PORT = 3000;

const corsOptions = {
  origin: 'https://libro-click-frontend.vercel.app/', // Reemplaza con el dominio de tu frontend
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type'
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api", usuarioRouter);
app.use("/api", libroRouter);
app.use("/api", historialRouter);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
