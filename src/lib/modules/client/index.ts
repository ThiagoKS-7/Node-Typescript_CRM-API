import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";
import { CreateClientController } from "./useCases/createClient/CreateClientController";
import { ListClientsController } from "./useCases/listClients/ListClientsController";

module.exports = function (fastify: any, opts: any, done: any) {
  fastify.route({
    method: "GET",
    url: "/list-clients",
    preHandler: fastify.auth([
      async (request: any, reply: any) => {
        await ensureAuthenticated(request, reply);
        done();
      },
    ]),
    handler: async (request: any, reply: any) => {
      const controller = new ListClientsController();
      await controller.handle(request, reply);
    },
  });
  fastify.route({
    method: "POST",
    url: "/create-client",
    preHandler: fastify.auth([
      async (request: any, reply: any) => {
        await ensureAuthenticated(request, reply);
        done();
      },
    ]),
    handler: async (request: any, reply: any) => {
      const controller = new CreateClientController();
      await controller.handle(request, reply);
    },
  });

  done();
};