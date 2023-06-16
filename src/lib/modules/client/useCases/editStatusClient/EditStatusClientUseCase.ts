import { ClientRepository } from "../../repositories/ClientRepository";
import { IClientRepository } from "../../repositories/IClientRepository";

class EditStatusClientUseCase {
  constructor(
    private clientRepository: IClientRepository = ClientRepository.getInstance()
  ) {
    this.clientRepository = clientRepository;
  }
  async execute(id:string, status:string) {
    const clientExists = await this.clientRepository.findOne(id);
    if (!clientExists) {
      return "Client doesnt exists!";
    }

    const client = await this.clientRepository.updateStatus(id, status);
    return client;
  }
}
export { EditStatusClientUseCase };
