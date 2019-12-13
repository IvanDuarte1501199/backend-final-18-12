import Sequelize from 'sequelize';
const database = new Sequelize(
  "postgres", "postgres", "admin",
  {
    dialect: 'postgres',
    host: 'localhost'
  }
);

export default database;