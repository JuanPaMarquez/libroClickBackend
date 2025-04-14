"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const historialController_1 = require("../controllers/historialController");
const historialRouter = (0, express_1.Router)();
historialRouter.post('/historial', historialController_1.crearHistorial);
historialRouter.get('/historial/:id', historialController_1.obtenerHistorialPorIdUsuario);
historialRouter.delete('/historial/:id', historialController_1.borrarHistorialPorIdHistorial);
exports.default = historialRouter;
