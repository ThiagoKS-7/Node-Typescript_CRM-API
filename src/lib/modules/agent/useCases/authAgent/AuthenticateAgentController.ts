import createAgentSchema from "../../dtos/CreateAgentSchema";
import { AuthenticateAgentUseCase } from "./AuthenticateAgentUseCase";

const usecase = new AuthenticateAgentUseCase();
class AuthenticateAgentController {
  async handle(request: any, reply: any) {
    try {
      const { name, password } = createAgentSchema.parse(request.body);
      const res = await usecase.execute(name, password);
      if (typeof res === "string") {
        return reply.status(400).send({
          statusCode: 400,
          error: "BadRequest",
          message: res,
        });
      }
      return reply.status(201).send({
        statusCode: 201,
        message: "Agent logged in successfully!",
        token: res,
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

export { AuthenticateAgentController };
