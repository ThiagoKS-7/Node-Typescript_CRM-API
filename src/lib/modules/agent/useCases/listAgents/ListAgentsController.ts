import { ListAgentsUseCase } from "./ListAgentsUseCase";
const usecase = new ListAgentsUseCase();

class ListAgentsController {
  async handle(request: any, reply: any) {
    try {
      const agents = await usecase.execute();
      return reply.status(200).send({ data: agents });
    } catch (error) {
      return reply.status(500).send({
        statusCode: 500,
        error: "InternalServerError",
        message: "Something wrong happened to the server. Try again later.",
      });
    }
  }
}

export { ListAgentsController };
