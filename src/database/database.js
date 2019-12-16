import Sequelize from 'sequelize';
const database = new Sequelize(
  "lab-4", "postgres", "admin",
  {
    dialect: 'postgres',
    host: 'localhost'
  }
);

export default database;