import { AgentRepository } from "../../repositories/agent/AgentRepository"
import { ICreateAgentDto } from "./ICreateAgentDto";
import createAgentSchema from "./CreateAgentSchema";

const agentRepo = new AgentRepository;



module.exports = function (fastify:any, opts:any, done:any) {
    /* rota pra conseguir listar os clientes de cada agente */
    fastify.get("/", async (request:any, reply:any) =>{
        try {
            const agents = await agentRepo.findMany();
            return reply.status(200).send({"data": agents})
        } catch (err) {
            return reply.status(400).send(JSON.parse(err.message))
        }
    })

    fastify.post("/register", async (request:any, reply:any) =>{
        try {   
            const {name, password} = createAgentSchema.parse(request.body)
            const agent:ICreateAgentDto = {name, password, clients:[]};
            agentRepo.create(agent);
            return reply.status(201).send({"message": "User created successfully"})
        } catch (err) {
            return reply.status(400).send(JSON.parse(err.message))
        }
    }) 

    done()
}