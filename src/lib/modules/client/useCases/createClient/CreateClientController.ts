import createClientSchema from "../../dtos/CreateClientSchema";
import { CreateClientUseCase } from "./CreateClientUseCase";
const usecase = new CreateClientUseCase();

class CreateClientController {
  async handle(request: any, reply: any) {
    try {
      const { name, email, phone, address } = createClientSchema.parse(
        request.body
      );
      const res = await usecase.execute({
        name,
        email,
        phone,
        address,
        status: "Aguardando Atendimento",
        agentName: "",
      });
      if (typeof res == "string") {
        return reply.status(400).send({
          statusCode: 400,
          error: "BadRequest",
          message: res,
        });
      }
      return reply.status(201).send({
        statusCode: 201,
        message: "Client created successfully!",
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

export { CreateClientController };
