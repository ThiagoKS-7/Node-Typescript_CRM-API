import { ClientRepository } from "../../repositories/ClientRepository";
import { IClientRepository } from "../../repositories/IClientRepository";

class ListClientsUseCase {
  constructor(
    private clientRepository: IClientRepository = ClientRepository.getInstance()
  ) {
    this.clientRepository = clientRepository;
  }
  async execute() {
    const clients = await this.clientRepository.findMany();
    return clients;
  }
}

export { ListClientsUseCase };
