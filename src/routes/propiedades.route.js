import { Router } from 'express';

import { obtenerPropiedades, obtenerPropiedad, crearPropiedad, modificarPropiedad, borrarPropiedad } from '../controllers/propiedad.controller';

const propiedadesRuta = Router();

propiedadesRuta.get('/', obtenerPropiedades);

propiedadesRuta.get('/:idPropiedad', obtenerPropiedad);

propiedadesRuta.post('/', crearPropiedad);

propiedadesRuta.put('/:idPropiedad', modificarPropiedad);

propiedadesRuta.delete('/:idPropiedad', borrarPropiedad);

export default propiedadesRuta;