import Sequelize from 'sequelize';
import database from '../database/database';

const Persona = database.define('persona', {
 
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    apellido: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dni: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    fechaNacimiento: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default Persona;