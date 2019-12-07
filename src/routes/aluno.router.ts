import express = require('express')
import { Router } from "../common/interfaces/router.interface"
import { UserModel } from '../models/user.model'

class AlunoRouter extends Router {
    model = null

    constructor() {
        super()
        this.model = new UserModel()
    }

    applyRoutes(application: express.Application) {
        application.get('/alunos', this.findAll)
        application.get('/alunos/:id', this.findById)
    }

    
    findAll = async (req: express.Request, res: express.Response) => {
        res.status(200).json(await this.model.findAll())
    }

    findById = async (req: express.Request, res: express.Response) => {
        const { id } = req.params
        res.status(200).json(await this.model.findById(id))
    }

}

export const alunoRouter = new AlunoRouter()