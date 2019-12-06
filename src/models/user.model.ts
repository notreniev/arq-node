import { config } from "../common/config";

const Sequelize = require('sequelize')
const conf = config(process.env.NODE_ENV || 'development')
const driver = new Sequelize(
    conf.database,
    conf.username,
    conf.password,
    {
        host: conf.host,
        dialect: conf.dialect,
        dialectOptions: {
            socketPath: conf.dialectOptions.socketPath
        }
    })

export class User {
    constructor() {
        this.create()
    }

    create = async () => {
        const User = driver.define('users', {
            id: {
                type: Sequelize.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Sequelize.STRING,
                required: true
            },
            email: {
                type: Sequelize.STRING,
                required: true
            }
        },{
            tableName: 'users',
            freezeTableName: false,
            timestamps: false
        })

        User.create({
            nome: 'Sil',
            email: 'baby@gmail.com'
        })

        await User.sync()
    }

}
