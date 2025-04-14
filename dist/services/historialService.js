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
exports.historialService = exports.HistorialService = void 0;
const db_1 = require("../db");
const drizzle_orm_1 = require("drizzle-orm");
const schema_1 = require("../db/schema");
class HistorialService {
    crearHistorial(idusuario, idlibro, titulo, estado) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_1.db.insert(schema_1.historial).values({
                idusuario,
                idlibro,
                titulo,
                estado
            });
        });
    }
    obtenerHistorialPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.db.select().from(schema_1.historial).where((0, drizzle_orm_1.eq)(schema_1.historial.idusuario, id));
        });
    }
    borrarHistorialPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield db_1.db.delete(schema_1.historial).where((0, drizzle_orm_1.eq)(schema_1.historial.idhistorial, id));
        });
    }
}
exports.HistorialService = HistorialService;
exports.historialService = new HistorialService();
