import { Response, Request } from "express";
import { libroService } from "../services/libroService";

export const obtenerLibros = async (req: Request, res: Response) => {

  try {
    const libros = await libroService.obtenerLibros();
    res.status(200).json(libros);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener libros" });
  }
}

export const obtenerLibroPorId = async (req: Request, res: Response) => {
  
  const { id } = req.params;

  try {
    const libro = await libroService.obtenerLibroPorId(parseInt(id));
    res.status(200).json(libro);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener libro" });
  }
}