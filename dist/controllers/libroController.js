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
exports.obtenerLibroPorId = exports.obtenerLibros = void 0;
const libroService_1 = require("../services/libroService");
const obtenerLibros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const libros = yield libroService_1.libroService.obtenerLibros();
        res.status(200).json(libros);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener libros" });
    }
});
exports.obtenerLibros = obtenerLibros;
const obtenerLibroPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const libro = yield libroService_1.libroService.obtenerLibroPorId(parseInt(id));
        res.status(200).json(libro);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener libro" });
    }
});
exports.obtenerLibroPorId = obtenerLibroPorId;
