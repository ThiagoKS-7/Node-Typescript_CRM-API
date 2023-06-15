import { hash } from "bcrypt";
import { ICreateAgentDto } from "../../dtos/ICreateAgentDto";
import { AgentRepository } from "../../repositories/AgentRepository";
import { IAgentRepository } from "../../repositories/IAgentRepository";

class CreateAgentUseCase {
  constructor(
    private agentRepository: IAgentRepository = AgentRepository.getInstance()
  ) {
    this.agentRepository = agentRepository;
  }
  async execute({ name, password, clients }: ICreateAgentDto) {
    try {
      const passwordHash = await hash(password, 8);
      await this.agentRepository.create({
        name,
        password: passwordHash,
        clients,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export { CreateAgentUseCase };
