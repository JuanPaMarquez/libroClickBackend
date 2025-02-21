import { db } from "../db";
import { count, eq, desc } from "drizzle-orm";
import { libros } from "../db/schema";

export class LibroService {

  async obtenerLibros(page: number, limit: number, genero?: string) {
    const offSet = (page - 1) * limit;

    let query = db
      .select()
      .from(libros)
      .$dynamic()
      .orderBy(desc(libros.publicacion))
      .limit(limit)
      .offset(offSet);

    let totalLibrosQuery = db.select({ count: count() }).from(libros).$dynamic();
    
    if (genero) {
      query = query.where(eq(libros.genero, genero));
      totalLibrosQuery = totalLibrosQuery.where(eq(libros.genero, genero));
    }

    const librosPaginados = await query.all();
    const totalLibrosResult = await totalLibrosQuery.all();

    const totalPages = Math.ceil(totalLibrosResult[0].count / limit);

    return { libros: librosPaginados, totalPages };
  }

  async obtenerLibroPorId(id: number) {
    return await db.select().from(libros).where(eq(libros.id, id))
  }

}

export const libroService = new LibroService()