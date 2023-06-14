module.exports = function (fastify:any, opts:any, done:Function) {
    fastify.register(require("../dtos/agent"), {prefix: "/agent"})
    fastify.register(require("../dtos/client"), {prefix: "/agent"})
    done()
}