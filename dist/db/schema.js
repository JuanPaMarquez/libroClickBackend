"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.historial = exports.libros = exports.usuarios = void 0;
const sqlite_core_1 = require("drizzle-orm/sqlite-core");
exports.usuarios = (0, sqlite_core_1.sqliteTable)("usuarios", {
    id: (0, sqlite_core_1.integer)("id").primaryKey(),
    nombre: (0, sqlite_core_1.text)("nombre").notNull(),
    apellido: (0, sqlite_core_1.text)("apellido").notNull(),
    correo: (0, sqlite_core_1.text)("correo").notNull(),
    contrasena: (0, sqlite_core_1.text)("contrasena").notNull(),
});
exports.libros = (0, sqlite_core_1.sqliteTable)("libros", {
    id: (0, sqlite_core_1.integer)("id").primaryKey(),
    titulo: (0, sqlite_core_1.text)("titulo").notNull(),
    autor: (0, sqlite_core_1.text)("autor").notNull(),
    publicacion: (0, sqlite_core_1.integer)("publicacion").notNull(),
    genero: (0, sqlite_core_1.text)("genero").notNull(),
    resumen: (0, sqlite_core_1.text)("resumen").notNull(),
    portada: (0, sqlite_core_1.text)("portada").notNull(),
    descarga: (0, sqlite_core_1.text)("descarga").notNull(),
});
exports.historial = (0, sqlite_core_1.sqliteTable)("historial", {
    idhistorial: (0, sqlite_core_1.integer)("idhistorial").primaryKey(),
    idusuario: (0, sqlite_core_1.integer)("idusuario").notNull(),
    idlibro: (0, sqlite_core_1.integer)("idlibro").notNull(),
    titulo: (0, sqlite_core_1.text)("titulo").notNull(),
    estado: (0, sqlite_core_1.text)("estado").notNull(),
});
