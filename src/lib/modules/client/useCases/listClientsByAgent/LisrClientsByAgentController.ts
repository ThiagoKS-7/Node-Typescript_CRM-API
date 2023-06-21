import filterSchema from "../../dtos/FilterClientByAgentSchema";
import { ListClientsByAgentUseCase } from "./ListClientsByAgentUseCase";
const usecase = new ListClientsByAgentUseCase();

class ListClientsByAgentController {
    async handle(request:any, reply:any) {
        try {
            const { name } = filterSchema.parse(
                request.query
              );
            const clients = await usecase.execute(name);
            return reply.status(200).send({"data": clients});
        } catch (error) {
            console.log(error)
            return reply.status(500).send({
                "statusCode": 500,
                "error": "InternalServerError",
                "message":"Something wrong happened to the server. Try again later."
            });
        }
    }
}

export { ListClientsByAgentController }