import { Sequelize } from 'sequelize'
const sequelize = new Sequelize('petro', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});



export default sequelize