import { AgentRepository } from "../../repositories/AgentRepository";
import { IAgentRepository } from "../../repositories/IAgentRepository";
class UpdateAgentClientUseCase {
  constructor(
    private agentRepository: IAgentRepository = AgentRepository.getInstance()
  ) {
    this.agentRepository = agentRepository;
  }

  async execute(id:string, clients:any) {
    try {
      const response = await this.agentRepository.updateClient(id, clients);
      return {data: response};
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export { UpdateAgentClientUseCase };
