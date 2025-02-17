import { db } from "../db";
import { eq, desc } from "drizzle-orm";
import { libros } from "../db/schema";

export class LibroService {

  async obtenerLibros(page: number, limit: number) {
    const offSet = (page - 1) * limit;

    const librosPaginados = await db
      .select()
      .from(libros)
      .orderBy(desc(libros.publicacion))
      .limit(limit)
      .offset(offSet);

    const totalLibros = await db.get<{ count: number }>(`SELECT COUNT(*) as count FROM libros`);

    const totalPages = Math.ceil(totalLibros.count / limit);

    return { libros: librosPaginados, totalPages };
  }

  async obtenerLibroPorId(id: number) {
    return await db.select().from(libros).where(eq(libros.id, id))
  }

}

export const libroService = new LibroService()