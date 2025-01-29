import { Request, Response } from "express";
import { usuarioService } from "../services/usuarioService";

export const crearUsuario = async (req: Request, res: Response) => {
  const { nombre, apellido, correo, contrasena } = req.body;

  if (!nombre || !apellido || !correo || !contrasena) {
    res.status(400).json({ error: "Hay datos que faltan" });
    return; 
  }

  try {
    await usuarioService.agregarUsuario(nombre, apellido, correo, contrasena);
    res.status(201).json({ mensaje: "Usuario creado exitosamente" });
  } catch (error) {
    console.error("Error en crearUsuario:", error);
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

export const obtenerUsuarioPorId = async (req: Request, res: Response) => {
  
  const { id } = req.params;

  try {
    const usuario = await usuarioService.obtenerUsuarioPorId(parseInt(id));
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuario" });
  }
}

export const verificarUsuario = async (req: Request, res: Response) => {

  const { correo, contrasena } = req.body;

  if (!correo || !contrasena) {
    res.status(400).json({ error: 'Correo y contraseña son requeridos' });
    return;
  }

  try {
    const usuario = await usuarioService.verificarUsuario(correo, contrasena);

    if (!usuario) {
      res.status(401).json({ error: 'Credenciales incorrectas' });
      return; 
    }

    res.json({ message: 'Inicio de sesión exitoso', usuario });
  
  } catch (error) {
    res.status(500).json({ error: 'Error al verificar usuario' });
  } 

}
