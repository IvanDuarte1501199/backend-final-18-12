import Sequelize from 'sequelize';
import database from '../database/database';
import Persona from './persona';
import Propiedad from './propiedad';

const Alquiler = database.define('alquiler', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fechaInicio: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    fechaFin: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    propiedadId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: Propiedad.id
    },
    clienteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: Persona.id
    },
    porcentajeAcme: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});
Alquiler.belongsTo(Persona,{
    foreignKey: 'clienteId',
});
Alquiler.belongsTo(Propiedad,{
    foreignKey: 'propiedadId',
    onDelete: 'CASCADE',
});
export default Alquiler;