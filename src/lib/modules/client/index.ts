import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";
import { AssignAgentToClientController } from "./useCases/assignAgentToClient/AssignAgentToClientController";
import { CreateClientController } from "./useCases/createClient/CreateClientController";
import { EditClientController } from "./useCases/editClient/EditClientController";
import { EditStatusClientController } from "./useCases/editStatusClient/EditStatusClientController";
import { ListClientsController } from "./useCases/listClients/ListClientsController";
import { ListClientsByAgentController } from "./useCases/listClientsByAgent/LisrClientsByAgentController";
import { RemoveClientController } from "./useCases/removeClient/RemoveClientController";

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
    method: "GET",
    url: "/list-clients-by-agent",
    preHandler: fastify.auth([
      async (request: any, reply: any) => {
        await ensureAuthenticated(request, reply);
        done();
      },
    ]),
    handler: async (request: any, reply: any) => {
      const controller = new ListClientsByAgentController();
      await controller.handle(request, reply);
    },
  });
  fastify.route({
    method: "PUT",
    url: "/edit-client",
    preHandler: fastify.auth([
      async (request: any, reply: any) => {
        await ensureAuthenticated(request, reply);
        done();
      },
    ]),
    handler: async (request: any, reply: any) => {
      const controller = new EditClientController();
      await controller.handle(request, reply);
    },
  });
  fastify.route({
    method: "PATCH",
    url: "/update-status",
    preHandler: fastify.auth([
      async (request: any, reply: any) => {
        await ensureAuthenticated(request, reply);
        done();
      },
    ]),
    handler: async (request: any, reply: any) => {
      const controller = new EditStatusClientController();
      await controller.handle(request, reply);
    },
  });
  fastify.route({
    method: "PATCH",
    url: "/assign",
    preHandler: fastify.auth([
      async (request: any, reply: any) => {
        await ensureAuthenticated(request, reply);
        done();
      },
    ]),
    handler: async (request: any, reply: any) => {
      const controller = new AssignAgentToClientController();
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
  fastify.route({
    method: "DELETE",
    url: "/delete-client",
    preHandler: fastify.auth([
      async (request: any, reply: any) => {
        await ensureAuthenticated(request, reply);
        done();
      },
    ]),
    handler: async (request: any, reply: any) => {
      const controller = new RemoveClientController();
      await controller.handle(request, reply);
    },
  });

  done();
};