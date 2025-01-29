import { Router } from "express";
import { 
  obtenerLibros, 
  obtenerLibroPorId 
} from "../controllers/libroController";

const libroRouter = Router();

libroRouter.get("/libros", obtenerLibros);
libroRouter.get("/libros/:id", obtenerLibroPorId);

export default libroRouter;