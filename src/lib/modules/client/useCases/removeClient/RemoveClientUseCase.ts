import { ClientRepository } from "../../repositories/ClientRepository";
import { IClientRepository } from "../../repositories/IClientRepository";

class RemoveClientUseCase {
  constructor(
    private clientRepository: IClientRepository = ClientRepository.getInstance()
  ) {
    this.clientRepository = clientRepository;
  }
  async execute(id:string) {
    const clientExists = await this.clientRepository.findOne(id);
    if (!clientExists) {
      return "Client doesnt exists!";
    }

    const client = await this.clientRepository.delete(id);
    return client;
  }
}
export { RemoveClientUseCase };
