import manageClientSchema from "../../dtos/ManageClientSchema";
import { AssignAgentToClientUseCase } from "./AssginAgentToClientUseCase";
const usecase = new AssignAgentToClientUseCase();

class AssignAgentToClientController {
  async handle(request: any, reply: any) {
    try {
      const { id, name } = manageClientSchema.parse(
        request.body
      );
      const res = await usecase.execute(id,name);
      if (typeof res == "string") {
        return reply.status(400).send({
          statusCode: 400,
          error: "BadRequest",
          message: res,
        });
      }
      return reply.status(200).send({
        statusCode: 200,
        message: "Client updated successfully!",
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

export { AssignAgentToClientController };
