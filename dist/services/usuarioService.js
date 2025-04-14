"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioService = exports.UsuarioService = void 0;
const index_1 = require("../db/index");
const schema_1 = require("../db/schema");
const drizzle_orm_1 = require("drizzle-orm");
class UsuarioService {
    agregarUsuario(nombre, apellido, correo, contrasena) {
        return __awaiter(this, void 0, void 0, function* () {
            yield index_1.db.insert(schema_1.usuarios).values({
                nombre,
                apellido,
                correo,
                contrasena
            });
        });
    }
    obtenerUsuarioPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield index_1.db.select({
                nombre: schema_1.usuarios.nombre,
                apellido: schema_1.usuarios.apellido,
                correo: schema_1.usuarios.correo,
            }).from(schema_1.usuarios).where((0, drizzle_orm_1.eq)(schema_1.usuarios.id, id));
        });
    }
    verificarUsuario(correo, contrasena) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield index_1.db
                .select({
                id: schema_1.usuarios.id,
                nombre: schema_1.usuarios.nombre,
                apellido: schema_1.usuarios.apellido,
                correo: schema_1.usuarios.correo,
            })
                .from(schema_1.usuarios)
                .where((0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(schema_1.usuarios.correo, correo), (0, drizzle_orm_1.eq)(schema_1.usuarios.contrasena, contrasena)));
            return resultado.length > 0 ? resultado[0] : null;
        });
    }
    actualizarUsuario(id, nombre, apellido, contrasena) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield index_1.db.update(schema_1.usuarios).set({
                nombre,
                apellido,
                contrasena
            }).where((0, drizzle_orm_1.eq)(schema_1.usuarios.id, id));
        });
    }
}
exports.UsuarioService = UsuarioService;
exports.usuarioService = new UsuarioService();
