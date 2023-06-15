import { AgentRepository } from "../../repositories/AgentRepository";
import { IAgentRepository } from "../../repositories/IAgentRepository";

class ListAgentsUseCase {
  constructor(
    private agentRepository: IAgentRepository = AgentRepository.getInstance()
  ) {
    this.agentRepository = agentRepository;
  }
  async execute() {
    const agents = await this.agentRepository.findMany();
    return agents;
  }
}

export { ListAgentsUseCase };
