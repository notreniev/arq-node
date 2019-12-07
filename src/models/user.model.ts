import { config } from "../common/config"
import { mySequelize } from "../common/db"
const Sequelize = require('sequelize')
const conf = config(process.env.NODE_ENV || 'development')
const sequelize = mySequelize

export const UserSchema = () => {
    const user = sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: true
        }
    },{
        tableName: 'users',
        freezeTableName: false,
        timestamps: false
    })

    return user
}

const User = UserSchema()

export class UserModel{

    constructor() {
    }

    create = async () => {
        User.create({
            nome: 'Ana',
            email: 'ana@gmail.com'
        })

        await User.sync()        
    }

    findAll = async () => {
        return await User.findAll({raw: true})
    }

    findById = async (id:number) => {
        return await User.findAll({
            where: {
                id: id
            }
        })
    }

}
