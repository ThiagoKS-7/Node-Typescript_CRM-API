import { ListClientsUseCase } from "./ListClientsUseCase";
const usecase = new ListClientsUseCase();

class ListClientsController {
    async handle(request:any, reply:any) {
        try {
            const clients = await usecase.execute();
            return reply.status(200).send({"data": clients});
        } catch (error) {
            return reply.status(500).send({
                "statusCode": 500,
                "error": "InternalServerError",
                "message":"Something wrong happened to the server. Try again later."
            });
        }
    }
}

export { ListClientsController }