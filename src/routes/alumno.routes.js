import { Router } from 'express'
const router = Router();
import * as AlumnoCtrl from '../controllers/alumno.controller'

router.get('/listar/', AlumnoCtrl.readAlumno); //// listar alumno

router.get('/listarID/:id', AlumnoCtrl.readAlumnoID); //// listar por id

router.post('/create/', AlumnoCtrl.createAlumno); //// crear alumno

router.delete('/delete/:id', AlumnoCtrl.deleteAlumno); //// eliminar alumno

router.put('/update/:id', AlumnoCtrl.updateAlumno); //// modificar alumno

export default router;