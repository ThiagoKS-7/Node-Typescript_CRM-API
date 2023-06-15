module.exports = function (fastify: any, opts: any, done: Function) {
  fastify.register(require("@fastify/auth")).after(() => {
    fastify.register(require("@fastify/cors"), { 
      origin:'*',
      methods:['POST', 'GET', 'PUT', 'PATCH', 'DELETE'],
    })
    fastify.register(require("../modules/agent"), { prefix: "/agent" });
    fastify.register(require("../modules/client"), { prefix: "/agent" });
  });
  done();
};
