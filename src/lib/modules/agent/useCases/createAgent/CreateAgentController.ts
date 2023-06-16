import createAgentSchema from "../../dtos/CreateAgentSchema";
import { CreateAgentUseCase } from "./CreateAgentUseCase";

const usecase = new CreateAgentUseCase();
class CreateAgentController {
  
  async handle(request: any, reply: any) {
    try {
      const { name, password } = createAgentSchema.parse(request.body);
      const response = await usecase.execute({ name, password, clients: [] });
      return reply.status(201).send({
        statusCode: 201,
        message: "User created successfully!",
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

export { CreateAgentController };
