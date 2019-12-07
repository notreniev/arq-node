const express = require('express')
const app = express()

import { UserModel } from '../models/user.model';
import { config } from './config';
import { Router } from './interfaces/router.interface';

export class Server {

  config = config(process.env.NODE_ENV || 'development')

  constructor() { }

  private loadServer(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        app.listen(this.config.port, () => resolve(app))
      } catch (error) {
        reject(error)
      }
    })
  }

  private initializeRoutes(routers: Router[]): void {
    for (let router of routers) {
      router.applyRoutes(app)
    }

    const user = new UserModel()
    
  }

  bootstrap = async (routers: Router[]) => {
    await this.loadServer().then(() => this.initializeRoutes(routers))
  }
}
