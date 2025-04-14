"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const libroController_1 = require("../controllers/libroController");
const libroRouter = (0, express_1.Router)();
libroRouter.get("/libros", libroController_1.obtenerLibros);
libroRouter.get("/libros/:id", libroController_1.obtenerLibroPorId);
exports.default = libroRouter;
