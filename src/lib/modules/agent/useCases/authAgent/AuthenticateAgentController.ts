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
      return reply.status(200).send({
        statusCode: 200,
        message: "Agent logged in successfully!",
        token: res.data,
      });
    } catch (err) {
      console.log(err);
      return reply.status(400).send({
        statusCode: 400,
        error: "BadRequest",
        message: "Invalid parameters. Check your payload and try again.",
      });
    }
  }
}

export { AuthenticateAgentController };
