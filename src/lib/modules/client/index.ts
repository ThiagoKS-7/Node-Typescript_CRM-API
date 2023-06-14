import { ClientRepository } from "./repositories/ClientRepository";
import { CreateClientController } from "./useCases/createClient/CreateClientController";
import { ListClientsController } from "./useCases/listClients/ListClientsController";

const clientRepo = new ClientRepository();

module.exports = function (fastify: any, opts: any, done: any) {
  fastify.get("/list-clients", async (request: any, reply: any) => {
    const controller = new ListClientsController();
    await controller.handle(request, reply);
  });

  fastify.post("/create-client", async (request: any, reply: any) => {
    const controller = new CreateClientController();
    await controller.handle(request, reply);
  });

  done();
};
