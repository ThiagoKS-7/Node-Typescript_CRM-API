import manageAgentSchema from "../../dtos/ManageAgentSchema";
import { UpdateAgentClientUseCase } from "./UpdateAgentClientsUseCase";

const usecase = new UpdateAgentClientUseCase();
class UpdateAgentClientsController {
  
  async handle(request: any, reply: any) {
    try {
      const { id,clients } = manageAgentSchema.parse(request.body);
      const response = await usecase.execute(id, clients);
      return reply.status(200).send({
        statusCode: 200,
        message: "agent updated successfully!",
        token: response.data
      });
    } catch (err) {
      return reply.status(400).send({
        statusCode: 400,
        error: "BadRequest",
        message: "Invalid parameters. Check your payload and try again.",
      });
    }
  }
}

export { UpdateAgentClientsController };
