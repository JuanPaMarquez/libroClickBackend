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
exports.actualizarUsuario = exports.verificarUsuario = exports.obtenerUsuarioPorId = exports.crearUsuario = void 0;
const usuarioService_1 = require("../services/usuarioService");
const crearUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, correo, contrasena } = req.body;
    if (!nombre || !apellido || !correo || !contrasena) {
        res.status(400).json({ error: "Hay datos que faltan" });
        return;
    }
    try {
        yield usuarioService_1.usuarioService.agregarUsuario(nombre, apellido, correo, contrasena);
        res.status(201).json({ mensaje: "Usuario creado exitosamente" });
    }
    catch (error) {
        console.error("Error en crearUsuario:", error);
        res.status(500).json({ error: "Error al crear usuario" });
    }
});
exports.crearUsuario = crearUsuario;
const obtenerUsuarioPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const usuario = yield usuarioService_1.usuarioService.obtenerUsuarioPorId(parseInt(id));
        res.status(200).json(usuario);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener usuario" });
    }
});
exports.obtenerUsuarioPorId = obtenerUsuarioPorId;
const verificarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { correo, contrasena } = req.body;
    if (!correo || !contrasena) {
        res.status(400).json({ error: 'Correo y contraseña son requeridos' });
        return;
    }
    try {
        const usuario = yield usuarioService_1.usuarioService.verificarUsuario(correo, contrasena);
        if (!usuario) {
            res.status(401).json({ error: 'Credenciales incorrectas' });
            return;
        }
        res.json({ message: 'Inicio de sesión exitoso', usuario });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al verificar usuario' });
    }
});
exports.verificarUsuario = verificarUsuario;
const actualizarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, nombre, apellido, contrasena } = req.body;
    if (!id || !nombre || !apellido || !contrasena) {
        res.status(400).json({ error: 'Datos faltantes' });
        return;
    }
    try {
        yield usuarioService_1.usuarioService.actualizarUsuario(id, nombre, apellido, contrasena);
        res.json({ message: 'Usuario actualizado exitosamente' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar usuario' });
    }
});
exports.actualizarUsuario = actualizarUsuario;
