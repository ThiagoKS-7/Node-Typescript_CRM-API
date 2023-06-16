import { ClientRepository } from "../../repositories/ClientRepository";
import { IClientRepository } from "../../repositories/IClientRepository";

class ListClientsByAgentUseCase {
  constructor(
    private clientRepository: IClientRepository = ClientRepository.getInstance()
  ) {
    this.clientRepository = clientRepository;
  }
  async execute(name: string) {
    const clients = await this.clientRepository.findManyByAgentName(name);
    return clients;
  }
}

export { ListClientsByAgentUseCase };
