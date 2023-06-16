import { hash } from "bcrypt";
import { ICreateAgentDto } from "../../dtos/ICreateAgentDto";
import { AgentRepository } from "../../repositories/AgentRepository";
import { IAgentRepository } from "../../repositories/IAgentRepository";
import { sign, SignOptions } from "jsonwebtoken";
class CreateAgentUseCase {
  constructor(
    private agentRepository: IAgentRepository = AgentRepository.getInstance()
  ) {
    this.agentRepository = agentRepository;
  }
  async generateToken(agent: any) {
    const payload = {
      id: agent.id,
      name: agent.name,
    };

    const signInOptions: SignOptions = {
      expiresIn: "1h",
    };
    return sign(payload, process.env.JWT_SECRET as string, signInOptions);
  }
  
  async execute({ name, password, clients }: ICreateAgentDto) {
    try {
      const passwordHash = await hash(password, 8);
      const agent = await this.agentRepository.create({
        name,
        password: passwordHash,
        clients,
      });
      const token = await this.generateToken(agent);
      return {data:token};
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export { CreateAgentUseCase };
