import { ClientRepository } from "../../repositories/ClientRepository";
import { IClientRepository } from "../../repositories/IClientRepository";

class AssignAgentToClientUseCase {
  constructor(
    private clientRepository: IClientRepository = ClientRepository.getInstance()
  ) {
    this.clientRepository = clientRepository;
  }
  async execute(id:string, name:string) {
    const clientExists = await this.clientRepository.findOne(id);
    if (!clientExists) {
      return "Client doesnt exists!";
    }

    const client = await this.clientRepository.updateAgent(id, name);
    return client;
  }
}
export { AssignAgentToClientUseCase };
