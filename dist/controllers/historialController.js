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
exports.borrarHistorialPorIdHistorial = exports.obtenerHistorialPorIdUsuario = exports.crearHistorial = void 0;
const historialService_1 = require("../services/historialService");
const crearHistorial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idusuario, idlibro, titulo, estado } = req.body;
    if (!idusuario || !idlibro || !titulo || !estado) {
        res.status(400).json({ error: "Hay datos que faltan" });
        return;
    }
    try {
        yield historialService_1.historialService.crearHistorial(idusuario, idlibro, titulo, estado);
        res.status(201).json({ mensaje: "Historial creado exitosamente" });
    }
    catch (error) {
        res.status(500).json({ error: "Error al crear historial" });
    }
});
exports.crearHistorial = crearHistorial;
const obtenerHistorialPorIdUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const historial = yield historialService_1.historialService.obtenerHistorialPorId(parseInt(id));
        res.status(200).json(historial);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener historial" });
    }
});
exports.obtenerHistorialPorIdUsuario = obtenerHistorialPorIdUsuario;
const borrarHistorialPorIdHistorial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ error: "Falta el id" });
        return;
    }
    try {
        yield historialService_1.historialService.borrarHistorialPorId(parseInt(id));
        res.status(200).json({ mensaje: "Historial borrado" });
    }
    catch (error) {
        res.status(500).json({ error: "Error al borrar historial" });
    }
});
exports.borrarHistorialPorIdHistorial = borrarHistorialPorIdHistorial;
