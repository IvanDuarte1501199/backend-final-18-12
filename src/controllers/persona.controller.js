import Persona from '../models/persona';
import { Op } from 'sequelize';

export async function obtenerPersonas(req, res) {
    try {
        const personas = await Persona.findAll();
        res.json(personas);
    }
    catch (e) {
        res.json({
            error: e.message
        })
    }
}

export async function crearPersona(req, res) {
    const { id, nombre, apellido, dni, fechaNacimiento, tipo } = req.body;
    try {
        const persona = await Persona.create({
            id,
            nombre,
            apellido,
            dni,
            fechaNacimiento,
            tipo
        });

        if (persona) {
            res.status(201).json({
                data: persona
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


export async function obtenerPersona(req, res) {
    try {
        const persona = await Persona.findOne({
            where: { id: req.params.idPersona }
        });


        if (persona) {
            res.status(200).json(
                persona
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

export async function borrarPersona(req, res) {
    const { idPersona } = req.params;
    try {
        const cantidadFilasBorradas = await Persona.destroy({
            where: { id: idPersona }
        });

        res.json({
            data: {},
            message: `Se eliminaron ${cantidadFilasBorradas} personas`
        })
    } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
}

export async function modificarPersona(req, res) {
    const { idPersona } = req.params;
    const { id, nombre, apellido, dni, fechaNacimiento, tipo } = req.body;
    try {
        const persona = await Persona.findOne({
            where: { id: idPersona }
        })
        if (persona) {
            const personaModificado = await persona.update({
                id, 
                nombre, 
                apellido,
                dni, 
                fechaNacimiento, 
                tipo
            });

            res.json({
                data: personaModificado
            })
        } else {
            res.status(404).json({
                data: {},
                message: `No se encontro el persona con el id: ${idPersona}`
            })
        }
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }


}