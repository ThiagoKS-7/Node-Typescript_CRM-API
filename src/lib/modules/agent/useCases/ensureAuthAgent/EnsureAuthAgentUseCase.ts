import { AgentRepository } from "../../repositories/AgentRepository";
import { IAgentRepository } from "../../repositories/IAgentRepository";

class EnsureAuthAgentUseCase {
  constructor(
    private agentRepository: IAgentRepository = AgentRepository.getInstance()
  ) {
    this.agentRepository = agentRepository;
  }

  async execute(user_id: string) {
    const agent = await this.agentRepository.findOneById(user_id);
    if (!agent) {
      return "Authentication failed: invalid token!";
    }
    return agent;
  }
}

export { EnsureAuthAgentUseCase };
