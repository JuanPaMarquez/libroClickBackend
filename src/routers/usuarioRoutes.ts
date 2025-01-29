import { Router } from 'express'
import { 
  crearUsuario, 
  obtenerUsuarioPorId, 
  verificarUsuario,
  actualizarUsuario
} from '../controllers/usuarioController'

const usuarioRouter = Router()

usuarioRouter.post('/usuario', crearUsuario)
usuarioRouter.get('/usuario/:id', obtenerUsuarioPorId)
usuarioRouter.post('/usuario/login', verificarUsuario)
usuarioRouter.post('/usuario/actualizar', actualizarUsuario)

export default usuarioRouter