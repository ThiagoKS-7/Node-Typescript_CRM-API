import { ICreateClientDto } from "../../dtos/ICreateClientDto";
import { ClientRepository } from "../../repositories/ClientRepository";
import { IClientRepository } from "../../repositories/IClientRepository";

class EditClientUseCase {
  constructor(
    private clientRepository: IClientRepository = ClientRepository.getInstance()
  ) {
    this.clientRepository = clientRepository;
  }
  async execute(id:string,{
    name,
    email,
    phone,
    address,
    status,
    agentName,
  }: ICreateClientDto) {
    const clientExists = await this.clientRepository.findOne(id);
    if (!clientExists) {
      return "Client doesnt exists!";
    }

    const dto: ICreateClientDto = {
      name,
      email,
      phone,
      address,
      status,
      agentName,
    };
    const client = await this.clientRepository.update(id, dto);
    return client;
  }
}
export { EditClientUseCase };
