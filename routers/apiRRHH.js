import Express, { request } from "express";

const empleado = Express();
import { getEmpleado, postEmpleado,putEmpledo, deleteEmpleado} from "../controllers/empleadoscontroller.js";

// import {getInfoEmpleado ,putSalario} from "../controllers/salariosController.js"

empleado.get('', getEmpleado)

empleado.post('', postEmpleado)

empleado.put('/:id', putEmpledo)

empleado.delete('/:id', deleteEmpleado)

// empleado.get('/RH', getInfoEmpleado)

// empleado.put('RH/:idSalario', putSalario)
export { empleado }