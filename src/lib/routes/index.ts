module.exports = function (fastify:any, opts:any, done:Function) {
    fastify.register(require("../dtos/agent"), {prefix: "/agent"})
    done()
}