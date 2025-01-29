import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usuarios = sqliteTable("usuarios", {
  id: integer("id").primaryKey(),
  nombre: text("nombre").notNull(),
  apellido: text("apellido").notNull(),
  correo: text("correo").notNull(),
  contrasena: text("contrasena").notNull(),
})

export const libros = sqliteTable("libros", {
  id: integer("id").primaryKey(),
  titulo: text("titulo").notNull(),
  autor: text("autor").notNull(),
  publicacion: integer("publicacion").notNull(),
  genero: text("genero").notNull(),
  resumen: text("resumen").notNull(),
  portada: text("portada").notNull(),
  descarga: text("descarga").notNull(),
})

export const historial = sqliteTable("historial", {
  idhistorial: integer("idhistorial").primaryKey(),
  idusuario: integer("idusuario").notNull(),
  idlibro: integer("idlibro").notNull(),
  titulo: text("titulo").notNull(),
  estado: text("estado").notNull(),
})