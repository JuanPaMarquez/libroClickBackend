import { db } from "../db";
import { eq, and } from "drizzle-orm";
import { historial } from "../db/schema";

export class HistorialService {

  async crearHistorial(idusuario: number, idlibro: number, titulo: string, estado: string) {
    await db.insert(historial).values({
      idusuario,
      idlibro,
      titulo,
      estado
    })
  }

  async obtenerHistorialPorId(id: number) {
    return await db.select().from(historial).where(eq(historial.idusuario, id))
  }

  async borrarHistorialPorId(id: number) {
    return await db.delete(historial).where(eq(historial.idhistorial, id))
  }
}

export const historialService = new HistorialService()