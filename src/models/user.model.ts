import { config } from "../common/config";

const Sequelize = require('sequelize')

export class User {
    config = config(process.env.NODE_ENV || 'development')
    sequelize = new Sequelize(this.config.database, this.config.username, this.config.password, {
        host: this.config.host,
        dialect: this.config.dialect,
        dialectOptions: {
            socketPath: this.config.dialectOptions.socketPath
        }
    });

    constructor() {
        this.sequelize.authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    }

}