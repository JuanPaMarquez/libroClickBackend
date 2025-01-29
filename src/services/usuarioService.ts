import { db } from '../db/index'
import { usuarios } from '../db/schema'
import { and, eq } from 'drizzle-orm'

export class UsuarioService {

  async agregarUsuario(nombre: string, apellido: string, correo: string, contrasena: string) {
    await db.insert(usuarios).values({
      nombre,
      apellido,
      correo,
      contrasena
    })
  }

  async obtenerUsuarioPorId(id: number) {
    return await db.select().from(usuarios).where(eq(usuarios.id, id))
  }

  async verificarUsuario(correo: string, contrasena: string) {
    const resultado = await db
      .select()
      .from(usuarios)
      .where(
        and(
          eq(usuarios.correo, correo),
          eq(usuarios.contrasena, contrasena)
        )
      )

    return resultado.length > 0 ? resultado[0] : null
  }
}

export const usuarioService = new UsuarioService()