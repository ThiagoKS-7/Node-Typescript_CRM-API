import { ICreateClientDto } from "../../dtos/ICreateClientDto";
import { ClientRepository } from "../../repositories/ClientRepository";
import { IClientRepository } from "../../repositories/IClientRepository";

class CreateClientUseCase {
  constructor(
    private clientRepository: IClientRepository = ClientRepository.getInstance()
  ) {
    this.clientRepository = clientRepository;
  }
  async execute({
    name,
    email,
    phone,
    address,
    status,
    agentName,
  }: ICreateClientDto) {
    const clientAleradyExists = await this.clientRepository.findByEmail(email);
    if (clientAleradyExists) {
      return "Client already exists!";
    }

    const dto: ICreateClientDto = {
      name,
      email,
      phone,
      address,
      status,
      agentName,
    };
    const client = await this.clientRepository.create(dto);
    return client;
  }
}
export { CreateClientUseCase };
