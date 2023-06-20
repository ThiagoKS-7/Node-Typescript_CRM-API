import deleteClientSchema from "../../dtos/DeleteClientSchema";
import { RemoveClientUseCase } from "./RemoveClientUseCase";
const usecase = new RemoveClientUseCase();

class RemoveClientController {
  async handle(request: any, reply: any) {
    try {
      const { id } = deleteClientSchema.parse(
        request.body
      );
      const res = await usecase.execute(id);
      if (typeof res == "string") {
        return reply.status(400).send({
          statusCode: 400,
          error: "BadRequest",
          message: res,
        });
      }
      return reply.status(204).send({
        statusCode: 204,
        message: "Client deleted successfully!",
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

export { RemoveClientController };
