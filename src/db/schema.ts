import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usuarios = sqliteTable("usuarios", {
  id: integer("id").primaryKey(),
  nombre: text("nombre").notNull(),
  apellido: text("apellido").notNull(),
  correo: text("correo").notNull(),
  contrasena: text("contrasena").notNull(),
})