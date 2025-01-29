import { Response, Request } from "express";
import { historialService } from "../services/historialService";

export const crearHistorial = async (req: Request, res: Response) => {
  const { idusuario, idlibro, titulo, estado } = req.body;

  if (!idusuario || !idlibro || !titulo || !estado) {
    res.status(400).json({ error: "Hay datos que faltan" });
    return; 
  }

  try {
    await historialService.crearHistorial(idusuario, idlibro, titulo, estado);
    res.status(201).json({ mensaje: "Historial creado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear historial" });
  }
}

export const obtenerHistorialPorIdUsuario = async (req: Request, res: Response) => {
  
  const { id } = req.params;

  try {
    const historial = await historialService.obtenerHistorialPorId(parseInt(id));
    res.status(200).json(historial);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener historial" });
  }
}

export const borrarHistorialPorIdHistorial = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ error: "Falta el id" });
    return;
  }

  try {
    await historialService.borrarHistorialPorId(parseInt(id));
    res.status(200).json({ mensaje: "Historial borrado" });
  } catch (error) {
    res.status(500).json({ error: "Error al borrar historial" });
  }
}