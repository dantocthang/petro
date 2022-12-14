import { DataTypes } from 'sequelize'
import sequelize from '../../config/db.js';

const User = sequelize.define('User', {
    fullName: {
        type: DataTypes.STRING,
    },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'user' },
    phone: { type: DataTypes.STRING(10) },
    token: { type: DataTypes.STRING }
}, {
    // Other model options go here
});

export default User