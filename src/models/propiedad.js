import Sequelize from 'sequelize';
import database from '../database/database';
import Persona from './persona';

const Propiedad = database.define('propiedad', {
 
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ubicacion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING,
    },
    notas: {
        type: Sequelize.STRING,
    },
    precioXdia: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    dueñoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: Persona.id
    },
});
Propiedad.belongsTo(Persona,{
    foreignKey: 'dueñoId',
    onDelete: 'CASCADE',
});

export default Propiedad;