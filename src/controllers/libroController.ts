import { Response, Request } from "express";
import { libroService } from "../services/libroService";

export const obtenerLibros = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string, 10) || 1;
  const limit = parseInt(req.query.limit as string, 10) || 15;

  try {
    const { libros, totalPages } = await libroService.obtenerLibros(page, limit);
    res.status(200).json({ libros, totalPages });
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