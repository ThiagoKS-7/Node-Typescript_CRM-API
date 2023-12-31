import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";
import { AuthenticateAgentController } from "./useCases/authAgent/AuthenticateAgentController";
import { CreateAgentController } from "./useCases/createAgent/CreateAgentController";
import { ListAgentsController } from "./useCases/listAgents/ListAgentsController";
import { UpdateAgentClientsController } from "./useCases/updateAgentClients/UpdateAgentClientsController";

module.exports = function (fastify: any, opts: any, done: any) {
  /* rota pra conseguir listar os clientes de cada agente */
  fastify.route({
    method: "GET",
    url: "/list",
    preHandler: fastify.auth([
      async (request: any, reply: any) => {
        await ensureAuthenticated(request, reply);
        done();
      },
    ]),
    handler: async (request: any, reply: any) => {
      const controller = new ListAgentsController();
      await controller.handle(request, reply);
    },
  });
  fastify.route({
    method: "PATCH",
    url: "/update-clients",
    preHandler: fastify.auth([
      async (request: any, reply: any) => {
        await ensureAuthenticated(request, reply);
        done();
      },
    ]),
    handler: async (request: any, reply: any) => {
      const controller = new UpdateAgentClientsController();
      await controller.handle(request, reply);
    },
  });
  fastify.post("/register", async (request: any, reply: any) => {
    const controller = new CreateAgentController();
    await controller.handle(request, reply);
  });

  fastify.post("/login", async (request: any, reply: any) => {
    const controller = new AuthenticateAgentController();
    await controller.handle(request, reply);
  });

  done();
};
