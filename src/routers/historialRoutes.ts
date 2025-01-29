import { Router } from "express";
import {
  crearHistorial,
  obtenerHistorialPorIdUsuario,
  borrarHistorialPorIdHistorial
} from '../controllers/historialController';

const historialRouter = Router();

historialRouter.post('/historial', crearHistorial);
historialRouter.get('/historial/:id', obtenerHistorialPorIdUsuario);
historialRouter.delete('/historial/:id', borrarHistorialPorIdHistorial);

export default historialRouter;