import { AuthenticateAgentController } from "./useCases/authAgent/AuthenticateAgentController";
import { CreateAgentController } from "./useCases/createAgent/CreateAgentController";
import { ListAgentsController } from "./useCases/listAgents/ListAgentsController";

module.exports = function (fastify: any, opts: any, done: any) {
  /* rota pra conseguir listar os clientes de cada agente */
  fastify.get("/list", async (request: any, reply: any) => {
    const controller = new ListAgentsController();
    await controller.handle(request, reply);
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
