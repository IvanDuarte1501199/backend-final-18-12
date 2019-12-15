import Alquiler from '../models/alquiler';
import { Op } from 'sequelize';

export async function obtenerAlquileres(req, res) {
    try {
        const alquileres = await Alquiler.findAll();
        res.json(alquileres);
    }
    catch (e) {
        res.json({
            error: e.message
        })
    }
}

export async function crearAlquiler(req, res) {
    const { id, fechaInicio, fechaFin, propiedadId, clienteId, porcentajeAcme } = req.body;
    try {
        const alquiler = await Alquiler.create({
            id,
            fechaInicio,
            fechaFin,
            propiedadId,
            clienteId,
            porcentajeAcme
        });

        if (alquiler) {
            res.status(201).json({
                data: alquiler
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


export async function obtenerAlquiler(req, res) {
    try {
        const alquiler = await Alquiler.findOne({
            where: { id: req.params.idAlquiler }
        });


        if (alquiler) {
            res.status(200).json(
                alquiler
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

export async function borrarAlquiler(req, res) {
    const { idAlquiler } = req.params;
    try {
        const cantidadFilasBorradas = await Alquiler.destroy({
            where: { id: idAlquiler }
        });

        res.json({
            data: {},
            message: `Se eliminaron ${cantidadFilasBorradas} alquileres`
        })
    } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
}

export async function modificarAlquiler(req, res) {
    const { idAlquiler } = req.params;
    const { id, fechaInicio, fechaFin, propiedadId, clienteId, porcentajeAcme } = req.body;
    try {
        const alquiler = await Alquiler.findOne({
            where: { id: idAlquiler }
        })
        if (alquiler) {
            const alquilerModificado = await alquiler.update({
                id,
                fechaInicio,
                fechaFin,
                propiedadId,
                clienteId,
                porcentajeAcme
            });

            res.json({
                data: alquilerModificado
            })
        } else {
            res.status(404).json({
                data: {},
                message: `No se encontro el alquiler con el id: ${idAlquiler}`
            })
        }
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }


}