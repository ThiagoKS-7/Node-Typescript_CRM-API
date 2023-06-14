import { ICreateAgentDto } from "../../dtos/ICreateAgentDto";
import { AgentRepository } from "../../repositories/AgentRepository";
import { IAgentRepository } from "../../repositories/IAgentRepository";

class CreateAgentUseCase {
  constructor(
    private agentRepository: IAgentRepository = new AgentRepository()
  ) {
    this.agentRepository = agentRepository;
  }
  async execute({ name, password, clients }: ICreateAgentDto) {
    try {
      await this.agentRepository.create({ name, password, clients });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export { CreateAgentUseCase };
