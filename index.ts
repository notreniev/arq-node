import { Server } from "./src/common/server";
import { alunoRouter } from "./src/routes/aluno.router";

const server = new Server()
const routers = [alunoRouter]

server.bootstrap(routers)
  .then(() => console.log(`Server is running on ${server.config.host + ':' + server.config.port}`))
  .catch(error => {
    console.log('Error on trying to load express server')
    console.error(error)
    process.exit(1)
  })
