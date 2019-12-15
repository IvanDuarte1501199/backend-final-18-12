import Propiedad from '../models/propiedad';
import { Op } from 'sequelize';

export async function obtenerPropiedades(req, res) {
    try {
        const propiedades = await Propiedad.findAll();
        res.json(propiedades);
    }
    catch (e) {
        res.json({
            error: e.message
        })
    }
}

export async function crearPropiedad(req, res) {
    const { id, nombre, ubicacion, descripcion, notas, precioXdia, dueñoId } = req.body;
    try {
        const propiedad = await Propiedad.create({
            id,
            nombre,
            ubicacion,
            descripcion,
            notas,
            precioXdia,
            dueñoId
        });

        if (propiedad) {
            res.status(201).json({
                data: propiedad
            });
        } else {
            res.json(
                {}
            );
        }
    }
    catch (e) {
        res.status(500).json({
            error: e.message
        });
    }

}


export async function obtenerPropiedad(req, res) {
    try {
        const propiedad = await Propiedad.findOne({
            where: { id: req.params.idPropiedad }
        });


        if (propiedad) {
            res.status(200).json(
                propiedad
            );
        } else {
            res.json({
                data: {}
            });
        }
    }
    catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
}

export async function borrarPropiedad(req, res) {
    const { idPropiedad } = req.params;
    try {
        const cantidadFilasBorradas = await Propiedad.destroy({
            where: { id: idPropiedad }
        });

        res.json({
            data: {},
            message: `Se eliminaron ${cantidadFilasBorradas} propiedades`
        })
    } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
}

export async function modificarPropiedad(req, res) {
    const { idPropiedad } = req.params;
    const { id, nombre, ubicacion, descripcion, notas, precioXdia, dueñoId } = req.body;
    try {
        const propiedad = await Propiedad.findOne({
            where: { id: idPropiedad }
        })
        if (propiedad) {
            const propiedadModificado = await propiedad.update({
                id,
                nombre,
                ubicacion,
                descripcion,
                notas,
                precioXdia,
                dueñoId
            });

            res.json({
                data: propiedadModificado
            })
        } else {
            res.status(404).json({
                data: {},
                message: `No se encontro el propiedad con el id: ${idPropiedad}`
            })
        }
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }


}