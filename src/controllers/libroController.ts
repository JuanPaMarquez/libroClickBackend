import { Response, Request } from "express";
import { libroService } from "../services/libroService";

export const obtenerLibros = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string, 10) || 1;
  const limit = parseInt(req.query.limit as string, 10) || 15;
  const genero = req.query.genero as string;

  console.log(page, limit, genero)

  try {
    const { libros, totalPages } = await libroService.obtenerLibros(page, limit, genero);
    // console.log("libros: ", libros)
    // console.log("totalPages: ", totalPages)
    res.status(200).json({ libros, totalPages });
  } catch (error) {
    res.status(500).json({ miError: "Error al obtener libros", error });
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