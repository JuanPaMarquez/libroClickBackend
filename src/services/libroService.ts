import { db } from "../db";
import { eq, and } from "drizzle-orm";
import { libros } from "../db/schema";

export class LibroService {

  async obtenerLibros() {
    return await db.select().from(libros)
  }

  async obtenerLibroPorId(id: number) {
    return await db.select().from(libros).where(eq(libros.id, id))
  }

}

export const libroService = new LibroService()