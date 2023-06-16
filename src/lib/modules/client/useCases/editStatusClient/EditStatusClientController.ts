import manageClientSchema from "../../dtos/ManageClientSchema";
import { EditStatusClientUseCase } from "./EditStatusClientUseCase";
const usecase = new EditStatusClientUseCase();

class EditStatusClientController {
  async handle(request: any, reply: any) {
    try {
      const { id, status } = manageClientSchema.parse(
        request.body
      );
      const res = await usecase.execute(id,status);
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

export { EditStatusClientController };
