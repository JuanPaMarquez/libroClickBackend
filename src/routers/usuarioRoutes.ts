import { Router } from 'express'
import { 
  crearUsuario, 
  obtenerUsuarioPorId, 
  verificarUsuario 
} from '../controllers/usuarioController'

const router = Router()

router.post('/usuario', crearUsuario)
router.get('/usuario/:id', obtenerUsuarioPorId)
router.post('/usuario/login', verificarUsuario)

export default router