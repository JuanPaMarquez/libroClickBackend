import { db } from "../db";
import { count, eq, desc } from "drizzle-orm";
import { libros } from "../db/schema";

export class LibroService {

  async obtenerLibros(page: number, limit: number, genero?: string) {
    const offSet = (page - 1) * limit;

    let query = db
      .select()
      .from(libros)
      .orderBy(desc(libros.publicacion))
      .limit(limit)
      .offset(offSet);

    let queryDinamic = query.$dynamic();
    
    if (genero) {
      queryDinamic = queryDinamic.where(eq(libros.genero, genero)).$dynamic();
    }

    const librosPaginados = await queryDinamic.all();

    console.log(librosPaginados)

    let totalLibrosQuery = db.select({ count: count() }).from(libros).$dynamic();

    if (genero) {
      totalLibrosQuery = totalLibrosQuery.where(eq(libros.genero, genero));
    }

    const totalLibrosResult = await totalLibrosQuery.all();

    const totalPages = Math.ceil(totalLibrosResult[0].count / limit);

    return { libros: librosPaginados, totalPages };
  }

  async obtenerLibroPorId(id: number) {
    return await db.select().from(libros).where(eq(libros.id, id))
  }

}

export const libroService = new LibroService()