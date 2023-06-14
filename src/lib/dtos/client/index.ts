import { ICreateClientDto } from "./ICreateClientDto";
import createClientSchema from "./CreateClientSchema";
import { ClientRepository } from "../../repositories/client/CliientRepository";

const clientRepo = new ClientRepository;



module.exports = function (fastify:any, opts:any, done:any) {
    /* rota pra conseguir listar os clientes de cada cliente */
    fastify.get("/list-clients", async (request:any, reply:any) =>{
        try {
            const clients = await clientRepo.findMany();
            return reply.status(200).send({"data": clients})
        } catch (err) {
            return reply.status(400).send(JSON.parse(err.message))
        }
    })

    fastify.post("/create-client", async (request:any, reply:any) =>{
        try {   
            const {name, email, phone, address} = createClientSchema.parse(request.body)
            const client:ICreateClientDto = {name, email, phone, address, status: "Aguardando Atendimento", agentId: null};
            clientRepo.create(client);
            return reply.status(201).send({"message": "Client created successfully"})
        } catch (err) {
            return reply.status(400).send(JSON.parse(err.message))
        }
    }) 

    done()
}