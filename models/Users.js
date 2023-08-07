const {Model, Datatypes} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User,init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        sequelize: connection,
        timestamps: false,
        freezeTableName: true,
        modelName: 'user'
    }
);

module.exports = User;