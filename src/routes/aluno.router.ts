import express = require('express')
import { Router } from "../common/interfaces/router.interface"

class AlunoRouter extends Router {

    constructor() {
        super()
    }

    applyRoutes(application: express.Application) {
        application.get('/alunos', this.findAll)
    }

    findAll = (req: express.Request, res: express.Response) => {
        res.status(200).json({ 'result': 'Lista de alunos' })
    }
}

export const alunoRouter = new AlunoRouter()