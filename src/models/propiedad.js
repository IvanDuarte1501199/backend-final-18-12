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
        allowNull: false
    },
    notas: {
        type: Sequelize.STRING,
        allowNull: false
    },
    precioXdia: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    dueñoId: {
        type: Sequelize.NUMBER,
        allowNull: false,
        foreignKey: Persona.id
    },
    dueñoId: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});
Propiedad.belongsTo(Persona,{
    foreignKey: 'dueñoId',
});

export default Propiedad;